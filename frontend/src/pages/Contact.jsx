import React from "react";
import contact from '../assets/contact.png'
export default function Contact() {
  return (
    <section className="py-12 px-4 md:px-20 max-w-7xl mx-auto">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <h2 className="text-3xl font-medium text-black bg-lime-400 px-2 rounded-lg">
          Contact Us
        </h2>
        <p className="max-w-xs text-gray-700 text-sm md:text-base">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      {/* 2. Form Container (The Gray Box) */}
      <div className="relative bg-[#f3f3f3] rounded-[45px] p-8 md:p-14 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          
          {/* Form Side */}
          <form className="space-y-6">
            {/* Radio Selection */}
            <div className="flex gap-8 mb-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="type" 
                  defaultChecked 
                  className="w-6 h-6 accent-lime-400 border-gray-300"
                />
                <span className="text-lg">Say Hi</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="type" 
                  className="w-6 h-6 accent-lime-400 border-gray-300"
                />
                <span className="text-lg">Get a Quote</span>
              </label>
            </div>

            {/* Input Fields */}
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-5 py-4 rounded-2xl border border-black bg-white focus:outline-lime-400 transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email*</label>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-5 py-4 rounded-2xl border border-black bg-white focus:outline-lime-400 transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message*</label>
              <textarea
                placeholder="Message"
                rows="5"
                required
                className="w-full px-5 py-4 rounded-2xl border border-black bg-white focus:outline-lime-400 transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-[#191a23] text-white rounded-2xl font-medium hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Decorative Side (Hidden on Mobile) */}
          <div className="">
            {/* You can replace this placeholder with an actual SVG or Image */}
            <div className=" w-280 ml-40">
               <img src={contact} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}