import AuthForm from "@/components/authForm";
import Image from "next/image";

import React from "react";

function page() {
	return (
		<div className="flex gap-2 justify-around">
			<div className="flex items-center justify-center h-screen">
				<Image
					src="/imageAuth1.svg"
					alt="Auth Image"
					width={600}
					height={600}
					className=""
				/>
			</div>
			<div className="">
				<AuthForm />
			</div>
		</div>
	);
}

export default page;
