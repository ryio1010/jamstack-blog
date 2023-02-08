import Layout from '../components/layout';
import '../styles/globals.css';

// @ts-ignore
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;