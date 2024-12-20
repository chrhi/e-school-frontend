"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  Omit<React.ComponentProps<"input">, "type"> & {
    showPassword?: boolean;
    onVisibilityChange?: (visibility: boolean) => void;
  }
>(({ className, showPassword, onVisibilityChange, ...props }, ref) => {
  const [localShowPassword, setLocalShowPassword] = React.useState(false);

  const isPasswordVisible = showPassword ?? localShowPassword;
  const togglePasswordVisibility = () => {
    const newValue = !isPasswordVisible;
    setLocalShowPassword(newValue);
    onVisibilityChange?.(newValue);
  };

  return (
    <div className="relative">
      <input
        type={isPasswordVisible ? "text" : "password"}
        className={cn(
          "flex w-full rounded-full border border-input border-[#F48C06] bg-transparent p-4 px-6 text-base shadow-sm transition-colors focus:ring-[#F48C06] file:border-0 file:bg-transparent file:text-sm file:text-foreground placeholder:text-[#ACACAC] focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pr-12",
          className
        )}
        ref={ref}
        {...props}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        {isPasswordVisible ? (
          <EyeOff className="h-5 w-5" />
        ) : (
          <Eye className="h-5 w-5" />
        )}
      </button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
