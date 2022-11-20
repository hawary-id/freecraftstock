export default function SearchAuthor(second) {
    <div className="flex flex-col items-center justify-between w-full bg-white shadow">
        <div className="flex items-center w-full px-3 py-2 border-b md:px-6">
            <a
                href="index.html"
                className="flex items-center mr-3 text-2xl font-semibold text-slate-500"
            >
                <img src="/images/logo_black.png" className="h-8" />
                <span className="hidden ml-2 md:block text-sky-400">
                    Freecraftstock
                </span>
            </a>
            <form
                method="POST"
                action=""
                className="flex justify-center grow text-slate-600"
            >
                <label className="relative flex w-full">
                    <select className="hidden px-1 py-2 border md:block border-slate-300 rounded-l-md md:px-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                        <option value="">All</option>
                        <option value="">Vectors</option>
                        <option value="">Photos</option>
                        <option value="">PNG</option>
                        <option value="">PSD</option>
                        <option value="">Tutorials</option>
                    </select>
                    <input
                        className="block w-full px-3 py-2 text-sm bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:font-light border-slate-300 md:rounded-l-none md:rounded-r-md md:px-5 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Search for anything..."
                        type="text"
                        name="search"
                    />
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 flex items-center pr-2 right-1 md:right-2">
                        <a
                            href=""
                            type="submit"
                            className="bi bi-search text-slate-400"
                        ></a>
                    </span>
                </label>
            </form>
        </div>
    </div>;
}
