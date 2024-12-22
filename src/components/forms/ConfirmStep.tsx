"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CodeInput from "@/components/CodeInput";
import { toast } from "sonner";

interface ConfirmStepProps {
  onNext: () => void;
}

const ConfirmStep: React.FC<ConfirmStepProps> = ({ onNext }) => {
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    console.log("Retrieved email from localStorage:", savedEmail);
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleVerification = async () => {
    if (!email) {
      setErrorMessage("Email is missing.");
      return;
    }

    if (!code) {
      setErrorMessage("Please provide the OTP.");
      return;
    }

    setIsVerifying(true);
    setErrorMessage(null);

    try {
      const response = await fetch(
        `https://elearning-api-alpha.vercel.app/api/v1/auth/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp: code, email: email }),
        }
      );

      const data = await response.json();
      console.log("Response Data:", data);

      if (data.success) {
        setIsVerified(true);
        toast.success("Your account is successfully verified!", {
          style: { background: "#dcfce7", color: "#16a34a" },
          className: "border-green-500",
        });
        setTimeout(() => {
          router.push("./sign-in");
        }, 2000);
        onNext();
      } else {
        setErrorMessage(
          data.message || "Invalid verification code. Please try again."
        );
        toast.error(
          data.message || "Invalid verification code. Please try again.",
          {
            style: { background: "#fce4e4", color: "#9b1c1c" },
            className: "border-red-500",
          }
        );
      }
    } catch (error) {
      console.error("Error details:", error);
      setErrorMessage(
        "An error occurred during verification. Please try again."
      );
      toast.error("An error occurred during verification. Please try again.", {
        style: { background: "#fce4e4", color: "#9b1c1c" },
        className: "border-red-500",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-xl border w-[454px] h-[600px] max-w-lg">
        <div className="flex flex-col items-center text-center gap-2 p-6 ">
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
            Please check your email: {email}
          </p>

          <CodeInput value={code} onChange={setCode} />

          {isVerified
            ? null
            : errorMessage &&
              errorMessage.includes("Invalid OTP or OTP expired") && (
                <div className="text-red-500 mt-4">{errorMessage}</div>
              )}

          {isVerified ? (
            <div className="text-green-500 mt-4">
              Verification successful! Redirecting...
            </div>
          ) : (
            <button
              onClick={handleVerification}
              className="w-full bg-[#f46506] text-white py-3 rounded-full mt-4"
              disabled={isVerifying}
            >
              {isVerifying ? "Verifying..." : "Verify"}
            </button>
          )}

          <a href="./" className="text-gray-500 text-sm mt-4">
            back to register
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmStep;
