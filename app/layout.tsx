import { Mulish } from "next/font/google";
import "./globals.css"; 
import HomePage from "./pages/HomePage/HomePage";

const mulish = Mulish({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <HomePage />
        {children}
      </body>
    </html>
  );
}

