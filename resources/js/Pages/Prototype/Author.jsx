import AuthorAssets from "@/Components/AuthorAssets";
import AuthorDetail from "@/Components/AuthorDetail";
import AuthorFollow from "@/Components/AuthorFollow";
import AuthorSearch from "@/Components/AuthorSearch";
import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import Navbar from "@/Components/Navbar";
import SearchAuthorAll from "@/Components/SearchAuthorAll";
import Content from "@/Layouts/Content";

export default function Author() {
    return (
        <>
            <div className="h-screen">
                <Navbar />
                <SearchAuthorAll />

                <div className="flex flex-col">
                    <div className="flex flex-col w-full px-3 py-5 mb-2 bg-white border-b md:flex-row md:justify-center md:px-0">
                        <AuthorDetail />
                        <AuthorAssets />
                        <AuthorFollow />
                    </div>
                    <AuthorSearch />
                    <div className="w-full">
                        <Content />
                    </div>
                </div>
                <Footer />
            </div>
            <FooterSmall />
        </>
    );
}
