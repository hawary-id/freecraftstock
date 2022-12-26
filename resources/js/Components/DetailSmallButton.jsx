import { Link } from "@inertiajs/inertia-react";

export default function DetailSmallButton({ contentId, collect, like }) {
    return (
        <div className="flex w-full gap-3 px-3 py-2 mb-1 md:hidden md:px-0">
            {collect ? (
                <Link
                    href={route("user.uncollect", contentId)}
                    className="py-2 text-sm text-center text-white border rounded grow bg-slate-400 border-slate-300 hover:bg-slate-300"
                >
                    <span className="bi bi-folder-minus"> Uncollect</span>
                </Link>
            ) : (
                <Link
                    href={route("user.collect", contentId)}
                    className="py-2 text-sm text-center border rounded grow bg-slate-200 border-slate-300 hover:bg-slate-300"
                >
                    <span className="bi bi-folder-plus"> Collect</span>
                </Link>
            )}
            {like ? (
                <Link
                    href={route("user.unlike", contentId)}
                    className="px-4 py-2 text-sm text-center border rounded bg-slate-400 border-slate-300 hover:bg-slate-300"
                >
                    <span className="text-white bi bi-heart-fill"></span>
                </Link>
            ) : (
                <Link
                    href={route("user.like", contentId)}
                    className="px-4 py-2 text-sm text-center border rounded bg-slate-200 border-slate-300 hover:bg-slate-300"
                >
                    <span className="bi bi-heart"></span>
                </Link>
            )}

            <a
                href=""
                className="px-4 py-2 text-sm text-center border rounded bg-slate-200 border-slate-300 hover:bg-slate-300"
            >
                <span className="bi bi-share"></span>
            </a>
            <a
                href=""
                className="px-4 py-2 text-sm text-center border rounded bg-slate-200 border-slate-300 hover:bg-slate-300"
            >
                <span className="bi bi-pinterest"></span>
            </a>
        </div>
    );
}
