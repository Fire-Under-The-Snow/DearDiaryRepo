import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DearDiary",
  description: "A Next Generation AI emotion Diary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" w-[720px] m-auto bg-[#404040] px-2 flex flex-col justify-between">
          <Navbar/>
        {children}
        <Footer/>
        </div>
      
        </body>
    </html>
  );
}
