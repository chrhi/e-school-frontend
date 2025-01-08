"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/PasswordInput";
import CodeInput from "@/components/CodeInput";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface ForgotPasswordPayload {
  email: string;
}

interface ResetPasswordPayload {
  email: string;

  password: string;
  passwordConfirm: string;
}

interface ForgotPasswordStepProps {
  onNext: () => void;
  email: string;
  setEmail: (email: string) => void;
}

interface VerificationStepProps {
  onNext: () => void;
  otp: string;
  setOtp: (otp: string) => void;
  email: string;
}

interface NewPasswordStepProps {
  onSubmit: () => void;
  password: string;
  setPassword: (password: string) => void;
  passwordConfirm: string;
  setPasswordConfirm: (passwordConfirm: string) => void;
}

export function ClientForgotPasswordForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));

  const handleForgotPassword = async () => {
    const payload: ForgotPasswordPayload = { email };

    try {
      const response = await fetch(
        "http://api.craftednext.com/api/v1/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send forgot password request.");
      }

      toast.success("Verification code resent to your email.", {
        style: { background: "#dcfce7", color: "#16a34a" },
        className: "border-green-500",
      });
      nextStep();
    } catch (error) {
      console.error("Error sending forgot password request:", error);
    }
  };

  const handleResetPassword = async () => {
    const payload: ResetPasswordPayload = {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };

    try {
      const response = await fetch(
        "http://api.craftednext.com/api/v1/auth/reset-password",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Failed to reset password:", errorResponse);
        throw new Error("Failed to reset password.");
      }
      toast.success("The password is updated", {
        style: { background: "#dcfce7", color: "#16a34a" },
        className: "border-green-500",
      });

      nextStep();
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border w-[454px] h-[600px] max-w-lg">
      {step === 1 && (
        <ForgotPasswordStep
          onNext={handleForgotPassword}
          email={email}
          setEmail={setEmail}
        />
      )}
      {step === 2 && (
        <VerificationStep
          onNext={() => nextStep()}
          otp={otp}
          setOtp={setOtp}
          email={email}
        />
      )}
      {step === 3 && (
        <NewPasswordStep
          onSubmit={handleResetPassword}
          password={password}
          setPassword={setPassword}
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
        />
      )}
    </div>
  );
}

function ForgotPasswordStep({
  onNext,
  email,
  setEmail,
}: ForgotPasswordStepProps) {
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        onClick={onNext}
        className="bg-[#f46506] text-white p-3 rounded-full w-full"
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

function VerificationStep({
  onNext,
  otp,
  setOtp,
  email,
}: VerificationStepProps) {
  const [loading, setLoading] = useState(false);

  const handleResendCode = async () => {
    setLoading(true);
    const payload: ForgotPasswordPayload = { email };

    try {
      const response = await fetch(
        "http://api.craftednext.com/api/v1/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to resend code.");
      }

      toast.success("Verification code resent to your email.");
    } catch (error) {
      console.error("Error sending verification code:", error);
      alert("Failed to resend code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch(
        "http://api.craftednext.com/api/v1/auth/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp: otp, email: email }),
        }
      );

      if (!response.ok) {
        throw new Error("Verification failed. Please check the OTP.");
      }

      toast.success("OTP verified successfully.");
      onNext();
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Failed to verify OTP. Please try again.");
    }
  };

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
      <CodeInput value={otp} onChange={(value) => setOtp(value)} />
      <button
        onClick={handleVerifyOtp}
        className="bg-[#f46506] text-white p-3 rounded-full w-full"
      >
        Verify
      </button>
      <div className="flex justify-between">
        <a
          href="#"
          onClick={handleResendCode} // استدعاء دالة إعادة إرسال الكود عند الضغط
          className={`text-gray-500 text-sm ${
            loading ? "cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Resending..." : "Resend Code"}
        </a>
        <a href="./reset-password" className="text-gray-500 text-sm">
          Change The Email
        </a>
      </div>
    </div>
  );
}

function NewPasswordStep({
  onSubmit,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
}: NewPasswordStepProps) {
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      onSubmit();
      router.push("./");
    } catch (error) {
      console.error("Failed to reset password:", error);
    }
  };

  return (
    <div className="text-center flex flex-col gap-4 ">
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
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="block text-start mb-2" htmlFor="confirm-password">
          Confirm New Password
        </label>
        <div className="relative" id="confirm-password">
          <PasswordInput
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-[#f46506] text-white p-3 rounded-full w-full"
      >
        Save New Password
      </button>
      <div className="flex items-center gap-2 mt-2 justify-center">
        <Image src="/back.svg" alt="back icon" width={14} height={14} />
        <a href="./" className="text-gray-500">
          Back to Login
        </a>
      </div>
    </div>
  );
}
