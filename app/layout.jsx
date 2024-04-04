import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/Header";
import CallHeader from "@/components/headers/CallHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rapid Appliances Repairs",
  description:
    "Rapid Appliances Repairs is a local appliance repair company in the Dubai and Abu Dhabi. We specialize in repairing all major appliances including refrigerators, washers, dryers, stoves, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CallHeader />
        <Header />
        {children}
      </body>
    </html>
  );
}
