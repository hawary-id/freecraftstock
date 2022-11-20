import CardSimilar from "./CardSimilar";

export default function DetailSimilar(second) {
    return (
        <div className="col-span-1 px-3 py-3 border-t md:col-span-4 md:px-0">
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <CardSimilar
                        key={i}
                        thumbnail={`https://picsum.photos/500/700?random=${i}`}
                        type="Vectors"
                        name="Free vectors border blue"
                        authorName="Freecraftstock"
                        authorImage={`https://picsum.photos/300/300?random=${i}`}
                        likes="150"
                        slug="slug"
                    />
                ))}
            </div>
        </div>
    );
}
