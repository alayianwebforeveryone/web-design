import "./globals.css";
import Menu from "../components/Navigation/index"
import Footer from "@/components/Footer";
import { About } from "@/components/About/About";
import Nocode from "@/components/Nocode";


export const metadata = {
  title: "Web design Services",
  description: "Web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background  text-[#1d1e1e] ">
        <Menu />

        {children}

        <div id="about">
          <About />
        </div>
      


      {/* no code */}


      <Nocode />

      <Footer />

    </body>
    </html >
  );
}
