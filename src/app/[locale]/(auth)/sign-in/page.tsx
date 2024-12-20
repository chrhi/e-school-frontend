
import FormSignIn from "@/components/FormSignIn";
import Image from "next/image";

function page() {
  return (
    <div className="flex gap-2 justify-around">
		 <div className="">
        <FormSignIn />
      </div>
      <div className="flex items-center justify-center h-screen">
        <Image
          src="/imageAuth2.svg"
          alt="Auth Image"
          width={600}
          height={600}
          className=""
        />
      </div>
     
    </div>
  );
}

export default page;
