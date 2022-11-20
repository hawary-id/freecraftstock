import { Link } from "@inertiajs/inertia-react";

export default function DetailAuthor({ Avatar, name, followers }) {
    return (
        <div className="flex w-full gap-5 px-3 md:px-0">
            <Link
                href={route("prototype.author")}
                className="flex items-center"
            >
                <img
                    src={Avatar}
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
            <div className="flex items-center text-center grow">
                <div className="py-1 border rounded grow bg-slate-200 border-slate-300 hover:bg-slate-300">
                    Follow
                </div>
            </div>
        </div>
    );
}
