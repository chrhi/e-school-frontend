import { ClientForgotPasswordForm } from "@/components/forms/ClientForgotPasswordForm";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";

export default function ForgotPasswordPage() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen my-20 ">
        <ClientForgotPasswordForm />
      </div>
      <Footer />
    </>
  );
}
