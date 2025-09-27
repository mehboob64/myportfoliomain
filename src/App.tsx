import React from 'react';
import { Mail, Phone, Github, Linkedin, Globe, MapPin, Calendar, Award, Code, Briefcase, GraduationCap, Star, ExternalLink } from 'lucide-react';

function App() {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 82 },
    { name: 'MongoDB', level: 80 },
    { name: 'Express.js', level: 83 },
    { name: 'MySQL', level: 78 }
  ];

  const projects = [
    {
      title: '7 Days Weather App',
      tech: 'React, OpenWeatherMap API',
      description: '7-day forecast with live API and error handling',
      icon: '🌤️'
    },
    {
      title: 'E-Commerce Site',
      tech: 'MERN Stack',
      description: 'Auth, cart, order flow, full-stack integration',
      icon: '🛒'
    },
    {
      title: 'Portfolio Website',
      tech: 'HTML/CSS/JS',
      description: 'Animated responsive portfolio',
      icon: '💼'
    },
    {
      title: 'Resume Parser',
      tech: 'Python, Flask, spaCy',
      description: 'NLP-based resume extractor',
      icon: '📄'
    }
  ];

  const certifications = [
    'Full Stack Developer – CraveDigi',
    'DSA in Java',
    'Web Dev Course'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Floating 3D Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg rotate-45 blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-md animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-lg rotate-12 blur-lg animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            {/* Profile Picture Frame */}
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-teal-400 to-purple-400 rounded-full p-1 animate-pulse">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-xl">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl">
                    MB
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Mahaboob Basha
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Aspiring Software Development Engineer
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:onlymahaboob64@gmail.com" className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
              <span>Email</span>
            </a>
            <a href="https://wa.me/+918919478895" className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Phone className="w-5 h-5 text-green-400 group-hover:text-green-300" />
              <span>WhatsApp</span>
            </a>
            <a href="https://github.com/mehboob64" className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-300" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mahaboob-basha-3101942bb/" className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Linkedin className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-[1.02]">
              <p className="text-lg leading-relaxed text-gray-300">
                Enthusiastic Computer Science undergraduate with practical experience in full-stack development using the MERN stack. 
                Skilled in Java, Python, and JavaScript with a strong foundation in OOP, RESTful APIs, and agile methodologies. 
                Proven ability to build scalable, user-focused applications through internships and self-driven projects.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white group-hover:text-teal-300 transition-colors">{skill.name}</h3>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-purple-400 mb-3 font-medium">{project.tech}</p>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {project.description}
                </p>
                <div className="mt-4">
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">Full Stack Intern</h3>
                  <p className="text-blue-400 font-medium mb-2">CraveDigi Advisors OPC Pvt Ltd</p>
                  <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Aug 2024 – Feb 2025
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      <span>Developed 5+ scalable MERN stack features for production-ready web apps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      <span>Built REST APIs, integrated dynamic frontends using React</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      <span>Refactored components to improve performance and reduced frontend bugs by 25%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">B.Tech – Computer Science Engineering</h3>
                  <p className="text-green-400 font-medium mb-2">Mohan Babu University, Tirupati</p>
                  <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Sep 2022 – Oct 2026
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">CGPA:</span> 8.7 | 
                    <span className="text-sm ml-2">Relevant Coursework: Data Structures, Algorithms, Operating Systems, DBMS</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
                  <span className="text-white group-hover:text-orange-100 transition-colors font-medium">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 inline-block">
            <p className="text-gray-400 text-sm">
              Languages: English, Hindi, Telugu, Urdu | Hobbies: Chess, Football, Guitar, Coding
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;