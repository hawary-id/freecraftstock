import CardContent from "@/Components/CardContent";
import MainNavbar from "@/Components/MainNavbar";
import Category from "../Components/Type";
import FooterSmall from "../Components/FooterSmall";
import MainBanner from "../Components/MainBanner";
import MainFooter from "../Components/MainFooter";

export default function MainLayout({ children }) {
    return (
        <>
            <div className="h-screen">
                {/* Start:Navbar */}
                <MainNavbar />
                {/* End:Navbar */}
                <MainBanner />
                <Category />
                {/* Start:Content */}
                <div className="flex flex-col w-full px-3 lg:px-52">
                    <h1 className="mb-3 text-xl font-semibold md:text-2xl text-slate-600 md:mb-5">
                        Explore Popular Assets
                    </h1>
                    <div className="justify-center w-full mb-16 md:mb-6">
                        <ul className="flex flex-wrap gap-4 image-gallery">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                                <CardContent
                                    key={i}
                                    imageContent={`https://picsum.photos/500/700?random=${i}`}
                                    type="Vectors"
                                    name="Free vectors border blue"
                                    authorName="Freecraftstock"
                                    authorImage="/images/avatar.png"
                                    likes="150"
                                    slug="slug"
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
