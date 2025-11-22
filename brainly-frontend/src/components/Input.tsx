import React, { forwardRef } from "react";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type, placeholder, onChange }, ref) => {
    return (
      <input
        id={id}
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="border border-gray-200 px-4 py-2 rounded m-2"
      />
    );
  }
);
