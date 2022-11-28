import { Link } from "@inertiajs/inertia-react";

export default function Footer() {
    return (
        <footer className="flex-col hidden w-full px-6 md:flex bg-slate-700">
            <div className="flex items-center w-full py-4 border-b border-slate-400">
                <div className="flex items-center w-full text-white">
                    <div className="flex flex-col">
                        <Link
                            href={route("home")}
                            className="text-4xl font-semibold"
                        >
                            Freecraftstock
                        </Link>
                        <span className="text-sm text-slate-300">
                            Unlimited inspiration for extraordinary works
                        </span>
                    </div>
                </div>
                <div className="flex self-end justify-end w-full">
                    <div className="flex flex-col">
                        <Link
                            href={route("register")}
                            className="self-end py-1 mb-2 text-sm text-center bg-orange-400 border rounded-md w-28 text-slate-50 hover:bg-orange-500 hover:ring hover:ring-blue-300"
                        >
                            Sign Up Free
                        </Link>
                        <ul className="flex gap-3 text-slate-300">
                            <li className="nav-link">
                                <Link href={route("prototype.about_us")}>
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link href={route("prototype.about_us")}>
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link href={route("prototype.term_of_use")}>
                                    Term of Use
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between w-full py-3 text-sm text-center text-slate-300">
                <div className="flex">
                    <Link
                        href={route("home")}
                        className="mr-2 font-semibold text-slate-100 hover:text-slate-200"
                    >
                        www.freecraftstock.com
                    </Link>
                    <span className="text-sm">
                        | Copyright © 2022 All Rights Reserved.
                    </span>
                </div>

                <ul className="flex gap-3">
                    <li className="nav-link">
                        <a href="" className="text-lg bi bi-pinterest"></a>
                    </li>
                    <li className="nav-link">
                        <a href="" className="text-lg bi bi-instagram"></a>
                    </li>
                    <li className="nav-link">
                        <a href="" className="text-lg bi bi-facebook"></a>
                    </li>
                    <li className="nav-link">
                        <a href="" className="text-lg bi bi-youtube"></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
