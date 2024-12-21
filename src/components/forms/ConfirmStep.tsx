"use client";
import React from "react";
import Image from "next/image";
import CodeInput from "@/components/CodeInput";

interface VerificationStepProps {
  onNext: () => void;
}

const ConfirmStep: React.FC<VerificationStepProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white rounded-lg p-8 w-[454px] h-[600px] max-w-lg">
        <div className="flex flex-col items-center text-center gap-4 p-6">
          <Image
            src="/Email-verify.svg"
            alt="Email Icon"
            className="w-28 h-28 mx-auto mb-4"
            width={112}
            height={112}
          />

          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Verify Your Email
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Please check your email: email@email.com
          </p>

          <CodeInput />

          <button
            onClick={onNext} 
            className="bg-[#f46506] text-white p-3 rounded-full w-full mt-4 hover:bg-[#d45605] transition duration-300"
          >
            Verify
          </button>

          <div className="flex justify-between mt-4">
            <a href="./" className="text-gray-500 text-sm ">
              back to Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmStep;
