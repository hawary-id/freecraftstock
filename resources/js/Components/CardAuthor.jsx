import { Link } from "@inertiajs/inertia-react";

export default function CardAuthor({
    thumbnail,
    name,
    username,
    followers,
    contents,
    likes,
    downloads,
}) {
    return (
        <div className="p-8 bg-white rounded shadow-md cursor-pointer md:p-6 group hover:bg-sky-300">
            <Link
                href={route("author", username)}
                className="flex items-center h-full gap-6 md:gap-4"
            >
                <div className="overflow-hidden rounded-full w-28 h-28 md:w-32 md:h-32 ring ring-offset-2 ring-sky-300 group-hover:ring-white">
                    <img
                        src={thumbnail}
                        className="object-cover h-full bg-cover brightness-75 group-hover:brightness-100"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xl font-semibold md:text-2xl text-sky-500 group-hover:text-white">
                        {name}
                    </h1>
                    <p className="text-xs md:text-sm text-slate-400 group-hover:text-white">
                        {followers} Followers
                    </p>
                    <p className="text-xs md:text-sm text-slate-400 group-hover:text-white">
                        <span className="mx-1 bi bi-archive"></span>
                        {contents} |<span className="mx-1 bi bi-heart"></span>
                        {likes} |
                        <span className="mx-1 bi bi-file-arrow-down"></span>
                        {downloads}
                    </p>
                </div>
            </Link>
        </div>
    );
}
