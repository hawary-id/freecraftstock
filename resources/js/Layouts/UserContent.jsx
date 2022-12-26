import UserAccount from "@/Components/UserAccount";
import UserPicture from "@/Components/UserPicture";

export default function UserContent({ auth }) {
    return (
        <div className="grid grid-cols-1 gap-5 px-3 mb-5 md:grid-cols-4 md:px-[350px]">
            <UserPicture auth={auth} />
            <UserAccount auth={auth} />
        </div>
    );
}
