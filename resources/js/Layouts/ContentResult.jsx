import CardContent from "@/Components/CardContent";
import FilterDropdown from "@/Components/FilterDropdown";
import { useRef, useState } from "react";

export default function ContentResult({ title, contents }) {
    return (
        <div className={title ? "flex mt-14" : "flex"}>
            <div className="w-full">
                <div className="px-3 mt-20 mb-3 text-2xl text-center md:mb-5 text-slate-900 md:mt-24 md:px-6">
                    Free {title}
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
