import { Link } from "@inertiajs/inertia-react";

export default function MainFooter() {
    return (
        <footer className="flex-col hidden w-full bg-blue-600 md:flex px-52">
            <div className="flex items-center w-full py-4 border-b border-slate-400">
                <div className="flex items-center w-full text-white">
                    <div className="flex flex-col">
                        <Link
                            href={route("prototype.home")}
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
                            href={route("prototype.register")}
                            className="self-end py-1 mb-2 text-sm text-center bg-orange-400 border rounded-md w-28 text-slate-50 hover:bg-orange-500 hover:ring hover:ring-blue-300"
                        >
                            Sign Up Free
                        </Link>
                        <ul className="flex gap-3 text-slate-300">
                            <li className="nav-link">
                                <a href="">About</a>
                            </li>
                            <li className="nav-link">
                                <a href="">Contact Us</a>
                            </li>
                            <li className="nav-link">
                                <a href="">Term of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between w-full py-3 text-sm text-center text-slate-300">
                <div className="flex">
                    <Link
                        href={route("prototype.home")}
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
