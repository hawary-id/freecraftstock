import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import Navbar from "@/Components/Navbar";
import Search from "@/Components/Search";
import Content from "@/Layouts/Content";

export default function Psd() {
    return (
        <>
            <div className="h-screen">
                {/* Start:Navbar */}
                <Navbar />
                {/* End:Navbar */}

                {/* Start:Search */}
                <Search />
                {/* End:Search */}

                {/* Start:Content */}
                <Content title="Free PSD" />
                {/* End:Content */}

                {/* Start:Footer */}
                <Footer />
                {/* End:Footer */}
            </div>
            <FooterSmall />
        </>
    );
}
