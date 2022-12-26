import { Link } from "@inertiajs/inertia-react";

export default function UserNavbar() {
    return (
        <ul className="sticky top-0 z-10 flex justify-between px-10 mb-5 bg-white md:px-[500px] shadow border text-slate-500">
            <Link
                href={route("user.home")}
                className="px-3 pt-3 pb-2 border-b-4 border-slate-500 text-slate-900"
            >
                <span className="bi bi-person"></span>
                <span className="hidden ml-1 md:inline">Profile</span>
            </Link>
            <Link href="" className="p-3">
                <span className="mr-1 bi bi-download"></span>
                <span className="hidden ml-1 md:inline">Downloads</span>
            </Link>
            <Link href="" className="p-3">
                <span className="mr-1 bi bi-heart"></span>
                <span className="hidden ml-1 md:inline">Favorites</span>
            </Link>
            <Link href="" className="p-3">
                <span className="mr-1 bi bi-folder"></span>
                <span className="hidden ml-1 md:inline">Collections</span>
            </Link>
            <Link href="" className="p-3">
                <span className="mr-1 bi bi-person-check"></span>
                <span className="hidden ml-1 md:inline">Following</span>
            </Link>
        </ul>
    );
}
