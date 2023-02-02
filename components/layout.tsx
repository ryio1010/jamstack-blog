import Head from "next/head";
import Link from "next/link"

const Layout = (props: { title: string; children: any; }) => {
    const {title, children} = props
    const blogTitle: string = "TechBlog"


    return (
        <div className="page">
            <Head>
                <title>{title ? `${title} | ${blogTitle}` : blogTitle}</title>
            </Head>

            <header>
                <h1 className="site-title">
                    <Link href="/">
                        {blogTitle}
                    </Link>
                </h1>
            </header>

            <main>
                {title ? <h1 className="page-title">{title}</h1> : ``}
                <div className="page-main">
                    {children}
                </div>
            </main>

            <footer>
                &copy; {blogTitle}
            </footer>
        </div>
    )
}

export default Layout