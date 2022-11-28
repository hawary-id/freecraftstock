export default function DetailSmallAds({ type }) {
    return (
        <div className="flex flex-col w-full px-3 mb-3 md:hidden md:px-0">
            <p className="mb-2 text-sm text-slate-500 font-semilight">
                <span className="mr-1 bi bi-gem"></span>Free License
                <a href="" className="ml-2 text-sky-500 hover:text-sky-600">
                    More Info
                </a>
            </p>
            <p className="mb-2 text-sm text-slate-500 font-semilight">
                <span className="mr-1 bi bi-brush"></span>
                Atribute is required
                <a href="" className="ml-2 text-sky-500 hover:text-sky-600">
                    How to attribute?
                </a>
            </p>
            <p className="text-sm text-slate-500 font-semilight">
                <span className="mr-1 bi bi-file-earmark"></span>
                File type : {type}
                <a href="" className="ml-2 text-sky-500 hover:text-sky-600">
                    How to edit?
                </a>
            </p>
        </div>
    );
}
