import React from 'react';

import { Input } from "@/components/ui/input";
import PasswordInput from './PasswordInput';
const FormSignUp = () => {
  return (
    
      <div className=" items-center justify-center mt-20 mb-4  w-[454px] h-[611px] ">
        <div className=" mb-6 ">
          <h1 className="flex justify-center text-2xl ">Welcome to lorem..!</h1>
        </div>
        <p className=" text-start mt-10 mb-8 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <form className="flex flex-col gap-8">
          

      {/* Email */}
      <div>
                <label className="block  mb-2 " htmlFor="Email">
                  Email
                </label>
                <Input
                  type="text"
                  placeholder="Enter your Email"
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
       {/* Remember me */}
              <div className="flex items-center justify-between ">
								<label className="flex items-center text-sm">
									<input type="checkbox" className="mr-2 " />
									Remember me
								</label>
								<a href="./sign-in/reset-password" className=" text-sm">
									Forgot Password ?
								</a>
							</div>
              <button
                type="submit"
                className="w-full bg-[#F48C06] text-white p-4  rounded-full "
              >
                Login
              </button>
            
        <div className='flex justify-center m gap-1'>
        <p className='font-portLligatSlab text-lg'>Dont  have an account? </p>
        <a href="./sign-up" className=" text-[#f46506] font-portLligatSlab text-lg">Register Now</a>
        </div>
        </form>
      </div>
    
  );
};

export default FormSignUp;
