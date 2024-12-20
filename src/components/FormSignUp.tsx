import React from 'react';

import { Input } from "@/components/ui/input";
import PasswordInput from './PasswordInput';
const FormSignUp = () => {
  return (
    
      <div className=" items-center justify-center mt-14 mb-4  w-[454px] h-[611px] ">
        <div className=" mb-6 ">
          <h1 className="flex justify-center text-2xl ">Welcome to lorem..!</h1>
        </div>
        <p className=" text-start mt-8 mb-6 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <form className="flex flex-col gap-6">
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
         {/* Confirme Password */}
         <div>
                <label className="block  mb-2" htmlFor="pass">
                Confirme Password
                </label>
                <div className="relative" id="pass">
                  <PasswordInput />
                </div>
              </div>
       
              
              <button
                type="submit"
                className="w-full bg-[#F48C06] text-white p-4  rounded-full "
              >
                Register
              </button>
            
        <div className='flex justify-center  gap-1'>
        <p className='font-portLligatSlab text-lg'>Have an Account ?</p>
        <a href="./sign-in" className=" text-[#f46506] font-portLligatSlab text-lg">Login in</a>
        </div>
        </form>
      </div>
    
  );
};

export default FormSignUp;
