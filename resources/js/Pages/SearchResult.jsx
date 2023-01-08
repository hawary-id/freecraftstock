import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import Navbar from "@/Components/Navbar";
import Search from "@/Components/Search";
import ContentResult from "@/Layouts/ContentResult";
import { Head } from "@inertiajs/inertia-react";

export default function SearchResult({
    auth,
    contents,
    categoryList,
    recommendedSearch,
    typeList,
    title,
}) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="h-screen">
                {/* Start:Navbar */}
                <Navbar
                    auth={auth}
                    categories={categoryList}
                    types={typeList}
                    title={title}
                />
                {/* End:Navbar */}

                {/* Start:Search */}
                <Search recommended={recommendedSearch} types={typeList} />
                {/* End:Search */}

                {/* Start:Content */}
                <ContentResult title={title} contents={contents} />
                {/* End:Content */}

                {/* Start:Footer */}
                <Footer />
                {/* End:Footer */}
            </div>
            <FooterSmall />
        </>
    );
}
