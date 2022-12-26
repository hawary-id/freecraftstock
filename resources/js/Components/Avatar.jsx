import { Link } from "@inertiajs/inertia-react";
import { useRef, useState } from "react";

export default function Avatar({ avatar, style }) {
    const [profile, setProfile] = useState(true);
    const profileTarget = useRef();
    const triggerProfile = () => {
        if (profile) {
            profileTarget.current.classList.remove("hidden");
        } else {
            profileTarget.current.classList.add("hidden");
        }
        setProfile(!profile);
    };
    return (
        <div className="flex justify-end md:w-full">
            <div className="flex flex-col">
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={triggerProfile}
                >
                    <div className="hidden md:block text-slate-200 group-hover:text-white">
                        {avatar.user.name}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[url('https://picsum.photos/50/50')] bg-cover border-2 group-hover:brightness-125"></div>
                </div>
                <div
                    className={`rounded-xl text-slate-50 font-medium flex hidden flex-col absolute z-[999] ${style} min-w-[180px] overflow-hidden bg-slate-800`}
                    ref={profileTarget}
                >
                    <Link
                        href={route("user.home")}
                        className="px-4 py-2 transition-all hover:bg-slate-700"
                    >
                        <span className="mr-2 bi bi-person-circle"></span>
                        Profile
                    </Link>
                    <a
                        href="#!"
                        className="px-4 py-2 transition-all hover:bg-slate-700"
                    >
                        <span className="mr-2 bi bi-download"></span>Download
                    </a>
                    <a
                        href="#!"
                        className="px-4 py-2 transition-all hover:bg-slate-700"
                    >
                        <span className="mr-2 bi bi-folder-plus"></span>
                        Collection
                    </a>
                    <a
                        href="#!"
                        className="px-4 py-2 transition-all hover:bg-slate-700"
                    >
                        <span className="mr-2 bi bi-gear"></span>Settings
                    </a>
                    <Link
                        href={route("logout")}
                        method="post"
                        className="px-4 py-2 text-left transition-all hover:bg-slate-700"
                        as="button"
                    >
                        <span className="mr-2 bi bi-box-arrow-right"></span>Sign
                        Out
                    </Link>
                </div>
            </div>
        </div>
    );
}
