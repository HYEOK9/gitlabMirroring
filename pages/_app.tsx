import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/layout/AppLayout";
import { wrapper } from "../store/index";
import Head from "next/head";
import {ThemeProvider} from '../components/context/Theme'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
        <ThemeProvider>
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
            </Head>
            <AppLayout>
                <div id="portal" />
                <Component {...pageProps} />
            </AppLayout>
        </ThemeProvider> 
        </>
    );
}

export default wrapper.withRedux(MyApp);
