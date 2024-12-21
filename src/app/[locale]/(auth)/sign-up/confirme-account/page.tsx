"use client";

import ConfirmStep from "@/components/forms/ConfirmStep";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";

export default function ForgotPasswordPage() {
  const handleNext = () => {
    console.log("Verification Completed");
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen my-20">
        <ConfirmStep onNext={handleNext} />
      </div>
      <Footer />
    </>
  );
}
