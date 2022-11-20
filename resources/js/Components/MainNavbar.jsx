import { Link } from "@inertiajs/inertia-react";
import { useState, useRef } from "react";
export default function MainNavbar() {
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
            <div className="fixed top-0 z-50 flex items-center justify-between w-full px-3 py-2 bg-blue-700 navbar lg:px-52 md:py-0 md:justify-start text-slate-300 rounded-b-md md:rounded-none">
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
                        <li className="py-3 hover:text-white">
                            <Link href={route("prototype.vectors")}>
                                Vectors
                            </Link>
                        </li>
                        <li className="py-3 hover:text-white">
                            <Link href={route("prototype.photos")}>Photos</Link>
                        </li>
                        <li className="py-3 hover:text-white">
                            <Link href={route("prototype.png")}>PNG</Link>
                        </li>
                        <li className="py-3 hover:text-white">
                            <Link href={route("prototype.psd")}>PSD</Link>
                        </li>
                        <li className="py-3 hover:text-white">
                            <Link href={route("prototype.tutorials")}>
                                Tutorials
                            </Link>
                        </li>
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
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                                <a href="" className="hover:text-white">
                                    Animals
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <Link
                    href={route("prototype.home")}
                    className="hidden mr-2 text-2xl font-semibold text-white md:flex"
                >
                    <img src="/images/logo.png" className="h-8" />
                    <span className="ml-2">Freecraftstock</span>
                </Link>
                <ul className="hidden gap-5 ml-10 md:flex">
                    <li className="py-5 nav-link">
                        <Link href={route("prototype.vectors")}>Vectors</Link>
                    </li>
                    <li className="py-5 nav-link">
                        <Link href={route("prototype.photos")}>Photos</Link>
                    </li>
                    <li className="py-5 nav-link">
                        <Link href={route("prototype.png")}>PNG</Link>
                    </li>
                    <li className="py-5 nav-link">
                        <Link href={route("prototype.psd")}>PSD</Link>
                    </li>
                    <li className="py-5 nav-link">
                        <Link href={route("prototype.tutorials")}>
                            Tutorials
                        </Link>
                    </li>
                    <li className="w-24 py-5 nav-link group">
                        <a href="">
                            Categories{" "}
                            <span className="bi bi-caret-down-fill"></span>
                        </a>
                        <div className="absolute z-30 hidden grid-flow-col grid-rows-4 gap-4 p-6 mt-5 text-left rounded shadow-lg drowpdown-menu bg-slate-800 group-hover:grid min-w-max font-sm text-slate-300">
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                            <a href="" className="mr-12 hover:text-white">
                                Animals
                            </a>
                        </div>
                    </li>
                </ul>
                <div className="flex items-center justify-end gap-3 md:w-full">
                    <Link href={route("prototype.login")} className="nav-link">
                        Log In
                    </Link>
                    <Link
                        href={route("prototype.register")}
                        className="px-2 py-1 border rounded-md nav-link text-slate-50 hover:text-slate-200 hover:bg-blue-700 hover:border hover:border-slate-300 hover:ring hover:ring-offset-1 hover:ring-sky-300"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </>
    );
}
