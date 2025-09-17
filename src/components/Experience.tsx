import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Java Developer',
      company: 'OEE Intellisuite',
      location: 'La Crosse, WI',
      period: 'Apr 2023 - Present',
    },
     {
    title: 'Full Stack Java Developer',
    company: 'Maryland Treatment Centers',
    location: 'Maryland, USA',
    period: 'Jun 2021 - Mar 2023',
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Big Lots',
    location: 'Columbus, OH',
    period: 'Dec 2019 - Jun 2021',
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Office Depot',
    location: 'Boca Raton, FL',
    period: 'Mar 2018 - Nov 2019',
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Tvisha Technologies',
    location: 'Hyderabad, IN',
    period: 'Mar 2017 - Feb 2018',
  }
];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;