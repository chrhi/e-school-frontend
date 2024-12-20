"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/PasswordInput";
import CodeInput from "@/components/CodeInput";
import Image from "next/image";

export function ClientForgotPasswordForm() {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));

  return (
    <div className="bg-white  rounded-lg p-8 w-[454px] h-[600px] max-w-lg">
      {step === 1 && <ForgotPasswordStep onNext={nextStep} />}
      {step === 2 && <VerificationStep onNext={nextStep} />}
      {step === 3 && <NewPasswordStep />}
    </div>
  );
}

function ForgotPasswordStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center flex flex-col gap-6">
      <Image
        src="/lock-icon.svg"
        alt="Lock Icon"
        className="w-16 h-16 mx-auto mb-4"
        width={16}
        height={16}
      />
      <h2 className="text-4xl">Forgot Password?</h2>
      <p className="mb-4 text-sm text-gray-600">
        We just need your registered email <br /> address to reset your
        password.
      </p>
      <div className="mb-6">
        <label className="block text-start mb-2" htmlFor="email">
          Email Address
        </label>
        <Input
          type="email"
          placeholder="Enter your Email"
          className="w-full text-md"
          id="email"
        />
      </div>
      <button
        onClick={onNext}
        className="bg-[#F48C06] text-white p-3 rounded-full w-full"
      >
        Request Code
      </button>
      <div className="flex items-center gap-2 justify-center">
        <Image src="/back.svg" alt="back icon" width={14} height={14} />
        <a href="./" className="text-gray-500">
          Back to Login
        </a>
      </div>
    </div>
  );
}

function VerificationStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center flex flex-col gap-6">
      <Image
        src="/Email-verify.svg"
        alt="Email Icon"
        className="w-28 h-28 mx-auto mb-4"
        width={20}
        height={20}
      />
      <h2 className="text-4xl mb-4">Verify Your Email</h2>
      <p className="mb-4 text-gray-600">
        Please enter the 6-digit code sent to your email.
      </p>
      <CodeInput />
      <button
        onClick={onNext}
        className="bg-[#F48C06] text-white p-3 rounded-full w-full"
      >
        Verify
      </button>
      <div className="flex justify-between">
        <a href="#" className="text-gray-500 text-sm">
          Resend Code
        </a>
        <a href="./reset-password" className="text-gray-500 text-sm">
          Change The Email
        </a>
      </div>
    </div>
  );
}

function NewPasswordStep() {
  return (
    <div className="text-center flex flex-col gap-4">
      <Image
        src="/lock-icon.svg"
        alt="Lock Icon"
        className="w-16 h-16 mx-auto mb-2"
        width={16}
        height={16}
      />
      <h2 className="text-3xl">Create New Password</h2>
      <p className="mb-2 text-gray-600">
        Your new password must be different from previously used passwords.
      </p>
      <div>
        <label className="block text-start mb-2" htmlFor="new-password">
          New Password
        </label>
        <div className="relative" id="new-password">
          <PasswordInput />
        </div>
      </div>
      <div>
        <label className="block text-start mb-2" htmlFor="confirm-password">
          Confirm New Password
        </label>
        <div className="relative" id="confirm-password">
          <PasswordInput />
        </div>
      </div>
      <a href="./">
        <button className="bg-[#F48C06] text-white p-3 rounded-full w-full">
          Save New Password
        </button>
      </a>
      <div className="flex items-center gap-2 mt-2 justify-center">
        <Image src="/back.svg" alt="back icon" width={14} height={14} />
        <a href="./" className="text-gray-500">
          Back to Login
        </a>
      </div>
    </div>
  );
}
