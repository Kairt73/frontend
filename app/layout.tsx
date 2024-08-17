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
      <head>
        <link rel="icon" href="/Car.svg" type="image/svg+xml" />
      </head>
      <body className={mulish.className}>
        {children}
      </body>
    </html>
  );
}
