import { Link } from "@inertiajs/inertia-react";

export default function DetailAuthor({
    avatar,
    name,
    followers,
    username,
    authorId,
    follow,
}) {
    return (
        <div className="flex w-full gap-5 px-3 py-3 md:mb-2 md:px-0">
            <Link
                href={route("author", username)}
                className="flex items-center"
            >
                <img
                    src={avatar}
                    className="border rounded-full h-14 w-14 border-sky-300"
                    alt=""
                />
                <div className="flex flex-col ml-2">
                    <div className="text-base font-semibold text-sky-300">
                        {name}
                    </div>
                    <small className="text-sm font-light text-slate-400">
                        {followers} Followers
                    </small>
                </div>
            </Link>
            {follow ? (
                <Link
                    href={route("user.unfollow", authorId)}
                    className="flex items-center text-center grow"
                >
                    <div className="py-1 text-white border rounded border-slate-400 grow bg-slate-400 hover:bg-slate-300 hover:text-slate-600">
                        Unfollow
                    </div>
                </Link>
            ) : (
                <Link
                    href={route("user.follow", authorId)}
                    className="flex items-center text-center grow"
                >
                    <div className="py-1 border rounded border-slate-300 grow bg-slate-200 hover:bg-slate-300">
                        Follow
                    </div>
                </Link>
            )}
        </div>
    );
}
