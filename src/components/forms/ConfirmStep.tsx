"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CodeInput from "@/components/CodeInput";

interface VerificationStepProps {
  onNext?: () => void; // onNext اختياري
}

const ConfirmStep: React.FC<VerificationStepProps> = ({ onNext = () => {} }) => {
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setIsVerifying(true);

    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);

      // Call onNext if provided
      onNext();

      // Redirect to login after showing success message
      setTimeout(() => {
        router.push("../sign-in"); // Replace with your login page route
      }, 2000); // Wait 2 seconds before redirecting
    }, 3000); // Simulate 3 seconds verification delay
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-[454px] h-[600px] max-w-lg">
        <div className="flex flex-col items-center text-center gap-2 p-6 shadow-xl">
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

          {isVerified ? (
            <p className="text-green-500 text-sm mt-4">
              Account successfully created! Redirecting to login...
            </p>
          ) : (
            <button
              onClick={handleVerification}
              disabled={isVerifying}
              className={`p-3 rounded-full w-full mt-4 transition duration-300 ${
                isVerifying
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#f46506] hover:bg-[#d45605] text-white"
              }`}
            >
              {isVerifying ? "Verifying..." : "Verify"}
            </button>
          )}

          <div className="flex justify-between mt-4">
            <a href="./" className="text-gray-500 text-sm">
              back to Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmStep;
