import FormSignUp from "@/components/forms/FormSignUp";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";

function page() {
  return (
    <>
      <NavBar />
      <div className="flex gap-2 justify-center min-h-screen h-fit pt-10">
        <FormSignUp />
      </div>
      <Footer />
    </>
  );
}

export default page;
