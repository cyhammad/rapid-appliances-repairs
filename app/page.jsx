import Image from "next/image";
import Header from "@/components/headers/Header";
import CallHeader from "@/components/headers/CallHeader";

export default function Home() {
  return (
    <body className="flex flex-col ">
       <CallHeader />
        <Header />
    </body>
  );
}
