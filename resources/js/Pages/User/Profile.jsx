import FlashMessage from "@/Components/FlashMessage";
import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import NavbarUser from "@/Components/NavbarUser";
import UserNavbar from "@/Components/UserNavbar";
import UserContent from "@/Layouts/UserContent";

export default function Profile({
    auth,
    categoryList,
    typeList,
    flashMessage,
}) {
    return (
        <>
            <div className="h-screen bg-slate-100">
                {/* Start:Navbar */}
                <NavbarUser
                    auth={auth}
                    categories={categoryList}
                    types={typeList}
                />
                {/* End:Navbar */}

                {/* Start:Content */}
                <UserNavbar />
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )}
                <UserContent auth={auth} />

                {/* End:Content */}

                {/* Start:Footer */}
                <Footer />
                {/* End:Footer */}
            </div>
            <FooterSmall />
        </>
    );
}
