import { Link } from "@inertiajs/inertia-react";
import RelatedTags from "./RelatedTag";

export default function DetailDescription({ title, desc, id, keyword }) {
    return (
        <div className="w-full px-3 mt-3 border-b md:mt-8 md:px-0 md:border-none">
            <h1 className="text-base font-semibold md:text-lg text-slate-600">
                {title}
            </h1>
            <p className="mb-1 text-sm md:text-base text-slate-500">{desc}</p>
            <p className="mb-4 text-sm font-light text-slate-500">
                #{id}
                <span className="ml-1 cursor-pointer bi bi-clipboard"></span>
            </p>
            <p className="mb-2 text-sm font-light text-slate-500">
                <span className="mr-1 bi bi-tags"></span>Related tags
            </p>
            <div className="flex gap-3 pb-4 overflow-x-auto text-center md:pb-2">
                <RelatedTags keyword={keyword} />
                <Link
                    href=""
                    className="flex px-2 py-1 text-sm border rounded bg-slate-200 text-slate-500 hover:bg-slate-300"
                >
                    +5
                </Link>
            </div>
        </div>
    );
}
