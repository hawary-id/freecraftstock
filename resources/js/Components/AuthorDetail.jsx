export default function AuthorDetail({
    author,
    followers,
    assets,
    favorites,
    downloads,
}) {
    return (
        <a
            href=""
            className="flex items-center mb-3 md:justify-between md:mb-0"
        >
            <img
                src={author.thumbnail}
                className="w-16 h-16 overflow-hidden bg-gray-200 border-2 rounded-full border-sky-300"
                alt=""
            />
            <div className="flex flex-col ml-3">
                <div className="text-base font-semibold text-sky-400">
                    {author.name}
                </div>
                <small className="text-sm font-light text-slate-400">
                    {author.followers} Followers
                </small>
            </div>
            <div className="hidden mx-0 text-center divide-x md:flex md:mx-24">
                <div className="flex flex-col justify-center px-2">
                    <div className="text-base font-semibold text-slate-700">
                        {author.contents}
                    </div>
                    <div className="text-sm font-light text-slate-400">
                        Assets
                    </div>
                </div>

                <div className="flex flex-col justify-center px-2">
                    <div className="text-base font-semibold text-slate-700">
                        {author.likes}
                    </div>
                    <div className="text-sm font-light text-slate-400">
                        Favorites
                    </div>
                </div>
                <div className="flex flex-col justify-center px-2">
                    <div className="text-base font-semibold text-slate-700">
                        {author.downloads}
                    </div>
                    <div className="text-sm font-light text-slate-400">
                        Downloads
                    </div>
                </div>
            </div>
        </a>
    );
}
