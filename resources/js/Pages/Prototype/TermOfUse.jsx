import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import Navbar from "@/Components/Navbar";
import TermOfUseContent from "@/Components/TermOfUseContent";

export default function TermOfUse() {
    return (
        <>
            <div className="h-screen">
                {/* Start:Navbar */}
                <Navbar />
                {/* End:Navbar */}

                {/* Start:Content */}
                <TermOfUseContent />
                {/* End:Content */}

                {/* Start:Footer */}
                <Footer />
                {/* End:Footer */}
            </div>
            <FooterSmall />
        </>
    );
}
