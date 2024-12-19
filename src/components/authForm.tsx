"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PasswordInput from "./PasswordInput";
const AuthForm = () => {
	return (
		<div className="flex items-center justify-center mt-6 mb-4 ">
			<div className=" p-6  w-[454px] h-[611px]">
				{/* Tabs */}
				<div className=" mb-6 ">
					<h1 className="flex justify-center ">Welcome to lorem..!</h1>
				</div>
				<Tabs defaultValue="login" className="w-full">
					<TabsList className="grid grid-cols-2 mb-4">
						<TabsTrigger value="register">Login</TabsTrigger>
						<TabsTrigger value="login">Register</TabsTrigger>
					</TabsList>

					{/* Login Form */}
					<TabsContent value="login">
						<p className=" text-start mt-10 mb-8 text-gray-600">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
						<form className="flex flex-col gap-8">
							{/* Username */}
							<div>
								<label className="block mb-2 " htmlFor="username">
									User name
								</label>
								<Input
									type="text"
									placeholder="Enter your User name"
									className="w-full "
									id="username"
								/>
							</div>

							{/* Password */}
							<div>
								<label className="block  mb-2" htmlFor="passw">
									Password
								</label>
								<div className="relative" id="pass">
									<PasswordInput />
								</div>
							</div>

							{/* Remember me */}
							<div className="flex items-center justify-between ">
								<label className="flex items-center text-sm">
									<input type="checkbox" className="mr-2 " />
									Remember me
								</label>
								<a href={"/"} className=" text-sm">
									Forgot Password ?
								</a>
							</div>

							<button
								type="submit"
								className="w-full mt-4 bg-[#F48C06] text-black p-4 rounded-full"
							>
								Login
							</button>
						</form>
					</TabsContent>

					{/* Register Form */}
					<TabsContent value="register">
						<p className=" text-start mb-8 mt-10 text-gray-600 ">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
						<form className="flex flex-col gap-8">
							{/* Email Address */}
							<div>
								<label className="block  mb-2 " htmlFor="Email">
									Email Address
								</label>
								<Input
									type="email"
									placeholder="Enter your Email Address"
									className="w-full"
									id="Email"
								/>
							</div>

							{/* Username */}
							<div>
								<label className="block  mb-2 " htmlFor="user">
									User name
								</label>
								<Input
									type="text"
									placeholder="Enter your User name"
									className="w-full text-md "
									id="user"
								/>
							</div>

							{/* Password */}
							<div>
								<label className="block  mb-2" htmlFor="pass">
									Password
								</label>
								<div className="relative" id="pass">
									<PasswordInput />
								</div>
							</div>

							<button
								type="submit"
								className="w-full bg-[#F48C06] text-black p-4  rounded-full "
							>
								Register
							</button>
						</form>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default AuthForm;
