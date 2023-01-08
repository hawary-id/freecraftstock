import AboutContent from "@/Components/AboutContent";
import ContactContent from "@/Components/ContactContent";
import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import Navbar from "@/Components/Navbar";

export default function ContactUs({ auth, categoryList, typeList }) {
    return (
        <>
            <div className="h-screen">
                {/* Start:Navbar */}
                <Navbar
                    auth={auth}
                    categories={categoryList}
                    types={typeList}
                    title="vectors"
                />
                {/* End:Navbar */}

                {/* Start:Content */}
                <ContactContent />
                {/* End:Content */}

                {/* Start:Footer */}
                <Footer />
                {/* End:Footer */}
            </div>
            <FooterSmall />
        </>
    );
}
