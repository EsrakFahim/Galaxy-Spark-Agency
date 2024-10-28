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
                        <meta name="author" content="GalaxySpark" />
                        <link
                              rel="icon"
                              href="/images/faviconGS.png"
                              sizes="any"
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
