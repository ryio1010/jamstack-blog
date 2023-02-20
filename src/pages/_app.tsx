import Layout from '../components/layout';
import '../styles/globals.css';

type Props = {
    Component: any,
    pageProps: any
}

function MyApp({Component, pageProps}: Props) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;