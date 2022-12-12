import CardContent from "@/Components/CardContent";
import FilterDropdown from "@/Components/FilterDropdown";
import { useRef, useState } from "react";

export default function Content({ title, contents, sort, link }) {
    const filterTarget = useRef(true);
    const [filter, setFilter] = useState(true);

    const triggerFilter = (e) => {
        e.preventDefault();
        if (filter) {
            filterTarget.current.classList.remove("hidden");
        } else {
            filterTarget.current.classList.add("hidden");
        }
        setFilter(!filter);
    };
    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return (
        <div className={title ? "flex mt-14" : "flex"}>
            <div className="w-full">
                {title && (
                    <>
                        <div className="px-3 mt-20 mb-3 text-2xl text-center text-slate-900 md:mt-24 md:px-6">
                            Free {title[0].name}
                        </div>
                        <div className="flex justify-end px-3 mb-2 md:mb-5 md:px-6">
                            <div className="mr-2 text-sm font-light text-slate-400">
                                Sort by :
                            </div>
                            <div
                                className="text-sm font-light cursor-pointer"
                                onClick={triggerFilter}
                            >
                                {Capitalize(sort)}
                                <span className="bi bi-caret-down-fill"></span>
                            </div>
                            <div
                                className="absolute z-50 grid hidden float-left text-sm text-left bg-white border rounded-md mt-7 grid-col min-w-max text-slate-700"
                                ref={filterTarget}
                            >
                                <FilterDropdown
                                    title={title}
                                    sort={sort}
                                    link={link}
                                    slug={title[0].slug}
                                />
                            </div>
                        </div>
                    </>
                )}

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
