import CardContent from "@/Components/CardContent";
import { useRef, useState } from "react";

export default function Content({ title, contents }) {
    const [filter, setFilter] = useState(true);
    const filterTarget = useRef();

    const triggerFilter = () => {
        if (filter) {
            filterTarget.current.classList.remove("hidden");
        } else {
            filterTarget.current.classList.add("hidden");
        }
        setFilter(!filter);
    };
    return (
        <div className={title ? "flex mt-14" : "flex"}>
            <div className="w-full">
                {title && (
                    <div className="px-3 mt-20 mb-3 text-2xl text-center text-slate-900 md:mt-24 md:px-6">
                        Free {title}
                    </div>
                )}
                <div className="flex justify-end px-3 mb-2 md:mb-5 md:px-6">
                    <div className="mr-2 text-sm font-light text-slate-400">
                        Sort by :
                    </div>
                    <div
                        className="text-sm font-light cursor-pointer"
                        onClick={triggerFilter}
                    >
                        Populars
                        <span className="bi bi-caret-down-fill"></span>
                    </div>
                    <div
                        className="absolute z-50 grid hidden float-left text-sm text-left bg-white border rounded-md mt-7 grid-col min-w-max text-slate-700"
                        ref={filterTarget}
                    >
                        <a
                            href=""
                            className="px-4 py-2 bg-sky-200 hover:bg-sky-200 rounded-t-md"
                        >
                            Populars
                        </a>
                        <a href="" className="px-4 py-2 hover:bg-sky-200">
                            Recents
                        </a>
                    </div>
                </div>
                <div className="justify-center w-full px-3 mb-16 md:mb-5 md:px-6">
                    <ul className="flex flex-wrap gap-4 image-gallery">
                        {contents.map((content) => (
                            <CardContent
                                key={content.id}
                                thumbnail={content.thumbnail}
                                type={content.type.name}
                                typeSlug={content.type.slug}
                                name={content.name}
                                authorName={content.user.name}
                                authorImage={content.user.thumbnail}
                                likes={content.like}
                                slug={content.slug}
                                code={content.code}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
