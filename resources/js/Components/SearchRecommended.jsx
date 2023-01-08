import { Link } from "@inertiajs/inertia-react";

export default function SearchRecommended({ keyword }) {
    return (
        <>
            {keyword
                .toString()
                .split(",")
                .map((data, index) => (
                    <form action={route("search")} method="GET">
                        <input type="hidden" name="type" value="All" />
                        <input type="hidden" name="value" value={data} />
                        <button
                            key={index}
                            className="flex items-center px-2 py-1 border rounded-lg border-slate-300 md:px-3 hover:bg-slate-200"
                        >
                            <span className="mr-1 bi bi-search"></span>
                            {data}
                        </button>
                    </form>
                ))}
        </>
    );

    return <Keywords />;
}
