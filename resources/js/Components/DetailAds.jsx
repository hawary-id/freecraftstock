import DetailButton from "./DetailButton";
import DetailDownload from "./DetailDownload";
import DetailLicense from "./DetailLicense";

export default function DetailAds(second) {
    return (
        <div className="col-span-1 mb-3">
            <div className="hidden w-full mb-4 md:block">
                <span className="text-sm font-semibold">ADS</span>
                <img
                    src="/images/browse-2.png"
                    className="w-full border border-slate-600"
                    alt=""
                />
            </div>
            <DetailLicense />
            <DetailButton />
            <DetailDownload />
            <div className="flex w-full gap-5 px-3 md:px-0">
                <a href="author.html" className="flex items-center">
                    <img
                        src="/images/avatar.png"
                        className="border rounded-full h-14 w-14 border-sky-300"
                        alt=""
                    />
                    <div className="flex flex-col ml-2">
                        <div className="text-base font-semibold text-sky-300">
                            Freecraftstock
                        </div>
                        <small className="text-sm font-light text-slate-400">
                            1,000 Followers
                        </small>
                    </div>
                </a>
                <div className="flex items-center text-center grow">
                    <div className="py-1 border rounded grow bg-slate-200 border-slate-300 hover:bg-slate-300">
                        Follow
                    </div>
                </div>
            </div>
        </div>
    );
}
