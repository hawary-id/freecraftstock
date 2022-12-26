import { Link } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import SearchRecommended from "./SearchRecommended";

export default function Search({ recommended, types }) {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <div
            className={
                scroll
                    ? "fixed z-40 flex flex-col items-center justify-between w-full bg-white shadow top-0"
                    : "fixed z-40 flex flex-col items-center justify-between w-full bg-white shadow top-12"
            }
        >
            <div className="flex items-center w-full px-3 py-2 border-b md:px-6">
                <Link
                    href={route("home")}
                    className="items-center hidden mr-3 text-2xl font-semibold md:flex text-slate-500"
                >
                    <img src="/images/logo_black.png" className="h-8" />
                    <span className="ml-2 text-sky-400">Freecraftstock</span>
                </Link>
                <form
                    action={route("search")}
                    method="GET"
                    className="flex justify-center grow text-slate-600"
                >
                    <label className="relative flex w-full">
                        <select
                            className="px-1 py-2 border rounded-r-none border-slate-300 rounded-l-md md:pl-2 md:pr-7 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            name="type"
                        >
                            <option value="All">All</option>
                            {types.type.map((data) => (
                                <option value={data.slug} key={data.id}>
                                    {data.name}
                                </option>
                            ))}
                        </select>
                        <input
                            className="block w-full px-3 py-2 text-sm bg-white border rounded-md rounded-l-none shadow-sm placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:font-light border-slate-300 md:rounded-l-none md:rounded-r-md md:px-5 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                            placeholder="Search for anything..."
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
            <div className="flex w-full gap-3 px-3 py-3 overflow-x-auto text-sm bg-white border-b md:px-6 top-26 text-slate-500">
                <SearchRecommended keyword={recommended.keyword} />
            </div>
        </div>
    );
}
