import { Link } from "@inertiajs/inertia-react";

export default function Sidebar(second) {
    return (
        <section className="flex-col hidden bg-white border-r divide-y md:flex w-96">
            <div className="flex items-center gap-5 p-5">
                <img src="/images/logo_black.png" className="h-16" />
                <div className="flex flex-col">
                    <h1 className="text-4xl text-sky-400">Freecraftstock</h1>
                    <p className="text-sm text-slate-400">Admin Panel</p>
                </div>
            </div>
            <Link
                href=""
                className="px-5 py-3 text-lg border-r-4 text-sky-600 border-sky-600 bg-gradient-to-l from-sky-500 hover:text-sky-600"
            >
                Dashboard
            </Link>
            <Link
                href=""
                className="px-5 py-3 text-lg text-slate-400 hover:text-sky-600"
            >
                Type
            </Link>
            <Link
                href=""
                className="px-5 py-3 text-lg text-slate-400 hover:text-sky-600"
            >
                Categories
            </Link>
            <Link
                href=""
                className="px-5 py-3 text-lg text-slate-400 hover:text-sky-600"
            >
                Contents
            </Link>
            <Link
                href=""
                className="px-5 py-3 text-lg text-slate-400 hover:text-sky-600"
            >
                Users
            </Link>
            <Link
                href=""
                className="px-5 py-3 text-lg text-slate-400 hover:text-sky-600"
            >
                Contributors
            </Link>
        </section>
    );
}
