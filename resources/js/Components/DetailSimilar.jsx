import CardSimilar from "./CardSimilar";

export default function DetailSimilar(similars) {
    return (
        <div className="col-span-1 px-3 py-3 border-t md:px-0 md:col-span-4">
            <div className="flex items-center justify-between">
                <div className="text-sm font-light text-slate-500">
                    Similars
                </div>
                <a
                    href=""
                    className="px-4 py-1 text-sm font-light border rounded text-slate-700 border-slate-400 bg-slate-200 hover:bg-slate-300"
                >
                    View All
                </a>
            </div>
            <div className="flex w-full gap-4 py-4 overflow-x-auto">
                {similars.similars.map((similar) => (
                    <CardSimilar
                        key={similar.id}
                        thumbnail={similar.thumbnail}
                        type={similar.type.name}
                        name={similar.name}
                        authorName={similar.user.name}
                        authorImage={similar.user.thumbnail}
                        likes={similar.like}
                        slug={similar.slug}
                    />
                ))}
            </div>
        </div>
    );
}
