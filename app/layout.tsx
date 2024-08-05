import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin", "cyrillic"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
