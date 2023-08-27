import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="style.css" />

        <link
          id="rtl-link"
          rel="stylesheet"
          type="text/css"
          href="../styles/bootstrap.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="../assets/css/vendors/remixicon.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="../assets/css/vendors/iconsax.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="../assets/css/vendors/aos.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="../assets/css/vendors/swiper-bundle.min.css"
        />

        <link rel="stylesheet" type="text/css" href="../assets/css/style.css" />
      </Head>
      <body className="bg-black">
        <Main />
        <div className="tap-to-top-box hide">
          <button className="tap-to-top-button">
            <i className="iconsax" data-icon="chevron-up"></i>
          </button>
        </div>

        <div id="cursor"></div>
        <div id="cursor-border"></div>

        <NextScript />

      </body>
    </Html>
  );
}
