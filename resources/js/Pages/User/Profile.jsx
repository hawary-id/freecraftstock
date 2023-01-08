import FlashMessage from "@/Components/FlashMessage";
import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import NavbarUser from "@/Components/NavbarUser";
import UserNavbar from "@/Components/UserNavbar";
import UserContent from "@/Layouts/UserContent";
import { Head } from "@inertiajs/inertia-react";

export default function Profile({
    auth,
    categoryList,
    typeList,
    flashMessage,
}) {
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <div className="h-screen md:mb-0 md:h-screen bg-slate-100">
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
            </div>
            {/* Start:Footer */}
            <Footer />
            {/* End:Footer */}
            <FooterSmall />
        </>
    );
}
