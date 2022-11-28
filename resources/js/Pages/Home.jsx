import CardContent from "@/Components/CardContent";
import Category from "@/Components/Category";
import FooterSmall from "@/Components/FooterSmall";
import MainBanner from "@/Components/MainBanner";
import MainFooter from "@/Components/MainFooter";
import MainNavbar from "@/Components/MainNavbar";
import Pagination from "@/Components/Pagination";

export default function Home({
    auth,
    types,
    contents,
    categoryList,
    recommendedSearch,
    typeList,
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
                <MainBanner recommended={recommendedSearch} />
                <Category types={types} />
                {/* Start:Content */}
                <div className="flex flex-col w-full px-3 lg:px-52">
                    <h1 className="mb-3 text-xl font-semibold md:text-2xl text-slate-600 md:mb-5">
                        Explore Popular Assets
                    </h1>
                    <div className="justify-center w-full mb-16 md:mb-6">
                        <ul className="flex flex-wrap gap-4 image-gallery">
                            {contents.map((content) => (
                                <CardContent
                                    key={content.id}
                                    thumbnail={content.thumbnail}
                                    type={content.type.name}
                                    typeSlug={content.type.slug}
                                    name={content.name}
                                    authorName={content.user.name}
                                    authorImage={content.user.thumbnail}
                                    likes={content.like}
                                    slug={content.slug}
                                    code={content.code}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Start:MainFooter */}
                <MainFooter />
                {/* End:MainFooter */}
            </div>
            <FooterSmall />
        </>
    );
}
