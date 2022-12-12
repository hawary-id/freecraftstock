import { Link } from "@inertiajs/inertia-react";

export default function TypeItems({ slug, name, thumbnail }) {
    return (
        <>
            <Link href={route("type", [slug, "populars"])} className="group">
                <div className="flex items-center justify-center w-24 h-24 mb-3 overflow-hidden bg-white rounded-full md:h-28 md:w-28 ring-4 ring-offset-2 ring-sky-300 group-hover:ring-blue-400">
                    <div className="w-24 h-24 transition duration-300 ease-in-out bg-center bg-cover md:h-28 md:w-28 group-hover:scale-110 group-hover:brightness-125">
                        <img src={thumbnail} />
                    </div>
                </div>

                <h1 className="text-lg text-sky-500 group-hover:text-blue-400">
                    {name}
                </h1>
            </Link>
        </>
    );
}
