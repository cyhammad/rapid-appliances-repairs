import SamsungAboutUsSection from '@/components/sections/samsung/SamsungAboutUsSection'
import SamsungBanner from '@/components/sections/samsung/SamsungBanner'
import SamsungCustomerService from '@/components/sections/samsung/SamsungCustomerService'
import SamsungFixedCallButton from '@/components/sections/samsung/SamsungFixedCallButton'
import SamsungServices from '@/components/sections/samsung/SamsungServices'
import React from 'react'

const SamsungServiceCenterPage = () => {
  return (
    <div>
        <SamsungBanner />
        <SamsungServices />
        <SamsungCustomerService/>
        <SamsungAboutUsSection />
    </div>
  )
}

export default SamsungServiceCenterPage