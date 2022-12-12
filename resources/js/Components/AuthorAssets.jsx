export default function AuthorAssets({ assets, favorites, downloads }) {
    return (
        <div className="flex justify-center mx-0 mb-3 text-center divide-x md:hidden md:mx-24">
            <div className="flex flex-col justify-center px-2">
                <div className="text-base font-semibold text-slate-700">
                    {assets}
                </div>
                <div className="text-sm font-light text-slate-400">Assets</div>
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
    );
}
