import { Mulish } from "next/font/google";
import "./globals.css"; 

const mulish = Mulish({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="image/svg" href="/Car.svg" />
      <body className={mulish.className}>
        {children}
      </body>
    </html>
  );
}

