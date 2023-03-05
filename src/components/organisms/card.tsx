const Card = () => {
    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3">
            <div><img className="w-full" src="/images/icon1.jpg" alt="記事画像"/></div>
            <div className="px-3 py-4">
                <div className="font-bold text-xl mb-2">記事タイトル</div>
                <p className="text-gray-700 text-base">内容の要約です。内容の要約です。内容の要約です。内容の要約です。</p>
            </div>
            <div className="px-3 pb-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag</span>
            </div>
            <div className="px-3 pb-2">
                <span className="text-gray-700">2023.2.27</span>
            </div>
        </div>
    );
};

export default Card;