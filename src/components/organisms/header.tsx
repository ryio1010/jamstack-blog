import Link from "next/link";
import {useState} from "react";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className="flex justify-between pt-3 border-b sticky top-0 z-50 bg-slate-400">
            <Link href="/" className="">
                <div className="">Ryio Tech Blog</div>
            </Link>

            <button
                onClick={handleMenuOpen}
                type="button"
                className="z-10 space-y-2 mr-4 absolute top-2 right-0 md:hidden">

                <div className={openMenu ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45" : "w-8 h-0.5 bg-gray-600"}/>
                <div className={openMenu ? "opacity-0" : "w-8 h-0.5 bg-gray-600"}/>
                <div className={openMenu ? "w-8 h-0.5 bg-gray-600 -rotate-45" : "w-8 h-0.5 bg-gray-600"}/>

            </button>

            <div className="text-[#abc5c5] font-bold m-5">
                <ul className="md:flex hidden flex-initial text-left [&>li]:px-1">
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/pdev">個人開発</Link></li>
                    <li><Link href="/web3">Web3.0</Link></li>
                    <li><Link href="/about">運営者情報</Link></li>
                </ul>
            </div>

            <nav
                className={
                    openMenu
                        ? "text-left fixed bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-200"
                        : "fixed right-[-100%] ease-linear"
                }
            >
                <ul className="mt-6 [&>li]:border-b">
                    <li onClick={handleMenuOpen} ><Link href="/">HOME</Link></li>
                    <li onClick={handleMenuOpen}><Link href="/pdev">個人開発</Link></li>
                    <li onClick={handleMenuOpen}><Link href="/web3">Web3.0</Link></li>
                    <li onClick={handleMenuOpen}><Link href="/about">運営者情報</Link></li>
                </ul>
            </nav>
        </header>


    );
};

export default Header;