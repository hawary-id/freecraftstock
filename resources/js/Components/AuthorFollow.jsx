import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function AuthorFollow({ follow, authorId, auth }) {
    console.log(authorId);
    if (auth && authorId === auth.user.id) {
        return (
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    className="py-2 text-center border rounded grow md:px-6 bg-slate-50 text-slate-300"
                    disabled
                >
                    Follow
                </button>
                <Link
                    href=""
                    className="px-3 py-2 border rounded border-slate-300 bg-slate-100 hover:bg-slate-200 hover:ring"
                >
                    <span className="bi bi-share"></span>
                </Link>
            </div>
        );
    } else {
        return (
            <div className="flex items-center gap-3">
                {follow ? (
                    <Link
                        href={route("user.unfollow", authorId)}
                        className="py-2 text-center text-white border rounded grow md:px-6 bg-slate-400 hover:bg-slate-300 hover:text-slate-600 hover:ring"
                    >
                        Unfollow
                    </Link>
                ) : (
                    <Link
                        href={route("user.follow", authorId)}
                        className="py-2 text-center border rounded grow md:px-6 border-sky-300 bg-slate-100 hover:bg-slate-200 hover:ring"
                    >
                        Follow
                    </Link>
                )}
                <Link
                    href=""
                    className="px-3 py-2 border rounded border-slate-300 bg-slate-100 hover:bg-slate-200 hover:ring"
                >
                    <span className="bi bi-share"></span>
                </Link>
            </div>
        );
    }
}
