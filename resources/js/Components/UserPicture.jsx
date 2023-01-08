import { useForm } from "@inertiajs/inertia-react";
import { useRef, useState } from "react";
import Input from "./Input";

export default function UserPicture({ auth }) {
    const { setData, post, errors } = useForm({
        thumbnail: "",
    });
    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const [uploadPhoto, setuploadPhoto] = useState("scale-0");
    const UploadPhotoTarget = useRef();
    const uploadPhotoTrigger = (e) => {
        e.preventDefault();
        if (uploadPhoto) {
            UploadPhotoTarget.current.classList.remove("scale-0");
            UploadPhotoTarget.current.classList.add("scale-100");
        } else {
            UploadPhotoTarget.current.classList.remove("scale-100");
            UploadPhotoTarget.current.classList.add("scale-0");
        }
        setuploadPhoto(!uploadPhoto);
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("user.upload", auth.user.id));
        UploadPhotoTarget.current.classList.remove("scale-100");
        UploadPhotoTarget.current.classList.add("scale-0");
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
                    {auth.user.thumbnail ? (
                        <img
                            src={`/Storage/${auth.user.thumbnail}`}
                            className="object-cover w-full h-full group-hover:brightness-50"
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full text-center text-7xl bg-sky-200 text-slate-700 group-hover:brightness-50">
                            {Array.from(auth.user.name)[0].toUpperCase()}
                        </div>
                    )}
                </div>
                <h1 className="w-full text-lg font-semibold text-center text-slate-800">
                    {auth.user.name}
                </h1>
                <p className="w-full text-sm text-center text-slate-400">
                    @{auth.user.username}
                </p>
            </div>
            <div
                className="fixed inset-0 z-20 flex justify-center transition ease-in-out scale-0 rounded py-28 h-max"
                ref={UploadPhotoTarget}
            >
                <form
                    className="p-5 bg-white border rounded-lg shadow-md w-96"
                    onSubmit={submit}
                >
                    <h1 className="mb-6 text-base text-slate-600">
                        Update your profile picture
                    </h1>
                    <Input
                        type="file"
                        className="mb-5 text-slate-400"
                        name="thumbnail"
                        placeholder=" "
                        errors={errors.thumbnail}
                        handleChange={onHandleChange}
                    />
                    <div className="flex gap-2 md:justify-end">
                        <a
                            href=""
                            className="py-1 text-center text-pink-600 border rounded grow md:px-4 md:py-2 bg-slate-50 hover:bg-slate-200"
                            onClick={uploadPhotoTrigger}
                        >
                            Cancel
                        </a>
                        <button
                            type="submit"
                            className="py-1 text-white border rounded grow md:px-4 md:py-2 bg-sky-600 hover:bg-sky-700"
                        >
                            Upload
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
