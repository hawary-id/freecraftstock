export default function CardSimilar({
    thumbnail,
    type,
    name,
    authorImage,
    authorName,
    likes,
}) {
    return (
        <a href="" className="group">
            <div className="relative flex h-40 cursor-pointer w-72 md:h-56 md:w-96">
                <img
                    src={thumbnail}
                    alt=""
                    className="object-cover w-full h-full align-middle rounded"
                />
                <div className="absolute top-0 left-0 flex items-center w-full h-full text-white transition-all ease-in-out scale-0 rounded overlay bg-slate-900/50 group-hover:scale-100">
                    <span className="absolute right-0 pr-3 text-base top-2 md:top-3 md:pr-5">
                        {type}
                    </span>
                    <div className="absolute w-full px-3 bottom-2 md:bottom-3 md:px-5">
                        <div className="flex flex-col w-full">
                            <div className="text-base text-white">{name}</div>
                            <div className="flex items-center">
                                <img
                                    src={authorImage}
                                    className="w-12 h-12 border rounded-full border-sky-300"
                                    alt=""
                                />
                                <p className="ml-2 text-sm font-light text-white">
                                    {authorName}
                                </p>
                                <div className="flex justify-end w-full">
                                    <span className="items-end text-base text-white bi bi-heart-fill shrink">
                                        <span className="ml-1">{likes}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
