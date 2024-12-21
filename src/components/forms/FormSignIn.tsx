"use client";

import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { login } from "@/lib/api-calls/login";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});

const FormSignIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    console.log("the logging function is running...");
    const res = await login({ email: values.email, password: values.password });

    if (res) {
      if (!res?.sucess) {
        console.log(res?.message);
        toast.error(res?.message, {
          style: { background: "#fee2e2", color: "#dc2626" },
          className: "border-red-500",
        });
        return;
      }

      toast.success(res?.message, {
        style: { background: "#dcfce7", color: "#16a34a" },
        className: "border-green-500",
      });

      window.location.reload();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md my-10 bg-white p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Sign in to your Account
          </h1>
          <p className="mt-3 text-sm text-center text-gray-600">
            Log in to your account to access your courses
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="you@example.com"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-sm text-gray-600"
                    >
                      Remember me
                    </label>
                  </div>
                )}
              />
              <Link
                href="./sign-in/reset-password"
                className="text-sm text-orange-500 hover:text-orange-600 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-full"
            >
              Login
            </Button>

            <div className="text-center mt-6">
              <span className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
              </span>
              <Link
                href="./sign-up"
                className="text-orange-500 hover:text-orange-600 font-medium text-sm"
              >
                Register Now
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormSignIn;
