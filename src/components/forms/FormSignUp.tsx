"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "../PasswordInput";
import Link from "next/link";
const FormSignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md my-10 bg-white  p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Your Account
          </h1>
          <p className="mt-3 text-sm text-center text-gray-600">
            Join thousands of users and start your journey with us today.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
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
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <PasswordInput />
            </div>
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <div className="relative">
              <PasswordInput />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#f46506] text-white py-3 rounded-full hover:bg-[#e07f05] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f46506] focus:ring-offset-2 text-sm font-medium"
          >
            Create Account
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
