import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Quote  ,ArrowLeftIcon, ArrowRightIcon} from "lucide-react";

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
     name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
     name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
  text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
     name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // We will use custom Lucide buttons instead
    adaptiveHeight: true,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-600 rounded-full hover:bg-lime-400 transition-colors slick-active:bg-lime-400" />
    ),
  };

  return (
    <>
    <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-center gap-6">
        <h2 className="text-3xl font-bold text-black bg-lime-400 px-3 py-1 rounded-md">
          Testimonials
        </h2>
        <p className="max-w-md text-gray-900">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>
    <div className="bg-gray-900 text-white py-16 px-4 md:px-20">
      {/* Header */}
      

      {/* Slider Container */}
      <div className="max-w-5xl mx-auto relative group">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="outline-none px-2">
              <div className="relative border border-lime-400 rounded-[40px] p-8 md:p-12 mb-8 bg-gray-900">
                <p className="text-lg md:text-xl leading-relaxed relative z-10">
                  "{t.text}"
                </p>
                {/* Speech Bubble Arrow */}
                <div className="absolute -bottom-4 left-12 w-8 h-8 bg-gray-900 border-r border-b border-lime-400 rotate-45"></div>
              </div>
              
              <div className="ml-10">
                <p className="font-bold text-lime-400 text-lg">{t.name}</p>
                <p className="text-gray-400">{t.title}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Lucide Navigation Controls */}
        <div className="flex justify-center items-center gap-30 mt-12">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className=" p-2 rounded-full  hover:bg-lime-400 hover:text-black hover:border-gray-400 transition-all mr-16"
            aria-label="Previous slide"
          >
            {/* <ChevronLeft size={24} /> */}
            <ArrowLeftIcon size={24} />
          </button>
          
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="p-2  hover:bg-lime-400 rounded-full  hover:text-black hover:border-gray-400 transition-all ml-16"
            aria-label="Next slide"
          >
           <ArrowRightIcon size={24} />
          </button>
        </div>
      </div>

      {/* Fallback CSS for when Slick CSS is removed */}
      <style jsx global>{`
        .slick-slider { position: relative; display: block; box-sizing: border-box; }
        .slick-list { position: relative; display: block; overflow: hidden; margin: 0; padding: 0; }
        .slick-track { position: relative; top: 0; left: 0; display: flex; }
        .slick-slide { height: 100%; min-height: 1px; }
        .slick-dots .slick-active div { background-color: #bef264 !important; } /* lime-400 */
        
      `}</style>
    </div>
    </>
  );
}