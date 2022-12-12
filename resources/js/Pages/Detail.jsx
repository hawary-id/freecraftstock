import DetailAuthor from "@/Components/DetailAuthor";
import DetailButton from "@/Components/DetailButton";
import DetailContent from "@/Components/DetailContent";
import DetailDescription from "@/Components/DetailDescription";
import DetailDownload from "@/Components/DetailDownload";
import DetailLicense from "@/Components/DetailLicense";
import DetailSimilar from "@/Components/DetailSimilar";
import DetailSmallAds from "@/Components/DetailSmallAds";
import DetailSmallButton from "@/Components/DetailSmallButton";
import { Link } from "@inertiajs/inertia-react";

export default function Detail({ content, similars }) {
    const Content = content[0];
    function onBack() {
        window.history.back();
    }
    return (
        <div className="flex justify-center w-screen h-screen bg-slate-800">
            <Link
                onClick={onBack}
                className="fixed top-0 right-0 z-10 px-3 py-3 rounded-full md:top-1 md:right-24 lg:right-36 text-slate-50"
            >
                <span className="bi bi-x-lg"></span>
            </Link>
            <div className="absolute w-full px-0 py-3 overflow-x-hidden overflow-y-auto bg-white rounded-lg md:w-4/5 top-10 md:top-4 md:p-3 inset-y-10">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="col-span-1 md:col-span-2">
                        <DetailContent thumbnail={Content.thumbnail} />
                        <DetailSmallButton />
                        <DetailSmallAds type={Content.type.name} />
                        <DetailDescription
                            title={Content.name}
                            desc={Content.description}
                            id={Content.code}
                            keyword={Content.keyword}
                        />
                    </div>

                    <div className="col-span-1 ml-2">
                        <div className="hidden w-full mb-4 md:block">
                            <span className="text-sm font-semibold">ADS</span>
                            <img
                                src="/images/browse-2.png"
                                className="w-full border border-slate-600"
                                alt=""
                            />
                        </div>
                        <DetailLicense type={Content.type.name} />
                        <DetailButton />
                        <DetailDownload />
                        <DetailAuthor
                            avatar={Content.user.thumbnail}
                            name={Content.user.name}
                            username={Content.user.username}
                            followers="967"
                        />
                    </div>
                    <DetailSimilar similars={similars} />
                </div>
            </div>
            <div className="fixed bottom-0 flex w-full md:hidden">
                <Link
                    href=""
                    className="block w-full py-2 text-center border bg-emerald-300 border-slate-300 hover:bg-emerald-400"
                >
                    <span className="mr-1 bi bi-download"></span>Download
                </Link>
            </div>
        </div>
    );
}
