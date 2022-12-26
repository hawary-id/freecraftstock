import Input from "@/Components/Input";
import { useForm } from "@inertiajs/inertia-react";
import { useRef, useState } from "react";
export default function UserAccount({ auth }) {
    const { data, setData, post, errors } = useForm({
        username: auth.user.username,
        name: auth.user.name,
    });
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    const submit = (e) => {
        e.preventDefault();

        post(route("user.update", auth.user.id));
    };

    const [closeAccount, setcloseAccount] = useState(true);
    const CloseAccountTarget = useRef();
    const closeAccountTrigger = (e) => {
        e.preventDefault();
        if (closeAccount) {
            CloseAccountTarget.current.classList.remove("hidden");
        } else {
            CloseAccountTarget.current.classList.add("hidden");
        }
        setcloseAccount(!closeAccount);
    };
    return (
        <div className="col-span-1 p-5 bg-white rounded-md shadow-md md:col-span-3">
            <div className="mb-5 text-2xl font-semibold md:mb-10 text-slate-600">
                Account Data
            </div>
            <form
                className="grid grid-cols-1 gap-3 md:grid-cols-5"
                onSubmit={submit}
            >
                <div className="col-span-1 md:col-span-3">
                    <div className="flex flex-col w-full gap-8">
                        <Input
                            type="text"
                            name="username"
                            value={data.username}
                            autoComplete="email"
                            label="Username"
                            placeholder=" "
                            errors={errors.username}
                            handleChange={onHandleChange}
                        />
                        <Input
                            type="email"
                            name="email"
                            value={auth.user.email}
                            autoComplete="email"
                            label="Email Address"
                            placeholder=" "
                            handleChange={onHandleChange}
                            disabled
                            className="text-slate-400"
                        />
                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            autoComplete="email"
                            label="Full Name"
                            placeholder=" "
                            errors={errors.name}
                            handleChange={onHandleChange}
                        />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <div className="grid items-center content-end h-full grid-cols-2 gap-2">
                        <a
                            href=""
                            className="px-3 py-1 text-pink-600 border rounded md:py-2 bg-slate-50 hover:bg-slate-200"
                            onClick={closeAccountTrigger}
                        >
                            Close my Account
                        </a>
                        <button
                            type="submit"
                            className="px-3 py-1 text-white border rounded md:py-2 bg-sky-600 hover:bg-sky-700"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
            <div
                className="fixed inset-0 z-20 flex justify-center hidden py-24 rounded"
                ref={CloseAccountTarget}
            >
                <div className="h-32 p-5 bg-red-300 rounded-lg shadow-md w-96">
                    <p>CLose Your account?</p>
                    <a
                        href=""
                        className="px-3 py-1 text-pink-600 border rounded md:py-2 bg-slate-50 hover:bg-slate-200"
                        onClick={closeAccountTrigger}
                    >
                        Close my Account
                    </a>
                </div>
            </div>
        </div>
    );
}
