export default function Topbar(second) {
    return (
        <div className="sticky top-0 flex items-center justify-between w-full px-3 py-2 mb-3 bg-white shadow-md md:px-5">
            <span className="block text-2xl text-slate-600 bi bi-list md:hidden"></span>
            <div className="hidden text-slate-400 md:block">Dashboard</div>
            <div className="flex items-center gap-3 cursor-pointer group">
                <span className="text-lg text-sky-500 group-hover:text-sky-700">
                    Freecraftstock
                </span>
                <img
                    src="/images/logo_black.png"
                    className="w-8 md:w-10 group-hover:brightness-75"
                />
            </div>
        </div>
    );
}
