import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import Navbar from "@/Components/Navbar";
import Search from "@/Components/Search";
import Content from "@/Layouts/Content";

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
                <Content
                    title={title}
                    contents={contents}
                    sort={sort}
                    link="type"
                />
                {/* End:Content */}

                {/* Start:Footer */}
                <Footer />
                {/* End:Footer */}
            </div>
            <FooterSmall />
        </>
    );
}
