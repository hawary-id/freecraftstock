import React, { useEffect, useRef } from "react";

export default function TextInput({
    type,
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none invalid:border-pink-500 focus:invalid:border-pink-500 invalid:text-pink-500 focus:invalid:text-pink-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
