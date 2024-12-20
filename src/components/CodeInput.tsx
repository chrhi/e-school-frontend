"use client";
import { useRef } from "react";

const CodeInput: React.FC = () => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (value.length === 0 && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-2 mb-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={(el) => {
            if (el) inputsRef.current[index] = el;
          }}
          className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f46506]"
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
              inputsRef.current[index - 1]?.focus();
            }
          }}
        />
      ))}
    </div>
  );
};

export default CodeInput;
