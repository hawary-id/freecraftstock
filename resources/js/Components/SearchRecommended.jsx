import { Link } from "@inertiajs/inertia-react";

export default function SearchRecommended({ title, slug }) {
    return (
        <Link
            href={slug}
            className="flex items-center px-2 py-1 border rounded-lg border-slate-300 md:px-3 md:py-2 hover:bg-slate-200"
        >
            <span className="mr-1 bi bi-search"></span>
            {title}
        </Link>
    );
}
