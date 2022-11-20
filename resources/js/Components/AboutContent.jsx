import { Link } from "@inertiajs/inertia-react";

export default function AboutContent(second) {
    return (
        <div className="w-full px-3 md:px-6">
            <div className="py-6 text-center md:py-10">
                <h1 className="mb-2 text-2xl font-bold text-green-500">
                    About Us
                </h1>
                <p className="mb-2 text-slate-600">
                    The history of{" "}
                    <span className="font-bold">Freecraftstock </span>
                    was designed and built since 2020 and published in 2022.
                    Freecraftstock was built by a team that has backgrounds as
                    designers, IT, and programmers. Its main goal is to make it
                    easy and help designers around the world to get inspired, so
                    they can get work done quickly.
                </p>
                <p className="mb-2 text-slate-600">
                    Which has a mission to provide easily available resources to
                    make it easier for designers to create their best work. In
                    line with our mission, we also have a vision to inspire and
                    facilitate the creative process.
                </p>
            </div>
            <div className="grid items-center grid-cols-1 gap-6 my-0 text-center md:gap-3 md:text-left md:my-10 md:grid-cols-5">
                <div className="w-full md:col-span-2">
                    <p className="mb-2 text-slate-600">
                        Find Your Ideas and Inspiration. We have an
                        extraordinary passion like you in building creativity.
                    </p>
                    <p className="mb-2 text-slate-600">
                        We provide fresh the job done quickly. Our team has done
                        an excellent job of providing resource that you can
                        download for <span className="font-bold">FREE</span>.
                    </p>
                    <Link
                        href={route("prototype.register")}
                        className="justify-center block py-2 text-sm bg-green-600 rounded md:w-56 md:flex text-slate-100 hover:bg-green-700 hover:text-slate-50"
                    >
                        Sign Up Free
                    </Link>
                </div>
                <div className="w-full md:col-span-3">
                    <iframe
                        className="h-56 md:h-96"
                        width="100%"
                        src="https://www.youtube.com/embed/WgsPFaz1wR4"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="py-6 text-center md:py-10">
                <h1 className="mb-2 text-2xl font-bold text-green-500">
                    Our Team
                </h1>
                <div className="w-full divide-y divide-slate-200">
                    <div className="flex flex-col items-center justify-start w-full gap-3 py-5 text-center md:text-left md:flex-row">
                        <div className="w-32 h-32 md:w-56 md:h-56 border-2 rounded-full border-sky-200 bg-cover bg-[url('/images/team/imam.webp')]" />
                        <p className="w-full md:w-2/4">
                            I.A. Budiyanto is the Founder and CEO of
                            freecraftstock. He launched the company in 2022 as a
                            graphic designer while working he is very familiar
                            with the challenges designers face. By setting out
                            to provider resources for designers who improve
                            their work, he build freecraftstock to help meet the
                            needs of designers oround the world.
                        </p>
                    </div>
                    <div className="flex flex-col-reverse items-center justify-end w-full gap-3 py-5 text-center md:text-right md:flex-row">
                        <p className="w-full md:w-2/4">
                            S. Hadi is the head of programming for
                            freecraftstock. As head of programming he was in
                            change of development and worked closely with the
                            CEO of freecraftstock to advance the website.
                        </p>
                        <div className="w-32 h-32 md:w-56 md:h-56 border-2 rounded-full border-sky-200 bg-cover bg-[url('/images/team/syamsul.webp')]" />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-3 py-5 text-center md:text-left md:flex-row">
                        <div className="w-32 h-32 md:w-56 md:h-56 border-2 rounded-full border-sky-200 bg-cover bg-[url('/images/team/dodi.webp')]" />
                        <p className="w-full md:w-2/4">
                            Doddy A.T has served as head of marketing since 2022
                            He is responsible for designing strategies for
                            freecraftstock marketing. He also works closely with
                            the team to continue to advance the company.
                        </p>
                    </div>
                    <div className="flex flex-col-reverse items-center justify-end w-full gap-3 py-5 text-center md:text-right md:flex-row">
                        <p className="w-full md:w-2/4">
                            R. Octavian Serve as quality control for content
                            published on freecraftsatck. With his experience and
                            profession as a professional photographer he was
                            recruited to join since 2022. Now he is responsible
                            for the quality of freecraftstock content.
                        </p>
                        <div className="w-32 h-32 md:w-56 md:h-56 border-2 rounded-full border-sky-200 bg-cover bg-[url('/images/team/riky.webp')]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
