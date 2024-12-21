"use client"
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "../PasswordInput";
import Link from "next/link";


const validationSchema = Yup.object({
  name: Yup.string().min(4,"the min caracter is 4").required("Full Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], "Passwords must match")
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
        const response = await axios.post(
          "https://elearning-api-alpha.vercel.app/api/v1/auth/signup",
          {
            name: values.name,
            email: values.email,
            password: values.password,
          }
        );

        console.log("Account created:", response.data);
        router.push("./sign-up/confirme-account");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          "There was an issue creating the account. Please try again later.";

       
        formik.setFieldValue("general", errorMessage);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md my-10 bg-white p-8 shadow-xl">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Create Your Account</h1>
          <p className="mt-3 text-sm text-center text-gray-600">
            Join thousands of users and start your journey with us today.
          </p>
        </div>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {formik.errors.general && (
            <div className="text-red-500 text-sm">{formik.errors.general}</div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="name">
              Full Name
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <PasswordInput
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <PasswordInput
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#f46506] text-white py-3 rounded-full hover:bg-[#e07f05] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f46506] focus:ring-offset-2 text-sm font-medium"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Creating..." : "Create Account"}
          </button>

          <div className="text-center mt-6">
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
