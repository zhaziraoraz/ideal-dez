import Head from 'next/head'
import Hero from '@/components/Hero/Hero';
import OurServices from '@/components/Service/OurService';
import WhoWillUse from '@/components/WhoWillUse/WhoWillUse';
import SubmitRequest from '@/components/Service/SubmitRequest';
import Work from "@/components/Work/Work";
import ContactUs from '@/components/ContactUs/ContactUs';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>IDEAL-DEZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <OurServices/>
      <WhoWillUse/>
      <SubmitRequest />
      <Work />
      <ContactUs/>
      <Footer/>
    </div>
  )
}
