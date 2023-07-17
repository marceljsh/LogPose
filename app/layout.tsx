import Nav from "@cmp/Nav";
import "@/app/globals.css";
import { Nunito } from "next/font/google";
import Footer from "@cmp/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "LogPose - Veni, Vidi, Vici",
  description: "I came, I saw, I conquered",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="@/favicon.ico" />
      </head>
      <body className={nunito.className}>
        <main className="bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="min-h-screen py-8 px-56">
            <Nav />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
