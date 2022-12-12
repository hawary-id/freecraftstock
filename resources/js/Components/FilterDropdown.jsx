import { Link } from "@inertiajs/inertia-react";

export default function FilterDropdown({ slug, sort, link }) {
    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    if (sort === "populars") {
        return (
            <>
                {["populars", "recents", "randoms"].map((sortItem, index) => (
                    <Link
                        key={index}
                        href={route(link, [
                            slug.toString().toLowerCase(),
                            sortItem,
                        ])}
                        className={`px-4 py-2 hover:bg-sky-200 ${
                            sortItem === sort && "bg-sky-200"
                        } `}
                    >
                        {Capitalize(sortItem)}
                    </Link>
                ))}
            </>
        );
    } else if (sort === "recents") {
        return (
            <>
                {["recents", "populars", "randoms"].map((sortItem, index) => (
                    <Link
                        key={index}
                        href={route(link, [
                            slug.toString().toLowerCase(),
                            sortItem,
                        ])}
                        className={`px-4 py-2 hover:bg-sky-200 ${
                            sortItem === sort && "bg-sky-200"
                        } `}
                    >
                        {Capitalize(sortItem)}
                    </Link>
                ))}
            </>
        );
    } else {
        return (
            <>
                {["randoms", "populars", "recents"].map((sortItem, index) => (
                    <Link
                        key={index}
                        href={route(link, [
                            slug.toString().toLowerCase(),
                            sortItem,
                        ])}
                        className={`px-4 py-2 hover:bg-sky-200 ${
                            sortItem === sort && "bg-sky-200"
                        } `}
                    >
                        {Capitalize(sortItem)}
                    </Link>
                ))}
            </>
        );
    }
}
