import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 3600 
export const metadata = {
  title: "Rsve group",
  description:
    "RSV Engineering Group Ltd. is an independent firm that provides focused advice and solutions to clients, mainly in the areas of Highway Engineering, Civil Works, Laboratory Testing, Geotechnical Engineering services, Engineering Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         {/* <Navbar />
         {children}
         <Footer /> */}
    <div className="flex justify-center items-center h-screen ">
    <p className="bold-20 md:bold-32">
    We are under maintainance, we will be back shortly
    </p>
    </div>
      </body>
    </html>
  );
}
