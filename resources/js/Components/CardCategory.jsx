import { Link } from "@inertiajs/inertia-react";

export default function CardCategory({ name, thumbnail, slug, id }) {
    return (
        <li
            className={`${
                id === 0
                    ? "row-span-2 col-span-2 md:col-span-3"
                    : "col-span-2 md:row-span-1"
            } cursor-pointer overflow-hidden group transition relative rounded`}
        >
            <img
                src={thumbnail}
                alt={name}
                className="object-cover w-full h-full align-middle transition ease-out rounded group-hover:scale-110 group-hover:brightness-50"
            />
            <div className="absolute inset-0 items-center justify-center hidden text-center text-md md:text-3xl text-slate-100 group-hover:flex">
                {name}
            </div>

            <Link
                href={route("category", [slug, "populars"])}
                className="absolute inset-0 z-10"
            ></Link>
        </li>
    );
}
