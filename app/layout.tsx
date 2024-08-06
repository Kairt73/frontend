import "./globals.css";
import { Mulish } from "next/font/google";
import HomePage from "./HomePage/HomePage";
import ChoicePage from "./ChoicePage/ChoicePage";

const mulish = Mulish({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        {children}
      </body>
    </html>
  );
}
