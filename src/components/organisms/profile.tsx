import Link from "next/link";

const Profile = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3 py-3 px-3">
            <img className="w-full rounded-full" src="/images/icon1.jpg" alt="記事画像"/>
            <div className="py-3">
                <div className="text-center">田中　太郎</div>
                <div className="text-center">TANAKA　TARO</div>
            </div>
            <div className="flex justify-between px-3">
                <p><Link href="">Twitter</Link></p>
                <p><Link href="">Github</Link></p>
                <p><Link href="">Qiita</Link></p>
                <p><Link href="">Zenn</Link></p>
            </div>
        </div>
    );
};

export default Profile;