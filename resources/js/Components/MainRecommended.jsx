import { Link } from "@inertiajs/inertia-react";

export default function MainRecommended({ keyword }) {
    return (
        <>
            {keyword
                .toString()
                .split(",")
                .map((data, index) => (
                    <Link
                        key={index}
                        href={data}
                        className="flex px-3 py-1 text-sm bg-blue-400 rounded-sm hover:bg-blue-500 hover:ring hover:ring-blue-400 group"
                    >
                        <span className="mr-1 text-sm text-white bi bi-search"></span>
                        {data}
                    </Link>
                ))}
        </>
    );
}
