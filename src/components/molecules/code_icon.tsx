import Link from "next/link";
import Code from "../../../public/images/code.svg";
import React from "react";

const CodeIcon = () => {
    return (
        <Link href="/pdev"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <Code width={30} height={30} className={"inline-block mb-1"}/>
            <span className="tab tab-home block text-xs">個人開発</span>
        </Link>
    );
};

export default CodeIcon;