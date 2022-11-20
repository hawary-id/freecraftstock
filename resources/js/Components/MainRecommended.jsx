export default function MainRecommended({ title, slug }) {
    return (
        <a
            href={slug}
            className="block px-3 bg-blue-400 rounded-sm hover:bg-blue-500 hover:ring hover:ring-blue-400 group"
        >
            <span className="text-sm text-white bi bi-search"> {title}</span>
        </a>
    );
}
