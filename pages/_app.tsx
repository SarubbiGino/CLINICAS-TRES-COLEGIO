import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/layout/layout";
import Head from "next/head";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  return(


    <SessionProvider
      session={pageProps.session}
    >
     <Layout>
       
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      
      <Component {...pageProps} />
    </Layout>
      
    </SessionProvider>
  
    ) 
}

export default MyApp;