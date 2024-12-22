"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "../PasswordInput";
import Link from "next/link";
import { toast } from "sonner";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, "The minimum character count is 4")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  general?: string;
}

const FormSignUp: React.FC = () => {
  const router = useRouter();

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      general: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        localStorage.setItem("userEmail", values.email);

        const response = await fetch(
          "https://elearning-api-alpha.vercel.app/api/v1/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              password: values.password,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to create account");
        }
        toast.success("check your email please , verifid OTP ", {
          style: { background: "#dcfce7", color: "#16a34a" },
          className: "border-green-500",
        });
        const data = await response.json();
        console.log("Account created:", data);

        router.push("./sign-up/confirme-account");
      } catch (err: unknown) {
        if (err instanceof Error) {
          const errorMessage =
            err.message ||
            "There was an issue creating the account. Please try again later.";

          if (err.message === "Email already exists") {
            formik.setFieldError("email", "This email is already registered");
          } else {
            formik.setFieldValue("general", errorMessage);
          }
        } else {
          formik.setFieldValue("general", "An unknown error occurred.");
        }
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center  p-4 pt-10">
      <div className="w-full max-w-md my-10 bg-white p-8  shadow-xl border rounded-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Your Account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Join thousands of users and start your journey with us today.
          </p>
        </div>

        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          {formik.errors.general && (
            <div className="text-red-500 text-sm mb-2">
              {formik.errors.general}
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="name">
              Full Name
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mt-2"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>

          <div>
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full mt-2"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div>
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <PasswordInput
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            )}
          </div>

          <div>
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <PasswordInput
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#f46506] text-white py-3 rounded-full hover:bg-[#e07f05] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f46506] focus:ring-offset-2 text-sm font-medium"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Creating..." : "Create Account"}
          </button>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
            </span>
            <Link
              href="./sign-in"
              className="text-[#f46506] hover:text-[#d55605] font-medium text-sm"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
