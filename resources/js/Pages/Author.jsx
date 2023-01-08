import AuthorAssets from "@/Components/AuthorAssets";
import AuthorDetail from "@/Components/AuthorDetail";
import AuthorFollow from "@/Components/AuthorFollow";
import AuthorSearch from "@/Components/AuthorSearch";
import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import Navbar from "@/Components/Navbar";
import SearchAuthorAll from "@/Components/SearchAuthorAll";
import Content from "@/Layouts/Content";
import { Head } from "@inertiajs/inertia-react";

export default function Author({
    auth,
    categoryList,
    typeList,
    contents,
    author,
    assets,
    search,
    follow,
}) {
    return (
        <>
            <Head>
                <title>Author</title>
            </Head>
            <div className="h-screen">
                <Navbar
                    auth={auth}
                    categories={categoryList}
                    types={typeList}
                    title="vectors"
                />
                <SearchAuthorAll types={typeList} username={author.username} />

                <div className="flex flex-col">
                    <div className="flex flex-col w-full px-3 py-5 mb-2 bg-white border-b md:flex-row md:justify-center md:px-0">
                        <AuthorDetail author={author} />
                        <AuthorAssets
                            assets={author.contents}
                            favorites={author.likes}
                            downloads={author.downloads}
                        />
                        <AuthorFollow authorId={author.id} follow={follow} />
                    </div>
                    <AuthorSearch username={author.username} />
                    <div className="w-full">
                        <Content contents={contents} search={search} />
                    </div>
                </div>
                <Footer />
            </div>
            <FooterSmall />
        </>
    );
}
