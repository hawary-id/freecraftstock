import CardContent from "@/Components/CardContent";
import Type from "@/Components/Type";
import FooterSmall from "@/Components/FooterSmall";
import MainBanner from "@/Components/MainBanner";
import MainFooter from "@/Components/MainFooter";
import MainNavbar from "@/Components/MainNavbar";
import { Link } from "@inertiajs/inertia-react";
import MainContent from "@/Components/MainContent";
import MainCategory from "@/Components/MainCategory";

export default function Home({
    auth,
    contents,
    categoryList,
    recommendedSearch,
    typeList,
    categories,
}) {
    return (
        <>
            <div className="h-screen">
                {/* Start:Navbar */}
                <MainNavbar
                    auth={auth}
                    categories={categoryList}
                    types={typeList}
                />
                {/* End:Navbar */}
                <MainBanner recommended={recommendedSearch} types={typeList} />
                <div className="flex items-center justify-center w-full gap-2 px-4 py-4 mb-6 text-sm bg-violet-600 md:h-22 md:gap-3 text-slate-50 md:text-lg md:mb-10">
                    <div className="">
                        Get 1 million vector assets, photos, icons for free
                    </div>
                    <Link
                        href={route("register")}
                        className="px-3 py-1 text-center bg-orange-400 border rounded-md hover:bg-orange-500 hover:ring hover:ring-blue-300"
                    >
                        Sign Up Free
                    </Link>
                </div>
                <Type types={typeList} />

                {/* Start:Category */}
                {/* End:Category */}
                <MainCategory categories={categories} />
                {/* Start:Content */}
                <MainContent contents={contents} />
                {/* Start:MainFooter */}
                <MainFooter />
                {/* End:MainFooter */}
            </div>
            <FooterSmall />
        </>
    );
}
