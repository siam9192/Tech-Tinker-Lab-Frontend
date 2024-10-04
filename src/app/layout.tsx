import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/provider";


export const metadata: Metadata = {
  title: "TechTinkerLab",
  description: "TechTinker Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" >
      <body className="dark:bg-dark-mode">
       <Provider>
       {children}
       
       </Provider>
      </body>
    </html>
  );
}
