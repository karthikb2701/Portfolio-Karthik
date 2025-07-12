// components/AboutTabs.tsx
"use client";
import React, { useState } from "react";

const tabs = ["Skills", "Education", "Certifications"];

const data = {
  Skills: {
    "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "PHP"],
    "DevOps & Tools": ["Azure DevOps", "Git", "JIRA"],
    "Database": ["MongoDB", "MySQL"],
    "Soft Skills": ["Agile", "Team Collaboration", "Problem Solving", "Communication"]
  },
  Education: [
    {
      degree: "MSc IT",
      institution: "Your University Name",
      year: "202x – 202x",
    },
    {
      degree: "BSc Computer Science",
      institution: "Your College Name",
      year: "20xx – 20xx",
    },
  ],
  Certifications: [
    "Azure Fundamentals (AZ-900)",
    "Full-Stack Web Development Bootcamp",
    "Agile with Atlassian Jira"
  ]
};

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("Skills");

  return (

  <section>
      <div className="max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 mx-2 rounded-full font-medium border 
                ${activeTab === tab 
                  ? "bg-blue-600 text-white border-blue-600" 
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "Skills" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(data.Skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {items.map(skill => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Education" && (
            <ul className="space-y-4">
              {data.Education.map((edu, idx) => (
                <li key={idx}>
                  <p className="text-lg font-medium">{edu.degree}</p>
                  <p className="text-gray-600">{edu.institution} | {edu.year}</p>
                </li>
              ))}
            </ul>
          )}

          {activeTab === "Certifications" && (
            <ul className="list-disc list-inside space-y-2">
              {data.Certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
