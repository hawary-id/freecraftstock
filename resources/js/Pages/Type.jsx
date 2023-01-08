import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import Navbar from "@/Components/Navbar";
import Search from "@/Components/Search";
import Content from "@/Layouts/Content";
import { Head } from "@inertiajs/inertia-react";

export default function Type({
    auth,
    contents,
    categoryList,
    recommendedSearch,
    typeList,
    title,
    sort,
}) {
    return (
        <>
            <Head>
                <title>{title[0].name}</title>
            </Head>
            <div className="mb-36">
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
                <Content
                    title={title}
                    contents={contents}
                    sort={sort}
                    link="type"
                />
                {/* End:Content */}
            </div>
            {/* Start:Footer */}
            <Footer />
            {/* End:Footer */}

            <FooterSmall />
        </>
    );
}
