export default function CategoryItems({ slug, name, thumbnail }) {
    return (
        <>
            <a href={slug} className="group">
                <div className="flex items-center justify-center w-24 h-24 mb-3 overflow-hidden bg-white rounded-full md:h-28 md:w-28 ring-4 ring-offset-2 ring-sky-300 group-hover:ring-blue-400">
                    <div
                        className={`transition ease-in-out duration-300 h-24 w-24 md:h-28 md:w-28 bg-center group-hover:scale-110 group-hover:brightness-125 bg-cover bg-[url(${thumbnail})]`}
                    ></div>
                </div>
                <h1 className="text-lg text-sky-500 group-hover:text-blue-400 group-hover:font-semibold">
                    {name}
                </h1>
            </a>
        </>
    );
}
