import { Link } from "@inertiajs/inertia-react";

export default function RelatedTags({ keyword }) {
    return (
        <>
            {keyword
                .toString()
                .split(",")
                .map((data, index) => (
                    <Link
                        key={index}
                        href={data}
                        className="flex px-2 py-1 text-sm border rounded bg-slate-200 text-slate-500 hover:bg-slate-300"
                    >
                        <span className="mr-1 bi bi-search"></span>
                        {data}
                    </Link>
                ))}
        </>
    );
}
