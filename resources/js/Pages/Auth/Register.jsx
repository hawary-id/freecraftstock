import React, { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import Input from "@/Components/Input";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />
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
                        <div className="flex flex-col items-start w-full mb-8">
                            <Link
                                href={route("prototype.home")}
                                className="flex group"
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
                        <form className="w-full" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <Input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    autoComplete="email"
                                    label="Your Name"
                                    handleChange={onHandleChange}
                                    placeholder=" "
                                    errors={errors.name}
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="email"
                                    label="Email Address"
                                    handleChange={onHandleChange}
                                    placeholder=" "
                                    errors={errors.email}
                                />
                                <Input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    autoComplete="password"
                                    label="Password"
                                    handleChange={onHandleChange}
                                    placeholder=" "
                                    errors={errors.password}
                                />
                                <Input
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    label="Password Confirmation"
                                    handleChange={onHandleChange}
                                    placeholder=" "
                                    errors={errors.password_confirmation}
                                />
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <PrimaryButton
                                    processing={processing}
                                    className="justify-center py-2 text-white rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 md:py-3"
                                >
                                    <span className="text-base font-semibold">
                                        Sign Up Free
                                    </span>
                                </PrimaryButton>
                                <Link
                                    href={route("login")}
                                    className="py-2 text-center border rounded-md bg-slate-100 md:py-3 hover:bg-slate-50"
                                >
                                    <span className="text-base text-slate-500">
                                        Sign In My Account
                                    </span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
