import "@/styles/globals.scss";
import "@/styles/bootstrap.css";
import "@/styles/iconsax.css";
import "@/styles/remixicon.css";
import "@/styles/aos.css";
import "@fortawesome/fontawesome-free/css/all.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="../assets/js/swiper-bundle.min.js"
        crossOrigin="anonymous"
      ></Script>
      <Script src="../assets/js/aos.js" crossOrigin="anonymous"></Script>
      <Script src="../assets/js/custom-aos.js" />
      <Script src="../assets/js/bootstrap.bundle.min.js" />
      <Script src="../assets/js/script.js" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
