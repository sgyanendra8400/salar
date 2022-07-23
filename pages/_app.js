import Header from "../src/layout/header/dweb";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useMobile } from "../src/components/common/checkMobileView";
import MobileHeader from "../src/layout/header/mweb";
import HomePage from "../src/components/home/dweb";

function MyApp({ Component, pageProps }) {
  const isMobile = useMobile()
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          href="http://localhost:3000/assets/css/nucleo-icons.css"
          rel="stylesheet"
        />
        <link
          href="http://localhost:3000/assets/css/nucleo-svg.css"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossorigin="anonymous"
        ></script>
        <link
          href="http://localhost:3000/assets/css/nucleo-svg.css"
          rel="stylesheet"
        />
        <link
          id="pagestyle"
          href="http://localhost:3000/assets/css/soft-design-system-pro.css?v=1.1.0"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
     
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;
