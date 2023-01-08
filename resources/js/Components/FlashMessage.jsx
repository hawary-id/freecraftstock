import { useRef, useState } from "react";

export default function FlashMessage({ className, message = "" }) {
    const [closeButton, setcloseButton] = useState(
        `justify-between border inset-x-0 z-20 mx-3 md:mx-[350px] flex bg-green-100 rounded p-4 mb-4 text-sm text-green-700 ${className}`
    );
    const closeButtonTarget = useRef();
    const closeButtonTrigger = (e) => {
        e.preventDefault();
        closeButtonTarget.current.classList.add("hidden");
        setcloseButton(!closeButton);
    };
    return (
        <div
            className={`justify-between border inset-x-0 z-20 mx-3 md:mx-[350px] flex bg-green-100 rounded p-4 mb-4 text-sm text-green-700 ${className}`}
            ref={closeButtonTarget}
        >
            <div className="">{message}</div>
            <div className="bi bi-x-lg" onClick={closeButtonTrigger}></div>
        </div>
    );
}
