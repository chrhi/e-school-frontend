import FormSignIn from "@/components/forms/FormSignIn";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";

async function page() {
  return (
    <>
      <NavBar />
      <div className="flex gap-2 justify-around">
        <FormSignIn />
      </div>

      <Footer />
    </>
  );
}

export default page;
