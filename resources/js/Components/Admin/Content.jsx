export default function Content(second) {
    return (
        <div className="grid grid-cols-1 gap-5 px-3 md:px-5 md:grid-cols-2">
            <div className="h-64 bg-white border rounded shadow-md border-slate-200 md:h-96">
                <div className="flex flex-col p-3">
                    <div className="flex justify-between border-b">
                        <span className="py-1 text-sm text-slate-400">
                            Downloads
                        </span>
                        <span className="px-2 py-1 text-sm text-slate-400 bg-slate-200">
                            Daily
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-64 bg-white border rounded shadow-md border-slate-200 md:h-96">
                <div className="flex flex-col p-3">
                    <div className="flex justify-between border-b">
                        <span className="py-1 text-sm text-slate-400">
                            Downloads
                        </span>
                        <span className="px-2 py-1 text-sm text-slate-400 bg-slate-200">
                            Monthly
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
