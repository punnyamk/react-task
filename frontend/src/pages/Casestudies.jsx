import React from "react";
import case11 from "../assets/case11.png";

function Casestudies() {
  return (
    <section className="px-5 md:px-10 py-20 bg-white">

      {/* CTA Card */}
      <div
        className="bg-[#F3F3F3] rounded-3xl 
                   max-w-7xl mx-auto 
                   p-6 md:p-10 
                   flex flex-col md:flex-row 
                   items-center justify-between 
                   gap-10 mb-24"
      >
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 pb-5">
            Let’s make things happen
          </h2>
          <p className="text-gray-900 mb-6 text-2xl md:text-2xl">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-xl text-sm hover:bg-gray-800 transition">
            Get your free proposal
          </button>
        </div>

        
        <div className="hidden md:block">
          <img
            src={case11}
            alt="Illustration"
            className="w-74 lg:w-94"
          />
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12 max-w-7xl mx-auto">
        <span className="inline-block bg-lime-300 px-3 py-1 rounded-md text-2xl font-medium w-fit ml-15">
          Case Studies
        </span>
        <p className="text-gray-600 max-w-100 text-[15px]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      {/* Case Studies Card */}
      <div
        className="bg-black rounded-3xl 
                   p-6 md:p-20 
                   text-white 
                   grid grid-cols-1 md:grid-cols-3 
                   gap-10 
                   relative 
                   max-w-6xl mx-auto pt-10 pb-10"
      >

        {/* Divider Lines */}
        <div className="hidden md:block absolute inset-y-10 left-1/3 w-px bg-gray-700"></div>
        <div className="hidden md:block absolute inset-y-10 left-2/3 w-px bg-gray-700"></div>

        {/* Case 1 */}
        <div>
          <p className="text-xl text-gray-300 mb-6">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <span className="flex items-center gap-2 text-lime-300 text-sm cursor-pointer">
            Learn more <span className="text-lg">↗</span>
          </span>
        </div>

        {/* Case 2 */}
        <div>
          <p className="text-xl text-gray-300 mb-6">
            For a B2B software company, we developed an SEO strategy that resulted
            in a first page ranking for key keywords and a 200% increase in
            organic traffic.
          </p>
          <span className="flex items-center gap-2 text-lime-300 text-sm cursor-pointer">
            Learn more <span className="text-lg">↗</span>
          </span>
        </div>

        {/* Case 3 */}
        <div>
          <p className="text-xl text-gray-300 mb-6">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <span className="flex items-center gap-2 text-lime-300 text-sm cursor-pointer">
            Learn more <span className="text-lg">↗</span>
          </span>
        </div>

      </div>
    </section>
  );
}

export default Casestudies;
