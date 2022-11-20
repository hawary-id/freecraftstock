import CardSimilar from "@/Components/CardSimilar";
import DetailAds from "@/Components/DetailSmallAds";
import DetailContent from "@/Components/DetailContent";
import DetailSmallButton from "@/Components/DetailSmallButton";
import { Link } from "@inertiajs/inertia-react";
import DetailDescription from "@/Components/DetailDescription";
import DetailLicense from "@/Components/DetailLicense";
import DetailButton from "@/Components/DetailButton";
import DetailDownload from "@/Components/DetailDownload";
import DetailSmallAds from "@/Components/DetailSmallAds";
import DetailSimilar from "@/Components/DetailSimilar";
import DetailAuthor from "@/Components/DetailAuthor";

export default function Detail({ thumbnail, title, desc }) {
    return (
        <div className="flex justify-center w-screen h-screen bg-slate-800">
            <Link
                href={route("prototype.home")}
                className="fixed top-0 right-0 z-10 px-3 py-3 rounded-full md:top-1 md:right-24 lg:right-36 text-slate-50"
            >
                <span className="bi bi-x-lg"></span>
            </Link>
            <div className="absolute w-full px-0 py-3 overflow-x-hidden overflow-y-auto bg-white rounded-lg md:w-4/5 top-10 md:top-4 md:p-3 inset-y-10">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <div className="col-span-1 md:col-span-2">
                        <DetailContent thumbnail="https://picsum.photos/1500/700" />
                        <DetailSmallButton />
                        <DetailSmallAds />
                        <DetailDescription
                            title="Woman in picture"
                            desc="Loderm epsum"
                            id="152444235"
                        />
                    </div>

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
                        <DetailAuthor
                            Avatar="https://picsum.photos/300/300"
                            name="Freecraftstock"
                            followers="967"
                        />
                    </div>
                    <DetailSimilar />
                </div>
            </div>
            <div className="fixed bottom-0 flex w-full md:hidden">
                <a
                    href=""
                    className="block w-full py-2 text-center border bg-emerald-300 border-slate-300 hover:bg-emerald-400"
                >
                    <span className="mr-1 bi bi-download"></span>Download
                </a>
            </div>
        </div>
    );
}
