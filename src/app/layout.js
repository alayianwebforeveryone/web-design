import "./globals.css";
import Menu from "../components/Navigation/index"
import Footer from "@/components/Footer";


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

          <Footer /> 
        
      </body>
    </html>
  );
}
