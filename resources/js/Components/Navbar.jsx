import { Link } from "@inertiajs/inertia-react";
import { useRef, useState } from "react";
import Avatar from "./Avatar";
import NavbarCategory from "./NavbarCategory";

export default function Navbar({ auth, categories, types, title }) {
    const [smallMenu, setSmallMenu] = useState(true);
    const smallMenuTarget = useRef();

    const [smallCategory, setSmallCategory] = useState(true);
    const smallCategoryTarget = useRef();

    const triggerSmallMenu = () => {
        if (smallMenu) {
            smallMenuTarget.current.classList.remove("hidden");
        } else {
            smallMenuTarget.current.classList.add("hidden");
        }
        setSmallMenu(!smallMenu);
    };

    const triggerSmallCategory = () => {
        if (smallCategory) {
            smallCategoryTarget.current.classList.remove("hidden");
        } else {
            smallCategoryTarget.current.classList.add("hidden");
        }
        setSmallCategory(!smallCategory);
    };

    return (
        <>
            <div className="flex items-center justify-between w-full px-3 py-2 text-gray-400 shadow md:px-6 md:justify-start bg-slate-800 rounded-b-md md:rounded-none">
                <div
                    className="block text-2xl cursor-pointer bi bi-list md:hidden"
                    onClick={triggerSmallMenu}
                ></div>
                <div
                    className="fixed top-0 left-0 z-50 flex-col hidden w-full h-screen overflow-auto bg-slate-800"
                    ref={smallMenuTarget}
                >
                    <div className="flex w-full">
                        <div
                            className="pt-4 ml-6 text-white cursor-pointer bi bi-x-lg"
                            onClick={triggerSmallMenu}
                        ></div>
                    </div>
                    <ul className="flex flex-col px-6">
                        {types.data.map((type) =>
                            title[0].name == type.name ? (
                                <li className="py-3 text-white" key={type.id}>
                                    <Link
                                        href={route("type", [
                                            type.slug,
                                            "populars",
                                        ])}
                                    >
                                        {type.name}
                                    </Link>
                                </li>
                            ) : (
                                <li
                                    className="py-3 hover:text-white"
                                    key={type.id}
                                >
                                    <Link
                                        href={route("type", [
                                            type.slug,
                                            "populars",
                                        ])}
                                    >
                                        {type.name}
                                    </Link>
                                </li>
                            )
                        )}

                        <li className="py-3">
                            <div
                                className="flex justify-between w-full"
                                onClick={triggerSmallCategory}
                            >
                                <span>Categories</span>
                                <span className="bi bi-caret-down-fill"></span>
                            </div>
                            <div
                                className="flex flex-col hidden gap-3 p-3"
                                ref={smallCategoryTarget}
                            >
                                {categories.data.map((category) => (
                                    <NavbarCategory
                                        key={category.id}
                                        title={category.name}
                                        slug={category.slug}
                                    />
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
                <ul className="hidden gap-5 md:flex">
                    {types.data.map((type) =>
                        title[0].name == type.name ? (
                            <li className="nav-link active" key={type.id}>
                                <Link
                                    href={route("type", [
                                        type.slug,
                                        "populars",
                                    ])}
                                >
                                    {type.name}
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-link" key={type.id}>
                                <Link
                                    href={route("type", [
                                        type.slug,
                                        "populars",
                                    ])}
                                >
                                    {type.name}
                                </Link>
                            </li>
                        )
                    )}

                    <li className="w-24 nav-link group">
                        <div className="cursor-pointer">
                            Categories{" "}
                            <span className="bi bi-caret-down-fill"></span>
                        </div>
                        <div className="absolute z-50 hidden float-left grid-flow-col grid-rows-4 gap-4 p-6 pt-6 text-left rounded shadow-lg drowpdown-menu bg-slate-800 group-hover:grid min-w-max font-sm text-slate-300">
                            {categories.data.map((category) => (
                                <NavbarCategory
                                    key={category.id}
                                    title={category.name}
                                    slug={category.slug}
                                />
                            ))}
                        </div>
                    </li>
                </ul>
                {auth.user ? (
                    <Avatar avatar={auth} style="right-3 top-12" />
                ) : (
                    <div className="flex items-center justify-end gap-3 md:w-full">
                        <Link href={route("login")} className="nav-link">
                            Sign In
                        </Link>
                        <Link
                            href={route("register")}
                            className="px-2 py-1 border rounded-md nav-link text-slate-50 hover:text-slate-200 hover:bg-blue-700 hover:border hover:border-slate-300 hover:ring hover:ring-offset-1 hover:ring-sky-300"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
