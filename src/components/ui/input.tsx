import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full  rounded-full border border-input border-[#f46506] bg-transparent p-4 px-6 text-base shadow-sm transition-colors focus:ring-[#f46506] file:border-0 file:bg-transparent file:text-sm  file:text-foreground placeholder:text-[#ACACAC] focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
