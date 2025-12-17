import React from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';
import footer from '../assets/footer.png'


function Footer() {
  return (
    <footer className="px-4 md:px-20 pt-10 pb-8 bg-white">
      {/* Main Dark Container */}
      <div className="bg-[#191a23] text-white rounded-t-[45px] p-8 md:p-14">
        
        {/* Top Section: Logo, Nav, and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className=" p-1 rounded-sm">
              <img src={footer} alt="" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Positivus</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm underline underline-offset-4 decoration-gray-500">
            <a href="#" className="hover:text-lime-400">About us</a>
            <a href="#" className="hover:text-lime-400">Services</a>
            <a href="#" className="hover:text-lime-400">Use Cases</a>
            <a href="#" className="hover:text-lime-400">Pricing</a>
            <a href="#" className="hover:text-lime-400">Blog</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="bg-white text-[#191a23] p-2 rounded-full hover:bg-lime-400 transition-colors">
              <Linkedin size={18} fill="currentColor" stroke="none" />
            </a>
            <a href="#" className="bg-white text-[#191a23] p-2 rounded-full hover:bg-lime-400 transition-colors">
              <Facebook size={18} fill="currentColor" stroke="none" />
            </a>
            <a href="#" className="bg-white text-[#191a23] p-2 rounded-full hover:bg-lime-400 transition-colors">
              <Twitter size={18} fill="currentColor" stroke="none" />
            </a>
          </div>
        </div>

        {/* Middle Section: Contact and Subscribe */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="bg-lime-400 text-black px-2 py-1 rounded-md inline-block font-medium">
              Contact us:
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
            </div>
          </div>

          {/* Subscribe Box */}
          <div className="bg-[#292a32] p-13 rounded-[14px] flex flex-col md:flex-row gap-4 flex-grow max-w-xl">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border border-white rounded-xl px-6 py-2 flex-grow outline-none focus:border-lime-400"
            />
            <button className="bg-lime-400 text-black px-6 py-2 rounded-xl font-medium hover:bg-white transition-colors">
              Subscribe to news
            </button>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row gap-4 items-center md:items-start text-sm text-gray-400">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;