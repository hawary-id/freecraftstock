export default function DetailSmallButton(second) {
    return (
        <div className="flex w-full gap-3 px-3 py-2 mb-1 md:hidden md:px-0">
            <a
                href=""
                className="py-2 text-sm text-center border rounded grow bg-slate-200 border-slate-300 hover:bg-slate-300"
            >
                <span className="bi bi-folder-plus"> Collect</span>
            </a>
            <a
                href=""
                className="px-4 py-2 text-sm text-center border rounded bg-slate-200 border-slate-300 hover:bg-slate-300"
            >
                <span className="bi bi-heart"></span>
            </a>
            <a
                href=""
                className="px-4 py-2 text-sm text-center border rounded bg-slate-200 border-slate-300 hover:bg-slate-300"
            >
                <span className="bi bi-share"></span>
            </a>
            <a
                href=""
                className="px-4 py-2 text-sm text-center border rounded bg-slate-200 border-slate-300 hover:bg-slate-300"
            >
                <span className="bi bi-pinterest"></span>
            </a>
        </div>
    );
}
