import CardCategory from "./CardCategory";

export default function MainCategory({ categories }) {
    return (
        <div className="flex flex-col w-full px-3 mb-5 md:mb-10 lg:px-52">
            <h1 className="mb-3 text-xl font-semibold md:text-2xl text-slate-600 md:mb-5">
                Best category for you
            </h1>
            <div className="justify-center w-full">
                <ul className="relative grid grid-flow-col grid-rows-3 gap-3 md:grid-rows-2 h-[400px]">
                    {categories.map((category, index) => (
                        <CardCategory
                            key={category.id}
                            id={index}
                            thumbnail={category.thumbnail}
                            name={category.name}
                            slug={category.slug}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
