import "@/../styles/globals.css"
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { CountProvider } from "@/context/CountContext"; // Use this for Context API
// Redux: wrap with <Provider store={store}>

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
}
.