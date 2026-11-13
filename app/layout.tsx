import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export const metadata: Metadata = { title: { default: "Fahamu News", template: "%s | Fahamu News" }, description: "Know the story. See the whole picture. Clear-eyed reporting and African perspectives.", icons: { icon: "/brand/favicon.svg" } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
