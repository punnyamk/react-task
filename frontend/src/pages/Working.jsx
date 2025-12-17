import React, { useState } from "react";

const steps = [
  {
    id: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  { id: "02", title: "Research and Strategy Development" },
  { id: "03", title: "Implementation" },
  { id: "04", title: "Monitoring and Optimization" },
  { id: "05", title: "Reporting and Communication" },
  { id: "06", title: "Continual Improvement" },
];

function Working() {
  const [active, setActive] = useState("01");

  return (
    <section className="px-5 md:px-10 py-20 bg-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12 max-w-6xl mx-auto">
        <span className="bg-lime-300 px-3 text-3xl py-1 rounded-md font-medium w-fit">
          Our Working Process
        </span>
        <p className="text-gray-600 ml-4 max-w-70 text-[18px]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-6 max-w-6xl mx-auto">
        {steps.map((step) => {
          const isActive = active === step.id;

          return (
            <div
              key={step.id}
              className={`rounded-3xl border-2 transition-all duration-300 ${
                isActive
                  ? "bg-lime-300 border-black"
                  : "bg-white border-black"
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setActive(isActive ? null : step.id)}
                className="w-full flex items-center justify-between 
                           px-4 sm:px-8 py-6 text-left"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl sm:text-3xl font-semibold">
                    {step.id}
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {step.title}
                  </span>
                </div>

                <span className="w-9 h-9 sm:w-10 sm:h-10 
                                 flex items-center justify-center 
                                 rounded-full border border-black 
                                 text-xl font-bold">
                  {isActive ? "−" : "+"}
                </span>
              </button>

              {/* Content */}
              {isActive && step.content && (
                <>
                  <div className="border-t border-black mx-4 sm:mx-8"></div>
                  <p className="px-4 sm:px-8 py-6 text-sm max-w-4xl">
                    {step.content}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Working;
