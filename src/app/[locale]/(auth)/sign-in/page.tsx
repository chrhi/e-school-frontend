import FormSignIn from "@/components/forms/form-signIn";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";

async function page() {
  return (
    <>
      <NavBar />
      <div className="flex gap-2 bg-gray-100 h-screen pt-20  justify-center items-center">
        <FormSignIn />
      </div>

      <Footer />
    </>
  );
}

export default page;
