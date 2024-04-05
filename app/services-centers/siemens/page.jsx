import SiemensAboutSection from '@/components/sections/siemens/SiemensAboutSection'
import SiemensBanner from '@/components/sections/siemens/SiemensBanner'
import SiemensServices from '@/components/sections/siemens/SiemensServices'
import React from 'react'

const SiemensServiceCenterPage = () => {
  return (
    <>
        <SiemensBanner />
        <SiemensServices />
        <SiemensAboutSection />
    </>
  )
}

export default SiemensServiceCenterPage