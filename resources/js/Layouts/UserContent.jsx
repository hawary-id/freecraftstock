import UserAccount from "@/Components/UserAccount";
import UserPicture from "@/Components/UserPicture";

export default function UserContent({ auth }) {
    return (
        <div className="grid grid-cols-1 gap-3 md:gap-5 p-3 md:grid-cols-4 md:px-[350px]">
            <UserPicture auth={auth} />
            <UserAccount auth={auth} />
        </div>
    );
}
