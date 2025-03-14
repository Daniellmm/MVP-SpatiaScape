import React from 'react';
import MainNavBar from '../components/MainNavBar';
import { IoIosPlay } from "react-icons/io";
import AdminPNG from '../assets/images/admindashboard.png'
import TOOLS from '../assets/images/3.png'
import EMBED from '../assets/images/EmbedModel.jpg'
import SCAN from '../assets/images/ScanModel.jpg'
import PROCESS from '../assets/images/ProcessModel.jpg'
import FeatureCard from '../components/FeatureCard';
import { FaBox, FaLink, FaChartBar, FaVrCardboard } from "react-icons/fa";


const LandingPage = () => {

  const features = [
    {
      icon: <FaBox />,
      title: "Hassle-Free 3D Scanning",
      description: "We scan properties for you just schedule an appointment, and we handle the rest."
    },
    {
      icon: <FaLink />,
      title: "Easy Website Integration",
      description: "Copy-paste our auto-generated embed code to showcase your properties instantly in 3D."
    },
    {
      icon: <FaChartBar />,
      title: "Analytics & Engagement Tracking",
      description: "See how visitors interact with your virtual property tours in real time."
    },
    {
      icon: <FaVrCardboard />,
      title: "Mobile & Immersive Ready",
      description: "Your 3D tours work seamlessly on desktop, mobile, and VR headsets."
    },
  ];

  return (
    <>
      {/* Hero section */}
      <section className=''>
        <div>
          <div><MainNavBar /></div>

          <div className='flex flex-col w-full justify-start items-center h-[100dvh] pt-28 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white'>

            <div class="absolute top-[250px] -left-10 w-[750px] h-[550px] bg-cyan-200 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div class="absolute bottom-1 right-[300px] w-[750px] h-[550px] bg-blue-300 rounded-full opacity-40 translate-x-1/2 blur-3xl"></div>
            {/* <div class="absolute top-1/3 left-0 w-24 h-24 bg-cyan-600 rounded-full opacity-20 -translate-x-1/3 blur-xl"></div> */}



            <h1 className=' relative z-10 font-bold lg:text-5xl text-3xl px-5 text-center'>Unlock the Power of 3D for Your <br /> Real Estate Listings</h1>
            <p className='relative z-10 text-sm text-gray-500 pt-7 px-6 lg:mx-48 pb-2 text-center'>Give potential buyers a fully immersive experience with interactive 3D property views.
              We handle the scanning then you get an embed-ready virtual tour to showcase properties on any website.</p>
            <div className=' relative z-10 flex justify-center items-center gap-x-3 pb-5 mx-10'>
              <h1 className='text-xs md:text-sm text-gray-500 font-bold'>Boost Engagement</h1>
              <div className='h-4 w-[2px] bg-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)]'></div>
              <h1 className='text-xs md:text-sm text-gray-500 font-bold'>Increase Sales</h1>
              <div className='h-4 w-[2px] bg-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)]'></div>
              <h1 className='text-xs md:text-sm text-gray-500 font-bold'>Stand Out in the Market</h1>

            </div>

            <div className='relative z-10 flex gap-x-5 justify-center items-center'>
              <button className='text-xs px-5 bg-Btn text-white py-3 rounded-lg'>
                Get start for free
              </button>
              <div className='flex justify-center items-center gap-x-2'>
                <div className='h-10 w-10 border border-[#13c6fe] rounded-full flex justify-center items-center'>
                  <IoIosPlay className='text-[#13c6fe]' />
                </div>
                <p className='text-sm font-semibold text-[#13c6fe]'>How it works</p>
              </div>
            </div>

            <div className=' relative z-10 lg:pt-20 lg:px-20 pt-10 px-5 flex justify-center'>
              <img src={AdminPNG} alt="Admin Dashboard" className="max-w-full h-auto lg:max-w-3xl" />
            </div>

          </div>
        </div>
      </section>


      {/* Why choose Us section */}
      <section className="py-12 bg-gray-100 overflow-hidden lg:pt-24">
        <h2 className="lg:text-2xl text-xl font-bold mb-16 text-center px-3">Why Do Realtors & Agencies Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

      </section>


      {/* How it works Section */}
      <section className='min-h-screen p-10 relative overflow-hidden'>


      <div class="absolute top-[450px] left-60 w-[750px] h-[550px] bg-cyan-200 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div class="absolute bottom-1 right-[300px] w-[750px] h-[550px] bg-blue-300 rounded-full opacity-40 translate-x-1/2 blur-3xl"></div>



        <h2 className="relative z-10 lg:text-2xl text-xl font-bold mb-16 text-center px-3 pt-7">How It Works</h2>
        <div className='relative z-10 flex flex-col justify-center items-center gap-y-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-24 max-w-4xl mx-auto'>
            <div className=''>
              <img src={SCAN} alt="" className='rounded-3xl' />
            </div>

            <div className='flex flex-col justify-center items-start'>
              <h1 className='font-bold text-2xl '>We Scan Your Property</h1>
              <p className='text-gray-500 text-xs pt-4 font-semibold'>Our experts capture stunning 3D models of your listing.</p>
              <div>
                <button className='text-xs px-5 bg-Btn text-white py-3 rounded-lg mt-3'>Get started foe Free</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-4xl mx-auto">
            <div className=" order-1 md:order-2">
              <img src={PROCESS} alt="" className='rounded-3xl' />
            </div>

            <div className="flex flex-col justify-center items-start order-2 md:order-1">
              <h1 className="font-bold text-2xl">Powerful Processing</h1>
              <p className="text-gray-500 text-xs pt-4 font-semibold">
                Our backend optimizes and hosts your model.
              </p>
              <div>
                <button className="text-xs px-5 bg-Btn text-white py-3 rounded-lg mt-3">
                  Get started for Free
                </button>
              </div>
            </div>
          </div>


          <div className='grid grid-cols-1 md:grid-cols-2 gap-24 max-w-4xl mx-auto'>
            <div className=''>
              <img src={EMBED} alt="" className='rounded-3xl' />
            </div>

            <div className='flex flex-col justify-center items-start'>
              <h1 className='font-bold text-2xl '>Embed & Share Anywhere</h1>
              <p className='text-gray-500 text-xs pt-4 font-semibold'>Simply copy your unique code and paste it on your website.</p>
              <div>
                <button className='text-xs px-5 bg-Btn text-white py-3 rounded-lg mt-3'>Get started foe Free</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Integration section */}
      <section className='my-10 overflow-hidden'>
        <div className='bg-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)]  lg:mx-20 rounded-[30px] p-7 lg:p-20'>
          <div className='bg-white w-full h-full rounded-[30px] flex'>
            <div className='flex justify-center  flex-col lg:flex-row items-center gap-y-5 pb-5 gap-x-5'>
              <div className='flex flex-col justify-start items-start pt-12 lg:pl-12 pl-4 pr-4'>
                <h1 className='font-bold text-3xl'>Seamlessly Integrate With All Your Favorite Tools</h1>
                <p className='text-gray-400 text-sm pt-4 pb-2'>
                  Connect SpatiaScape to a wide range of popular applications. This integration enables you to access
                  valuable insights and metrics from a single dashboard. By integrating your tools, you can gain deeper
                  understanding of your customers behavior
                </p>
                <div>
                  <button className='text-xs px-5 bg-Btn text-white py-3 rounded-lg mt-3'>Get started foe Free</button>
                </div>
              </div>

              <div className='lg:pr-5 px-4'>
                <img src={TOOLS} alt="" className="max-w-full h-auto lg:max-w-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;