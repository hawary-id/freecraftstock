import { Link } from "@inertiajs/inertia-react";

export default function FooterSmall() {
    return (
        <div className="fixed bottom-0 right-0 z-50 flex justify-between w-full px-10 py-3 text-lg bg-blue-600 rounded-t-lg md:hidden text-slate-50">
            {route().current("home") ? (
                <Link href={route("home")} className="bi bi-house-fill"></Link>
            ) : (
                <Link href={route("home")} className="bi bi-house"></Link>
            )}
            {route().current("user.download") ? (
                <Link
                    href={route("user.download")}
                    className="bi bi-arrow-down-square-fill"
                ></Link>
            ) : (
                <Link
                    href={route("user.download")}
                    className="bi bi-arrow-down-square"
                ></Link>
            )}
            {route().current("user.favorite") ? (
                <Link
                    href={route("user.favorite")}
                    className="bi bi-heart-fill"
                ></Link>
            ) : (
                <Link
                    href={route("user.favorite")}
                    className="bi bi-heart"
                ></Link>
            )}

            {route().current("user.collection") ? (
                <Link
                    href={route("user.collection")}
                    className="bi bi-folder-fill"
                ></Link>
            ) : (
                <Link
                    href={route("user.collection")}
                    className="bi bi-folder"
                ></Link>
            )}

            {route().current("user.home") ? (
                <Link
                    href={route("user.home")}
                    className="bi bi-person-fill"
                ></Link>
            ) : (
                <Link href={route("user.home")} className="bi bi-person"></Link>
            )}
        </div>
    );
}
