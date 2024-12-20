"use client";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 

const PasswordInput = () => {
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="flex flex-col mb-4">
			<div className="relative">
				<input
					type={showPassword ? "text" : "password"}
					id="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="w-full p-4 border border-[#F48C06] rounded-full focus:outline-none focus:ring-2 focus:ring-[#F48C06]"
					placeholder="Enter your password"
				/>
				<button
					type="button"
					onClick={togglePasswordVisibility}
					className="absolute right-3 top-1/2 transform -translate-y-1/2 text-b"
				>
					{showPassword ? (
						<AiOutlineEyeInvisible className="text-xl" />
					) : (
						<AiOutlineEye className="text-xl" />
					)}
				</button>
			</div>
		</div>
	);
};

export default PasswordInput;
