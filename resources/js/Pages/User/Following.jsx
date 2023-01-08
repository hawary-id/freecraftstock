import CardAuthor from "@/Components/CardAuthor";
import CardContent from "@/Components/CardContent";
import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import NavbarUser from "@/Components/NavbarUser";
import UserNavbar from "@/Components/UserNavbar";
import { Head } from "@inertiajs/inertia-react";

export default function Following({
    auth,
    categoryList,
    typeList,
    followings,
    recommended,
}) {
    return (
        <>
            <Head>
                <title>Followings</title>
            </Head>
            <div className="bg-slate-100">
                {/* Start:Navbar */}
                <NavbarUser
                    auth={auth}
                    categories={categoryList}
                    types={typeList}
                />
                {/* End:Navbar */}

                {/* Start:Content */}
                <UserNavbar />
                <div className="justify-center w-full h-screen p-3 md:pb-5 md:px-6">
                    <h1 className="block py-2 text-base md:hidden text-slate-600">
                        Followings
                    </h1>
                    {followings ? (
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
                            {followings.map((following) => (
                                <CardAuthor
                                    key={following.id}
                                    name={following.name}
                                    username={following.username}
                                    thumbnail={following.thumbnail}
                                    contents={following.contents}
                                    followers={following.followers}
                                    downloads={following.downloads}
                                    likes={following.likes}
                                />
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col items-center justify-center gap-3 border-b">
                                <img src="/images/illustrations/illustration-empty-content.png" />
                                <h1 className="text-4xl font-semibold text-center text-slate-600">
                                    Your Favorites is empty
                                </h1>
                            </div>
                            <h1 className="py-2 text-base text-slate-600">
                                Recommendations for you
                            </h1>
                            <ul className="flex flex-wrap gap-4 image-gallery">
                                {recommended.data.map((content) => (
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
                        </>
                    )}
                </div>

                {/* End:Content */}

                {/* Start:Footer */}
                <Footer />
                {/* End:Footer */}
            </div>
            <FooterSmall />
        </>
    );
}
