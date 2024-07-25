import React from "react";

type props = {
  type: string;
  label: string;
  value: string;
  onChange: any;
  error?: string;
  textArea?: boolean;
  placeholder: string;
  inputClassName?: string;
  parentClassName?: string;
};

const ContactInput = ({
  type,
  value,
  label,
  error,
  onChange,
  textArea,
  placeholder,
  inputClassName,
  parentClassName,
}: props) => {
  return (
    <div className={`space-y-1 ${parentClassName}`}>
      <label htmlFor={label} className="pl-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-light">{label}</span>

        <span className="pl-2 block min-h-5 text-[.65rem] md:text-[.75rem] font-medium text-secondary overflow-hidden whitespace-nowrap text-ellipsis">
          {error}
        </span>
      </label>

      {textArea ? (
        <textarea
          id={label}
          onChange={onChange}
          placeholder={placeholder}
          className={`py-3 px-5 w-full h-full text-sm text-light bg-none placeholder:text-gray-200 border outline-none ${
            error ? "border-secondary" : "border-light"
          } resize-none rounded-2xl ${inputClassName}`}
        />
      ) : (
        <input
          id={label}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`py-4 px-5 w-full text-sm text-light placeholder:text-gray-200 border outline-none ${
            error ? "border-secondary" : "border-light"
          } !autofill:active:bg-secondary rounded-2xl ${inputClassName}`}
        />
      )}
    </div>
  );
};

export default ContactInput;
