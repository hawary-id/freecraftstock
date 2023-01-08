import Content from "@/Components/Admin/Content";
import Footer from "@/Components/Admin/Footer";
import Sidebar from "@/Components/Admin/Sidebar";
import Title from "@/Components/Admin/Title";
import Topbar from "@/Components/Admin/Topbar";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(second) {
    return (
        <>
            <Head title="Admin Panel"></Head>
            <div className="flex flex-col h-screen">
                <div className="flex border-b grow bg-slate-100">
                    {/* Start:Sidebar */}
                    <Sidebar />
                    {/* End:Sidebar */}

                    <section className="mb-3 grow">
                        {/* Start:Topbar */}
                        <Topbar />
                        {/* End:Topbar */}
                        <Title />
                        {/* //Start:Content */}
                        <Content />
                        {/* End:Content  */}
                    </section>
                </div>
                {/* Start:Footer */}
                <Footer />
                {/* End:Footer */}
            </div>
        </>
    );
}
