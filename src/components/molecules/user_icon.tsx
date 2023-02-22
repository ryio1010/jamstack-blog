import Link from "next/link";
import React from "react";
import User from "../../../public/images/user.svg";

const UserIcon = () => {
    return (
        <Link href="/about"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <User width={30} height={30} className={"inline-block mb-1"}/>
            <span className="tab tab-whishlist block text-xs">運営者情報</span>
        </Link>
    );
};

export default UserIcon;