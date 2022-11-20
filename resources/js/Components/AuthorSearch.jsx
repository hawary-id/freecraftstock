export default function AuthorSearch(second) {
    return (
        <div className="relative flex justify-end w-full px-3 mb-6 md:px-6">
            <input
                className="block w-full px-3 py-2 text-sm bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:font-light md:w-72 border-slate-300 md:px-5 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Search author assets"
                type="text"
                name="search"
            />
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 flex items-center right-6 md:right-9">
                <a
                    href=""
                    type="submit"
                    className="bi bi-search text-slate-400"
                ></a>
            </span>
        </div>
    );
}
