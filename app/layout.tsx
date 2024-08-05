import { Mulish } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Foooter";

const mulish = Mulish({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

