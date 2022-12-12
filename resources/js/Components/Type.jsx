import TypeItems from "@/Components/TypeItems";

export default function Type({ types }) {
    return (
        <>
            <div className="flex flex-col w-full mt-5 mb-5 md:mt-14 lg:px-52">
                <h1 className="px-3 text-xl font-semibold md:text-2xl text-slate-600">
                    Find Your Inspiration Here
                </h1>
                <div className="flex gap-8 p-6 overflow-x-auto text-center md:gap-14 md:p-10">
                    {types.type.map((type) => (
                        <TypeItems
                            key={type.id}
                            slug={type.slug}
                            name={type.name}
                            thumbnail={type.thumbnail}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
