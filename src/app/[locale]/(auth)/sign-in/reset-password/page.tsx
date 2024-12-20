"use client";
import PasswordInput from "@/components/PasswordInput";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import CodeInput from "@/components/CodeInput";

function Forgot() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));


  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-8  w-[454px] h-[600px] max-w-lg">
        {step === 1 && <ForgotPassword onNext={nextStep} />}
        {step === 2 && <VerifyEmail onNext={nextStep} />}
        {step === 3 && <CreateNewPassword />}
      </div>
    </div>
  );
}

function ForgotPassword({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center flex flex-col gap-6">
      <Image
        src="/lock-icon.svg"
        alt="Lock Icon"
        className="w-16 h-16 mx-auto mb-4"
        width={16}
        height={16}
      />
      <h2 className="text-4xl  ">Forgot Password?</h2>
      <p className="mb-4 text-sm text-gray-600">
        We just need your registered email <br /> address to reset your
        password.
      </p>
      {/* Email */}
      <div className="mb-6">
        <label className="block text-start mb-2 " htmlFor="Email">
          Email Address
        </label>
        <Input
          type="text"
          placeholder="Enter your Email"
          className="w-full text-md "
          id="user"
        />
      </div>

      <button
        onClick={onNext}
        className="bg-[#F48C06] text-white p-3 rounded-full w-full"
      >
        Request Code
      </button>
      <div className="flex items-center gap-2 justify-center">
        <Image src={"/back.svg"} alt={"back icon"} width={14} height={14} />
        <p className="text-gray-500">
          <a href="./" className="">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
}

function VerifyEmail({ onNext }: { onNext: () => void }) {
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
	  <CodeInput/>
      <button
        onClick={onNext}
        className="bg-[#F48C06] text-white p-3 rounded-full w-full"
      >
        Verify
      </button>
      <div className="flex justify-between">
	  <p className=" text-gray-500 text-sm">
          <a href="#">Resend Code</a>
        </p>
        <p className=" text-gray-500 text-sm">
          <a href="./reset-password">Change The Email </a>
        </p>
      
      </div>
    </div>
  );
}

function CreateNewPassword() {
  return (
    <div className="text-center flex flex-col gap-4 ">
      <Image
        src="/lock-icon.svg"
        alt="Lock Icon"
        className="w-16 h-16 mx-auto mb-2"
        width={16}
        height={16}
      />
      <h2 className="text-3xl  ">Create New Password</h2>
      <p className="mb-2 text-gray-600">
        Your new password must be different from previously used passwords.
      </p>
      <div>
        <label className="block text-start mb-2" htmlFor="pass">
          New Password
        </label>
        <div className="relative" id="pass">
          <PasswordInput />
        </div>
      </div>
      <div>
        <label className="block text-start mb-2" htmlFor="pass">
          Confirme New Password
        </label>
        <div className="relative" id="pass">
          <PasswordInput />
        </div>
      </div>
	  <a href="./">
      <button className="bg-[#F48C06] text-white p-3 rounded-full w-full">
        Save New Password
      </button>
	  </a>
	  <div className="flex items-center gap-2 mt-2 justify-center">
        <Image src={"/back.svg"} alt={"back icon"} width={14} height={14} />
        <p className="text-gray-500">
          <a href="./" className="">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Forgot;
