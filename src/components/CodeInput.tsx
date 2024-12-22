"use client";
import { useRef } from "react";

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ value, onChange }) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value: newValue } = e.target;

  
    const updatedValue = value.split("");
    updatedValue[index] = newValue;

    onChange(updatedValue.join("")); 

 
    if (newValue.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }


    if (newValue.length === 0 && index > 0) {
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
          value={value[index] || ""}
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
