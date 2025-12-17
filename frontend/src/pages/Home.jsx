import React from "react";
import Logotypes from '../assets/Logotypes.png'
import Illustration from '../assets/Illustration.png'
import new11 from '../assets/new11.png'
import new12 from '../assets/new12.png'
import new13 from '../assets/new13.png'
import new14 from '../assets/new14.png'
import new15 from '../assets/new15.png'
import new16 from '../assets/new16.png'
function Home() {
  return (
    <section className="px-10 py-16 bg-white ">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 ml-30">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight ">
            Navigating the <br />
            digital landscape <br />
            for success
          </h1>

          <p className="mt-5 text-gray-600 max-w-md">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl text-sm hover:bg-gray-800 transition">
            Book a consultation
          </button>
        </div>

        {/* Right Illustration Placeholder */}
        <div className="flex justify-center md:justify-end mr-30">
          <img
            src={Illustration}
            alt="Marketing Illustration"
            className="max-w-md w-full"
          />
        </div>
      </div>

      {/* Brand Logos */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 grayscale opacity-80">
        
      <img src={new16} alt="" />
      <img src={new15} alt="" />
      <img src={new14} alt="" />
      <img src={new13} alt="" />
      <img src={new12} alt="" />
      <img src={new11} alt="" />
         
      </div>
    </section>
  );
}

export default Home;
