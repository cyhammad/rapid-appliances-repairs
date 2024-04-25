import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rapid Appliances Repairs",
  description:
    "Rapid Appliances Repairs is a local appliance repair company in the Dubai and Abu Dhabi. We specialize in repairing all major appliances including refrigerators, washers, dryers, stoves, and more.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
    <head>
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16532858519" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16532858519');
        ` }} />
</head>
      
      {children}
      
    </html>
  );
}
