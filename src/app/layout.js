import "./globals.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ScrollTop from "../Components/ScrollTo/ScrollTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Sonaji Bhosle - Web Developer React Js",
  description: "Eating Sleep && Coding - Professional Portfolio of Sonu Bhosle",
  icons: {
    icon: "https://t3.ftcdn.net/jpg/04/78/41/76/360_F_478417696_bQGCBqKt8RIvozDFrqT1mRb0YKlKt9kV.jpg",
  },
};

import { SmoothScroll } from "../Components/SmoothScroll/SmoothScroll";
import { ScrollProgress } from "../Components/ScrollProgress/ScrollProgress";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <ScrollProgress />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
          <ToastContainer position="bottom-right" />
          <ScrollTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
