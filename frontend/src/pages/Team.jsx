import React from "react";
import Picture from "../assets/Picture.png";
import Picture1 from "../assets/Picture1.png";
import Picture2 from "../assets/Picture2.png";
import Picture3 from "../assets/Picture3.png";
import Picture4 from "../assets/Picture4.png";
import Picture5 from "../assets/Picture5.png";
import linkdin from '../assets/linkdin.png'

const team = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    img: Picture,
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
    img: Picture1,
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    img: Picture2,
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
    img: Picture3,
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.",
    img: Picture4,
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    desc: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.",
    img: Picture5,
  },
];

function Team() {
  return (
    <section className="px-22 py-20 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <span className="bg-lime-300 px-3 py-1 rounded-md font-medium text-xl w-fit">
          Team
        </span>
        <p className="text-gray-800 text-[19px] max-w-xl">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative border-2 border-black rounded-3xl p-6 border-b-4"
          >
            {/* LinkedIn */}
           <img src={linkdin} alt=""  className="pl-80"/>

            {/* Avatar + Name + Role */}
            <div className="flex items-center gap-4 mb-4">
              {/* Avatar */}
              <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <div>
                <h3 className="text-lg font-semibold text-black">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 mb-4"></div>

            {/* Description */}
            <p className="text-[17px] text-gray-900 mr-5">
              {member.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-end mt-10">
        <button className="bg-black text-white px-6 py-3 rounded-xl text-sm hover:bg-gray-800 transition">
          See all team
        </button>
      </div>
    </section>
  );
}

export default Team;
