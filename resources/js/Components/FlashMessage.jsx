export default function FlashMessage({ className, message = "" }) {
    return (
        <div
            className={`border inset-x-0 z-20 mx-3 md:mx-[350px] flex bg-green-100 rounded p-4 mb-4 text-sm text-green-700 ${className}`}
        >
            {message}
        </div>
    );
}
