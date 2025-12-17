import React from "react";
import Illustration1 from "../assets/Illustration1.png";
import Illustration2 from "../assets/Illustration2.png";
import Illustration3 from "../assets/Illustration3.png";
import Illustration4 from "../assets/Illustration4.png";
import Illustration5 from "../assets/Illustration5.png";
import Illustration6 from "../assets/Illustration6.png";
function Service() {
  return (
    <section className="px-5 md:px-10 py-16 bg-white">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12 max-w-7xl mx-auto">
        <span className="inline-block bg-[#B9FF66] px-3 py-1 rounded-md text-xl font-medium w-fit">
          Services
        </span>
        <p className="text-gray-900 max-w-2xl text-[16px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-8 W-150 mx-auto ml-20">

        {/* Card 1 */}
        <div className="border bg-[#F3F3F3] border-black rounded-3xl p-6 md:p-8 h-70
                        flex justify-between items-center 
                        max-w-xl mx-auto w-full border-b-6 ">
          <div>
            <h3 className="font-semibold text-lg  w-50 mb-17 ">
              <span className="bg-[#B9FF66] px-2 text-2xl rounded gap-2">
                Search engine optimization
              </span>
            </h3>
            <div className="flex items-center gap-2 text-sm cursor-pointer">
              <span className="w-6 h-6 p-1 flex items-center justify-center bg-black text-[#B9FF66] rounded-full">
                ↗
              </span>
              Learn more
            </div>
          </div>
          <div className="hidden sm:block">
            <img src={Illustration1} alt="SEO" className="w-60 md:w-56" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-black bg-[#B9FF66] rounded-3xl p-6  md:p-8 
                        flex justify-between items-center 
                        max-w-xl mx-auto w-full border-b-6">
          <div>
            <h3 className="font-semibold text-lg mb-15 w-30">
              <span className="bg-white px-2 rounded">
                Pay-per-click advertising
              </span>
            </h3>
            <div className="flex items-center gap-2 text-sm cursor-pointer">
              <span className="w-6 h-6 flex items-center justify-center bg-black text-[#B9FF66] rounded-full">
                ↗
              </span>
              Learn more
            </div>
          </div>
          <div className="hidden sm:block">
            <img src={Illustration2} alt="PPC" className="w-60 md:w-56" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="border border-black bg-black text-white rounded-3xl p-6 md:p-8 
                        flex justify-between items-center 
                        max-w-xl mx-auto w-full border-b-6">
          <div>
            <h3 className="font-semibold text-lg mb-17 w-50">
              <span className="bg-white text-black px-2 rounded">
                Social Media Marketing
              </span>
            </h3>
            <div className="flex items-center gap-2 text-sm cursor-pointer">
              <span className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full">
                ↗
              </span>
              Learn more
            </div>
          </div>
          <div className="hidden sm:block">
            <img src={Illustration3} alt="Social Media" className="w-60 md:w-56" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="border border-black rounded-3xl p-6 md:p-8 
                        flex justify-between items-center 
                        max-w-xl mx-auto w-full border-b-6">
          <div>
            <h3 className="font-semibold text-lg mb-17">
              <span className="bg-[#B9FF66] px-2 rounded">
                Email Marketing
              </span>
            </h3>
            <div className="flex items-center gap-2 text-sm cursor-pointer">
              <span className="w-6 h-6 flex items-center justify-center bg-black text-[#B9FF66] rounded-full">
                ↗
              </span>
              Learn more
            </div>
          </div>
          <div className="hidden sm:block">
            <img src={Illustration4} alt="Email" className="w-60 md:w-56" />
          </div>
        </div>

        {/* Card 5 */}
        <div className="border border-black bg-[#B9FF66] rounded-3xl p-6 md:p-8 
                        flex justify-between items-center 
                        max-w-xl mx-auto w-full border-b-6 ">
          <div>
            <h3 className="font-semibold text-lg mb-6 mb-17">
              <span className="bg-white px-2 rounded">
                Content Creation
              </span>
            </h3>
            <div className="flex items-center gap-2 text-sm cursor-pointer">
              <span className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full">
                ↗
              </span>
              Learn more
            </div>
          </div>
          <div className="hidden sm:block">
            <img src={Illustration5} alt="Content" className="w-60 md:w-56" />
          </div>
        </div>

        {/* Card 6 */}
        <div className="border border-black bg-black text-white rounded-3xl p-6 md:p-8 
                        flex justify-between items-center 
                        max-w-xl mx-auto w-full border-b-6">
          <div>
            <h3 className="font-semibold text-lg mb-6 mb-17">
              <span className="bg-[#B9FF66] text-[#B9FF66] px-2 rounded">
                Analytics and Tracking
              </span>
            </h3>
            <div className="flex items-center gap-2 text-sm cursor-pointer">
              <span className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full">
                ↗
              </span>
              Learn more
            </div>
          </div>
          <div className="hidden sm:block">
            <img src={Illustration6} alt="Analytics" className="w-60 md:w-36" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Service;
