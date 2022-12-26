import { useRef, useState } from "react";
import Input from "./Input";

export default function UserPicture({ auth }) {
    const [uploadPhoto, setuploadPhoto] = useState(true);
    const UploadPhotoTarget = useRef();
    const uploadPhotoTrigger = (e) => {
        e.preventDefault();
        if (uploadPhoto) {
            UploadPhotoTarget.current.classList.remove("hidden");
        } else {
            UploadPhotoTarget.current.classList.add("hidden");
        }
        setuploadPhoto(!uploadPhoto);
    };
    return (
        <div className="md:col-span-1">
            <div className="sticky flex flex-col items-center justify-center p-8 bg-white rounded-md shadow-md top-16">
                <div
                    className="relative w-32 h-32 mb-5 overflow-hidden rounded-full cursor-pointer group"
                    onClick={uploadPhotoTrigger}
                >
                    <div className="absolute top-0 z-10 flex items-center justify-center w-full h-full transition ease-in-out scale-0 rounded-full group-hover:scale-100">
                        <span className="text-4xl text-white bi bi-pencil-square"></span>
                    </div>
                    <img
                        src={auth.user.thumbnail}
                        className="object-cover w-full h-full group-hover:brightness-50"
                    />
                </div>
                <h1 className="w-full text-lg font-semibold text-center text-slate-800">
                    {auth.user.name}
                </h1>
                <p className="w-full text-sm text-center text-slate-400">
                    @{auth.user.username}
                </p>
            </div>
            <div
                className="fixed inset-0 z-20 flex justify-center hidden rounded py-28 h-max"
                ref={UploadPhotoTarget}
            >
                <div className="p-5 bg-white border rounded-lg shadow-md w-96">
                    <h1 className="mb-6 text-base text-slate-600">
                        Update your photo profile
                    </h1>
                    <Input type="file" className="mb-5" />
                    <div className="flex justify-end gap-2">
                        <a
                            href=""
                            className="px-4 py-1 text-pink-600 border rounded md:py-2 bg-slate-50 hover:bg-slate-200"
                            onClick={uploadPhotoTrigger}
                        >
                            Cancel
                        </a>
                        <a
                            href=""
                            className="px-4 py-1 text-white border rounded md:py-2 bg-sky-600 hover:bg-sky-700"
                        >
                            Upload
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
