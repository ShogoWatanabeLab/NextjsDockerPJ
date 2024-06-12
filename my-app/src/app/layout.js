import { Inter } from "next/font/google";
import '../styles/globals.css';
import '../styles/header.css';
import {Header, Footer} from "../components/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        {/* 他のメタタグやリンクタグ */}
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
