import CategoryItems from "@/Components/CategoryItems";

export default function Category() {
    return (
        <>
            <div className="flex flex-col w-full mt-5 md:mt-14 lg:px-52">
                <h1 className="px-3 text-xl font-semibold md:text-2xl text-slate-600">
                    Find Your Inspiration Here
                </h1>
                <div className="flex gap-8 p-6 overflow-x-auto text-center md:gap-14 md:p-10">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <CategoryItems
                            key={i}
                            slug={`vector-${i}`}
                            name={`Vector ${i}`}
                            thumbnail="https://picsum.photos/150/150?random"
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
