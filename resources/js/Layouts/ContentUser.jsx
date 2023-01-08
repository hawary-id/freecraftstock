import CardContent from "@/Components/CardContent";

export default function ContentUser({ contents }) {
    return (
        <div className="w-full">
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
    );
}
