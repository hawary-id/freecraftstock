export default function AuthorFollow(second) {
    return (
        <div className="flex items-center gap-3">
            <a
                href=""
                className="py-2 text-center border rounded grow md:px-6 border-sky-300 bg-slate-100 hover:bg-slate-200 hover:ring"
            >
                Follow
            </a>
            <a
                href=""
                className="px-3 py-2 border rounded border-slate-300 bg-slate-100 hover:bg-slate-200 hover:ring"
            >
                <span className="bi bi-share"></span>
            </a>
        </div>
    );
}
