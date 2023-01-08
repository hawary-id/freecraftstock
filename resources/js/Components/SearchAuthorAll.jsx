import { Link } from "@inertiajs/inertia-react";
import { useEffect, useRef, useState } from "react";

export default function SearchAuthorAll({ types, username }) {
    const [scroll, setScroll] = useState(false);
    const searchTarget = useRef();
    const hideTarget = useRef();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
            if (window.scrollY > 300) {
                searchTarget.current.classList.remove("hidden");
            } else if (window.scrollY < 300) {
                searchTarget.current.classList.add("hidden");
            }
        });
    }, []);
    return (
        <>
            <div className="flex flex-col items-center justify-between w-full bg-white shadow">
                <div className="flex items-center w-full px-3 py-2 border-b md:px-6">
                    <Link
                        href={route("home")}
                        className="flex items-center mr-3 text-2xl font-semibold text-slate-500"
                    >
                        <img src="/images/logo_black.png" className="h-8" />
                        <span className="hidden ml-2 md:block text-sky-400">
                            Freecraftstock
                        </span>
                    </Link>
                    <form
                        action={route("search")}
                        method="GET"
                        className="flex justify-center grow text-slate-600"
                        ref={hideTarget}
                    >
                        <label className="relative flex w-full">
                            <select
                                className="hidden py-2 pl-2 border pr-7 md:block border-slate-300 rounded-l-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                name="type"
                            >
                                <option value="All">All</option>
                                {types.data.map((type) => (
                                    <option value={type.slug} key={type.id}>
                                        {type.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                className="block w-full px-3 py-2 text-sm bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:font-light border-slate-300 md:rounded-l-none md:rounded-r-md md:px-5 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                placeholder="Search for anything..."
                                type="text"
                                name="value"
                            />
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 flex items-center pr-2 right-1 md:right-2">
                                <a
                                    href=""
                                    type="submit"
                                    className="bi bi-search text-slate-400"
                                ></a>
                            </span>
                        </label>
                    </form>
                </div>
            </div>
            <div
                className={
                    scroll
                        ? "fixed z-40 flex flex-col items-center justify-between w-full top-0 hidden bg-white shadow"
                        : "fixed z-40 flex flex-col items-center justify-between w-full top-12 hidden bg-white shadow"
                }
                ref={searchTarget}
            >
                <div className="flex items-center w-full px-3 py-2 border-b md:px-6">
                    <form
                        action={route("search")}
                        method="GET"
                        className="flex justify-center w-full text-slate-600"
                    >
                        <input
                            type="hidden"
                            name="username"
                            value={username}
                        ></input>
                        <input type="hidden" name="type" value="author"></input>
                        <label className="relative flex justify-end w-full">
                            <input
                                className="block w-full px-3 py-2 text-sm bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:font-light md:w-72 border-slate-300 md:px-5 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                placeholder="Search author assets"
                                type="text"
                                name="value"
                            />

                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 flex items-center pr-2 right-1 md:right-2">
                                <button
                                    type="submit"
                                    className="bi bi-search text-slate-400"
                                ></button>
                            </span>
                        </label>
                    </form>
                </div>
            </div>
        </>
    );
}
