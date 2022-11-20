import { Link } from "@inertiajs/inertia-react";

export default function Login() {
    return (
        <div className="flex w-full h-screen bg-white">
            <div className="relative hidden h-screen overflow-hidden md:block md:w-3/5 bg-gradient-to-r from-indigo-500 to-purple-500">
                <div className="absolute z-10 rounded-full h-80 w-80 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-300 -top-10 -left-48"></div>
                <div className="absolute md:h-[450px] md:w-[450px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-300 top-32 left-20 rounded-full"></div>
                <div className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 bottom-10 right-48"></div>
            </div>

            <div className="relative flex w-full h-screen md:w-2/5">
                <Link
                    href={route("prototype.home")}
                    className="absolute block px-3 py-2 text-white bg-purple-400 rounded-full md:hidden top-6 left-6 hover:bg-purple-500"
                >
                    <span className="bi bi-chevron-left"></span>
                </Link>
                <div className="flex flex-col self-center w-full px-6 md:px-12">
                    <div className="flex flex-col items-start w-full">
                        <Link
                            href={route("prototype.home")}
                            className="flex mb-10 group"
                        >
                            <img
                                src="/images/logo_black.png"
                                className="h-10 mr-2 rounded-full group-hover:ring group-hover:ring-sky-200"
                            />
                            <div className="text-4xl font-semibold text-sky-400 group-hover:text-sky-300">
                                Freecraftstock
                            </div>
                        </Link>
                    </div>
                    <form className="w-full">
                        <div className="flex flex-col gap-6">
                            <div className="relative z-0">
                                <input
                                    type="email"
                                    id="email"
                                    className="block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none invalid:border-pink-500 focus:invalid:border-pink-500 invalid:text-pink-500 focus:invalid:text-pink-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-invalid:text-pink-500 peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email Address
                                </label>
                                <p className="hidden mt-2 text-sm text-pink-500 peer-invalid:block">
                                    Please provide a valid email address.
                                </p>
                            </div>
                            <div className="relative z-0">
                                <input
                                    type="password"
                                    id="password"
                                    className="block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none invalid:border-pink-500 focus:invalid:border-pink-500 invalid:text-pink-500 focus:invalid:text-pink-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Password
                                </label>
                                <p className="hidden mt-2 text-sm text-pink-500 peer-invalid:block">
                                    Please provide a valid email address.
                                </p>
                            </div>
                            <a
                                href=""
                                className="text-sm text-slate-500 place-self-end hover:text-blue-600"
                            >
                                Forgot password?
                            </a>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <Link
                                href={route("prototype.home")}
                                className="py-2 text-center text-white rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 md:py-3"
                            >
                                <span className="text-base font-semibold">
                                    Sign In
                                </span>
                            </Link>
                            <Link
                                href={route("prototype.register")}
                                className="py-2 text-center border rounded-md bg-slate-100 md:py-3 hover:bg-slate-50"
                            >
                                <span className="text-base text-slate-500">
                                    Sign Up Free
                                </span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
