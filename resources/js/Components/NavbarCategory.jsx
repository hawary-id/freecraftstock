import { Link } from "@inertiajs/inertia-react";

export default function NavbarCategory({ slug, title }) {
    return (
        <Link
            href={route("prototype.category")}
            className="mr-10 hover:text-white"
        >
            {title}
        </Link>
    );
}
