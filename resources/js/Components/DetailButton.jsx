import { Link } from "@inertiajs/inertia-react";

export default function DetailButton({ contentId, collect, like }) {
    return (
        <div className="hidden w-full gap-2 px-3 py-2 md:flex md:px-0">
            {collect ? (
                <Link
                    href={route("user.uncollect", contentId)}
                    className="py-2 text-sm text-center border rounded text-slate-100 grow bg-slate-400 border-slate-300 hover:bg-slate-300 hover:text-slate-600"
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
                    className="px-3 py-2 text-sm text-center border rounded bg-slate-400 border-slate-300 hover:bg-slate-300 group"
                >
                    <span className="text-white bi bi-heart-fill group-hover:text-slate-600"></span>
                </Link>
            ) : (
                <Link
                    href={route("user.like", contentId)}
                    className="px-3 py-2 text-sm text-center border rounded bg-slate-200 border-slate-300 hover:bg-slate-300"
                >
                    <span className="bi bi-heart"></span>
                </Link>
            )}
            <a
                href=""
                className="px-3 py-2 text-sm text-center border rounded bg-slate-200 border-slate-300 hover:bg-slate-300"
            >
                <span className="bi bi-share"></span>
            </a>
            <a
                href=""
                className="px-3 py-2 text-sm text-center border rounded bg-slate-200 border-slate-300 hover:bg-slate-300"
            >
                <span className="bi bi-pinterest"></span>
            </a>
        </div>
    );
}
