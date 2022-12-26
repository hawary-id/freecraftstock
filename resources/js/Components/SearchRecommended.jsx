import { Link } from "@inertiajs/inertia-react";

export default function SearchRecommended({ keyword }) {
    return (
        <>
            {keyword
                .toString()
                .split(",")
                .map((data, index) => (
                    <Link
                        key={index}
                        href={route("search", ["all", data])}
                        className="flex items-center px-2 py-1 border rounded-lg border-slate-300 md:px-3 hover:bg-slate-200"
                    >
                        <span className="mr-1 bi bi-search"></span>
                        {data}
                    </Link>
                ))}
        </>
    );

    return <Keywords />;
}
