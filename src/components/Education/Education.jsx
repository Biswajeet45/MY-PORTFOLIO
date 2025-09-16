import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center mb-24 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-16 h-16 rounded-full flex justify-center items-center z-20">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "sm:pr-12 sm:ml-0 sm:mr-auto"
                  : "sm:pl-12 sm:mr-0 sm:ml-auto"
              }`}
            >
              {/* Degree, School, and Date */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-md sm:text-lg text-gray-300">{edu.school}</h4>
              <p className="text-sm text-gray-500">{edu.date}</p>

              {/* Grade */}
              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>

              {/* Description */}
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
