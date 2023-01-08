import { Link } from "@inertiajs/inertia-react";

export default function UserNavbar() {
    return (
        <ul className="sticky top-0 z-20 hidden md:flex justify-between px-5 mb-5 bg-white md:px-[300px] shadow border text-slate-500">
            <Link
                href={route("home")}
                className="items-center mr-3 text-2xl font-semibold md:flex text-slate-500"
            >
                <img src="/images/logo_black.png" className="h-8" />
                <span className="ml-2 text-sky-400">Freecraftstock</span>
            </Link>
            <Link
                href={route("user.home")}
                className={`p-3 ${
                    route().current("user.home") &&
                    "pt-3 pb-2 border-b-4 border-slate-500 text-slate-900"
                }`}
            >
                {route().current("user.home") ? (
                    <span className="bi bi-person-fill"></span>
                ) : (
                    <span className="bi bi-person"></span>
                )}
                <span className="ml-1 md:inline">Profile</span>
            </Link>
            <Link
                href={route("user.download")}
                className={`p-3 ${
                    route().current("user.download") &&
                    "pt-3 pb-2 border-b-4 border-slate-500 text-slate-900"
                }`}
            >
                {route().current("user.download") ? (
                    <span className="mr-1 bi bi-arrow-down-square-fill"></span>
                ) : (
                    <span className="mr-1 bi bi-arrow-down-square"></span>
                )}

                <span className="ml-1 md:inline">Downloads</span>
            </Link>
            <Link
                href={route("user.favorite")}
                className={`p-3 ${
                    route().current("user.favorite") &&
                    "pt-3 pb-2 border-b-4 border-slate-500 text-slate-900"
                }`}
            >
                {route().current("user.favorite") ? (
                    <span className="mr-1 bi bi-heart-fill"></span>
                ) : (
                    <span className="mr-1 bi bi-heart"></span>
                )}

                <span className="ml-1 md:inline">Favorites</span>
            </Link>
            <Link
                href={route("user.collection")}
                className={`p-3 ${
                    route().current("user.collection") &&
                    "pt-3 pb-2 border-b-4 border-slate-500 text-slate-900"
                }`}
            >
                {route().current("user.collection") ? (
                    <span className="mr-1 bi bi-folder-fill"></span>
                ) : (
                    <span className="mr-1 bi bi-folder"></span>
                )}

                <span className="ml-1 md:inline">Collections</span>
            </Link>
            <Link
                href={route("user.following")}
                className={`p-3 ${
                    route().current("user.following") &&
                    "pt-3 pb-2 border-b-4 border-slate-500 text-slate-900"
                }`}
            >
                {route().current("user.following") ? (
                    <span className="mr-1 bi bi-person-check-fill"></span>
                ) : (
                    <span className="mr-1 bi bi-person-check"></span>
                )}

                <span className="ml-1 md:inline">Followings</span>
            </Link>
        </ul>
    );
}
