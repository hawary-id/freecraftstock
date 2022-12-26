import Footer from "@/Components/Footer";
import FooterSmall from "@/Components/FooterSmall";
import Input from "@/Components/Input";
import NavbarUser from "@/Components/NavbarUser";
import UserNavbar from "@/Components/UserNavbar";
import UserContent from "@/Layouts/UserContent";
import { Link } from "@inertiajs/inertia-react";

export default function Download({
    auth,
    contents,
    categoryList,
    recommendedSearch,
    typeList,
    title,
    sort,
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
