export default function AuthorDetail({
    author,
    followers,
    assets,
    favorites,
    downloads,
}) {
    return (
        <a
            href="author.html"
            className="flex items-center mb-3 md:justify-between md:mb-0"
        >
            <img
                src={author.thumbnail}
                className="w-16 h-16 border-2 rounded-full border-sky-300 "
                alt=""
            />
            <div className="flex flex-col ml-3">
                <div className="text-base font-semibold text-sky-400">
                    Freecraftstock
                </div>
                <small className="text-sm font-light text-slate-400">
                    {followers} Followers
                </small>
            </div>
            <div className="hidden mx-0 text-center divide-x md:flex md:mx-24">
                <div className="flex flex-col justify-center px-2">
                    <div className="text-base font-semibold text-slate-700">
                        {assets}
                    </div>
                    <div className="text-sm font-light text-slate-400">
                        Assets
                    </div>
                </div>

                <div className="flex flex-col justify-center px-2">
                    <div className="text-base font-semibold text-slate-700">
                        {favorites}
                    </div>
                    <div className="text-sm font-light text-slate-400">
                        Favorites
                    </div>
                </div>
                <div className="flex flex-col justify-center px-2">
                    <div className="text-base font-semibold text-slate-700">
                        {downloads}
                    </div>
                    <div className="text-sm font-light text-slate-400">
                        Downloads
                    </div>
                </div>
            </div>
        </a>
    );
}
