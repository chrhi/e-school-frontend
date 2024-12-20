"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "../PasswordInput";
import Link from "next/link";

const FormSignIn = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md my-10 bg-white   p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Sign in to you Account
          </h1>
          <p className="mt-3 text-sm text-center text-gray-600">
            log in to your account to access your courses
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full"
              required
              autoComplete="email"
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
              <PasswordInput
                id="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#f46506] focus:ring-[#f46506]"
              />
              <span>Remember me</span>
            </label>
            <Link
              href="./sign-in/reset-password"
              className="text-sm text-[#f46506] hover:text-[#e07f05] transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#f46506] text-white py-3 rounded-full hover:bg-[#e07f05] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f46506] focus:ring-offset-2 text-sm font-medium"
          >
            Login
          </button>

          <div className="text-center mt-6">
            <span className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
            </span>
            <Link
              href="./sign-up"
              className="text-[#f46506] hover:text-[#d55605] font-medium text-sm"
            >
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSignIn;
