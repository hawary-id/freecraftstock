import { Link } from "@inertiajs/inertia-react";

export default function FooterSmall() {
    return (
        <div className="fixed bottom-0 right-0 z-50 flex justify-between w-full px-10 py-3 text-lg bg-blue-600 rounded-t-lg md:hidden text-slate-50">
            <Link href={route("home")} className="bi bi-house"></Link>
            <Link href={route("home")} className="bi bi-heart"></Link>
            <Link href={route("home")} className="bi bi-download"></Link>
            <Link href={route("home")} className="bi bi-person-circle"></Link>
        </div>
    );
}
