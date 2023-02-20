import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import Head from "next/head";
import TopNavigation from "@/components/top_navigation";

type Props = {
    children?: React.ReactNode
    title?: string,
    description?: string
}
export default function Layout({children, title, description}: Props) {
    const pageTitle = title || 'Ryio1010 Tech Blog'
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description || 'ホームページ説明'}/>
            </Head>
            <Header/>
            <TopNavigation/>
            <main className="flex-1 max-w-4xl w-full mx-auto">{children}</main>
            <Footer/>
        </div>
    );
}