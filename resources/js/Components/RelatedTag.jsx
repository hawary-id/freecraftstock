import { Link } from "@inertiajs/inertia-react";

export default function RelatedTags({ slug, title }) {
    return (
        <Link
            href={slug}
            className="flex px-2 py-1 text-sm border rounded bg-slate-200 text-slate-500 hover:bg-slate-300"
        >
            <span className="mr-1 bi bi-search"></span>
            {title}
        </Link>
    );
}
