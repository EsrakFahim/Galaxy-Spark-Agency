"use client";
import Header from "@/app/ui/Header";
import CustomCursor from "@/app/ui/CustomCursor";
import Footer from "@/app/ui/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";
import Div from "./ui/Div";
import Cta from "./ui/Cta";
import Spacing from "./ui/Spacing";

const poppins = Poppins({
      subsets: ["latin"],
      weight: ["400", "600", "700"],
      variable: "--primary-font",
});
const openSans = Open_Sans({
      subsets: ["latin"],
      weight: ["400", "600", "700"],
      variable: "--secondary-font",
});

export default function RootLayout({ children }) {
      return (
            <html lang="en">
                  <head>
                        <meta charSet="UTF-8" />
                        <meta
                              name="viewport"
                              content="width=device-width, initial-scale=1.0"
                        />
                        <meta name="author" content="GalaxySpark" />

                        {/* <!-- Favicon for all sizes --> */}
                        <link
                              rel="icon"
                              href="/images/faviconGS.png"
                              type="image/png"
                              sizes="any"
                        />

                        {/* <!-- Favicon fallback for older browsers --> */}
                        <link
                              rel="shortcut icon"
                              href="/images/faviconGS.ico"
                              type="image/x-icon"
                        />

                        {/* <!-- Apple Touch Icon (for iOS Home Screen) --> */}
                        <link
                              rel="apple-touch-icon"
                              href="/images/faviconGS.png"
                        />

                        <title>GalaxySpark</title>
                  </head>

                  <body className={`${openSans.variable} ${poppins.variable}`}>
                        <Header />
                        {children}
                        <Spacing lg="150" md="80" />
                        <Div className="container">
                              <Cta
                                    title="Let’s disscuse make <br />something <i>cool</i> together"
                                    btnText="Apply For Meeting"
                                    btnLink="/contact"
                                    bgSrc="/images/cta_bg.jpeg"
                              />
                        </Div>
                        <Footer />
                        <CustomCursor />
                  </body>
            </html>
      );
}
