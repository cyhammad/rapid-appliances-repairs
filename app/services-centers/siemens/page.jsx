// import AboutSection from "@/components/sections/home/AboutSection";
// import MainBanner from "@/components/sections/home/MainBanner";
// import OurMissionSection from "@/components/sections/home/OurMissionSection";
// import QualitySection from "@/components/sections/home/QualitySection";
// import ServicesSection from "@/components/sections/home/ServicesSection";
// import SiemensAboutSection from "@/components/sections/siemens/SiemensAboutSection";
// import { SiemensBanner } from "@/components/sections/siemens/SiemensBanner";
// import SiemensMissionSection from "@/components/sections/siemens/SiemensMissionSection";
// import SiemensQualitySection from "@/components/sections/siemens/SiemensQualitySection";
// import SiemensServices from "@/components/sections/siemens/SiemensServices";

// const SiemensServiceCenterPage = () => {
//   return (
//     <div className="flex flex-col">
//       <SiemensBanner company="Siemens" />
//       <QualitySection />
//       <AboutSection />
//       <ServicesSection />
//       <OurMissionSection />
//     </div>
//   );
// };

// export default SiemensServiceCenterPage;

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
