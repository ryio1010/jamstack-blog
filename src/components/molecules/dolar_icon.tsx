import Link from "next/link";
import React from "react";
import Dolar from "../../../public/images/dolar.svg";

const DolarIcon = () => {
    return (
        <Link href="/web3"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <Dolar width={30} height={30} className={"inline-block mb-1"}/>
            <span className="tab tab-explore block text-xs">Web3.0</span>
        </Link>
    );
};

export default DolarIcon;