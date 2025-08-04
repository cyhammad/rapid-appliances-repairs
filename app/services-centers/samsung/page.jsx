// import AboutSection from "@/components/sections/home/AboutSection";
// import OurMissionSection from "@/components/sections/home/OurMissionSection";
// import QualitySection from "@/components/sections/home/QualitySection";
// import ServicesSection from "@/components/sections/home/ServicesSection";
// import SamsungBanner from "@/components/sections/samsung/SamsungBanner";

// const SamsungServiceCenterPage = () => {
//   return (
//     <div className="flex flex-col ">
//       <SamsungBanner />
//       <QualitySection />
//       <AboutSection />
//       <ServicesSection />
//       <OurMissionSection />
//     </div>
//   );
// };

// export default SamsungServiceCenterPage;

import Image from "next/image";
import Header from "@/components/headers/Header";
import CallHeader from "@/components/headers/CallHeader";
import MainBanner from "@/components/sections/home/MainBanner";
import QualitySection from "@/components/sections/home/QualitySection";
import AboutSection from "@/components/sections/home/AboutSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import Footer from "@/components/sections/home/Footer";
import FixedCallButtons from "@/components/buttons/FixCallButtons";

export default function Home() {
  return (
    <body className="flex flex-col">
    
      <Header />
      <MainBanner />
      <QualitySection />
      <AboutSection />
      <ServicesSection />
      <OurMissionSection />
      <Footer />
      <FixedCallButtons />
    </body>
  );
}
