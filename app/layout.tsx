import { Mulish } from "next/font/google";
import "./globals.css"; // Путь к вашему глобальному CSS
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
        {children}
      </body>
    </html>
  );
}

