import Link from "next/link";
import Home from "../../../public/images/home.svg";
import React from "react";

const HomeIcon = () => {
    return (
        <Link href="/"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <Home width={30} height={30} className={"inline-block mb-1"}/>
            <span className="tab tab-home block text-xs">ホーム</span>
        </Link>
    );
};

export default HomeIcon;