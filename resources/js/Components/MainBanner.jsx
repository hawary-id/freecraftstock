import MainRecommended from "./MainRecommended";

export default function MainBanner({ recommended, types }) {
    return (
        <>
            <div className="flex flex-col w-full h-60 md:h-[500px] px-3 lg:px-52 mt-11 md:mt-14 justify-center items-center text-center text-white bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
                <h1 className="text-xl font-bold md:text-3xl">
                    Discover over 1 million free vector, photos, icon, PNG and
                    others
                </h1>
                <p className="py-2 text-md md:text-lg md:py-4">
                    Unlimited inspiration for extraordinary works
                </p>
                <form
                    action={route("search")}
                    method="GET"
                    className="flex justify-center w-full text-slate-600"
                >
                    <label className="relative flex w-full md:w-[900px]">
                        <select
                            className="py-1 pl-3 border pr-7 border-slate-300 rounded-l-md md:py-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            name="type"
                        >
                            <option value="All">All</option>
                            {types.type.map((data) => (
                                <option value={data.slug} key={data.id}>
                                    {data.name}
                                </option>
                            ))}
                        </select>
                        <input
                            className="block w-full px-3 bg-white border shadow-sm placeholder:italic placeholder:text-slate-400 placeholder:font-light placeholder:text-sm border-slate-300 rounded-r-md md:px-5 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Search for anything..."
                            type="text"
                            name="value"
                        />
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 flex items-center pr-2 right-1 md:right-2">
                            <button
                                type="submit"
                                className="bi bi-search text-slate-400"
                            ></button>
                        </span>
                    </label>
                </form>
                <div className="flex justify-center w-full gap-3 py-3 overflow-x-auto md:py-4">
                    <MainRecommended keyword={recommended.keyword} />
                </div>
            </div>
        </>
    );
}
