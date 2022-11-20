import AboutContent from "@/Components/AboutContent";
import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import Navbar from "@/Components/Navbar";

export default function AboutUs() {
    return (
        <>
            <div className="h-screen">
                {/* Start:Navbar */}
                <Navbar />
                {/* End:Navbar */}

                {/* Start:Content */}
                <AboutContent />
                {/* End:Content */}

                {/* Start:Footer */}
                <Footer />
                {/* End:Footer */}
            </div>
            <FooterSmall />
        </>
    );
}
