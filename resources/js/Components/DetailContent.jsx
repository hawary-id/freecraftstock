export default function DetailContent({ thumbnail }) {
    return (
        <div className="relative flex justify-center mb-1 md:mb-2">
            <img src={thumbnail} className="h-[280px] md:h-[500px]" alt="" />
            <div className="absolute h-full w-full opacity-50 z-10 bg-[url('/icons/ic_play.svg')] bg-cover bg-center bg-repeat top-0 left-0"></div>
        </div>
    );
}
