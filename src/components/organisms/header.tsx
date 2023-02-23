import Link from 'next/link';
import MenuIcon from '../../../public/images/menu.svg'

const Header = () => {
    return (
        <header className="sticky top-0 border-b z-10 bg-white">
            <nav className='flex'>
                <div className='flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1'>
                    <Link href='/'>
                        Ryio1010 Blog
                    </Link>
                </div>

                <div className='flex-initial text-[#abc5c5] font-bold m-5 '>
                    <ul className='md:flex hidden flex-initial text-left'>
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/">ABOUT</Link></li>
                    </ul>
                </div>
                <button className='flex-initial absolute top-0 right-0 md:hidden'>
                    <MenuIcon width={40} height={40}/>
                </button>
            </nav>
        </header>
    );
};

export default Header;