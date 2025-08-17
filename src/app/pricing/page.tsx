import React from 'react'
import LumifyPricing from '@/components/Pricing'
import Accordin from '@/components/Accordin'
import Navbar from '@/components/Navbar'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
const PricingPage = () => {
  return (
    <>
      <div className="relative mt-12">
        <div className='bg-blue-400'>
          <Navbar />
        </div>

        <LumifyPricing />
        <Accordin />
        <Cta />
        <Footer />
      </div>
    </>
  );
}

export default PricingPage