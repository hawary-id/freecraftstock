import React, { useEffect, useRef } from "react";
import InputError from "./InputError";

export default function Input({
    type = "text",
    name,
    value,
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    errors,
    label,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="relative z-0">
            <input
                type={type}
                name={name}
                value={value}
                className="block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none invalid:border-pink-500 focus:invalid:border-pink-500 invalid:text-pink-500 focus:invalid:text-pink-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder={placeholder}
                ref={input}
                autoComplete={autoComplete}
                onChange={(e) => handleChange(e)}
            />
            <label
                htmlFor={name}
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-invalid:text-pink-500 peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {label}
            </label>
            <InputError
                message={errors}
                className="mt-2 text-sm text-pink-500 peer-invalid:block"
            />
        </div>
    );
}
