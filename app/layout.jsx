import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vikrant Ghodvinde | Portfolio",
  description:
    "I am a passionate frontend web developer and React Native enthusiast hailing from Maharashtra, India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        link
      </head>
      <body className={inter.className} cz-shortcut-listen="true">
        <Suspense fallback={<>Loading...</>}>{children}</Suspense>
      </body>
    </html>
  );
}
