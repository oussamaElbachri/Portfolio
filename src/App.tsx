import { ArrowRight, Mail, Phone, MapPin, ChartNoAxesCombined, Github, Linkedin, ExternalLink, BrainCircuit, Code2, HardHat, Database, Brain, Zap, Users, Target, TrendingUp, Calendar, Building } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { SiPython, SiMysql, SiC, SiJavascript } from "react-icons/si";

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'Full-Stack Development', icon: Code2 },
    { name: 'Digital Strategy', icon: Target },
    { name: 'Data Analytics', icon: Database },
    { name: 'Process Automation', icon: Zap },
    { name: 'AI/ML Fundamentals', icon: Brain },
    { name: 'Lean six sigma ', icon: ChartNoAxesCombined },
    { name: 'Team Collaboration', icon: Users },
    { name: 'Problem Solving', icon: TrendingUp }
  ];

  const experience = [
    {
      title: "Digital Transformation Engineering Intern",
      company: "CETIM Maroc développement",
      period: "February-August 2025",
      description: "Developed a digitalized tracking system for the fatigue testing laboratory accessible via PCs on the local network. The system provides a web-based interface containing ordered machine cards, indicating tests status and specimen informations."
    },
    {
      title: "Quality control engineering Intern",
      company: "Sabca Maroc",
      period: "September 2024",
      description: "Worked on the quality inspection plan for the fuselage of the PC-12 aircraft in the Pilatus project using the instruction sheets."
    },
    {
      title: "Electrical engineering technician Intern",
      company: "Managem Group, CTT Bou-Azzer",
      period: "April-June 2021",
      description: "Study and design of the low voltage electrical installation using Caneco-BT."
    }
  ];

  const projects = [
    {
      title: "IoT Weather station",
      description: "An embedded system collects, processes, and displays weather data. By using temperature, humidity, air quality, and light sensors connected to an Arduino Uno card, we were able to accurately measure and display the parameters affecting weather conditions.",
      tech: ["Python/Django", "Arduino", "MySQL", "HTML/CSS", "Javascript/Node-Red"],
      impact: "",
      link : "https://www.linkedin.com/posts/oussama-el-bachri_fier-de-partager-un-projet-qui-a-marqu%C3%A9-activity-7270074357727555595-lWr0?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdti7kBHS9z1KrYIOYNF9VDV3f-6Qq4_i0"
    },
    {
      title: "AI-powred air trajectory correction system",
      description: "intelligent navigation IoT system integrating multiple sensors microcontroller, Kalman filter, Proteus, and an AI model trained with TensorFlow for optimal accuracy.",
      tech: ["Python", "TanserFlow", "Arduino", "Proteus"],
      impact: ""
    },
    {
      title: "Design and Simulation of a Turbojet Engine",
      description: "The theoretical study to determine the dimensions, optimize the performance, ensure reliability, and efficiency. Designed using CATIA V5 then simulated with ANSYS.",
      tech: ["Catia V5", "Ansys fluent", "SolidWorks"],
      impact: "",
      link : "https://www.linkedin.com/posts/oussama-el-bachri_je-suis-ravi-de-partager-avec-vous-le-projet-activity-7270081948268613634-JEAs?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdti7kBHS9z1KrYIOYNF9VDV3f-6Qq4_i0"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-violet-950 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white"><button onClick={() => scrollToSection('hero')}><span className='text-blue-200'>Hi, I am </span> Oussama EL BACHRI</button></div>
            <div className="hidden md:flex space-x-8 ">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-blue-300 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-300 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-white hover:text-blue-300 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-white hover:text-blue-300 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-blue-300 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-300 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-10xl font-bold text-slate-900 mb-6">
                Aspiring
                <span> </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Engineer
                </span>
              </h1>
              <p className="text-xl md:text-1xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                I have a dgree in aeronautical engineering, but I like to code and learn new things.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center px-8 py-4 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-900 text-blue-600 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300 font-medium"
                >
                  Let's Connect
                </button>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in">
            <div className='h-100 w-80 py-10'>
                <img className = "text-center rounded-md shadow-3xl" src = "3.jpg"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation */}
      <section id="animation" className="pt-10 pb-10 text-xs px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <TypeAnimation className='text-xs md:text-xs mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
                      sequence={[
                        ' Digital Transformation',
                        1000,
                        ' Digital Transformation, IoT',
                        1000,
                        ' Digital Transformation, IoT, industrial & Aeronautical engineering',
                        3000,
                        ' Digital Transformation, IoT',
                        3000,
                        ' Digital Transformation',
                        3000,
                      ]}
                      speed={30}
                      style={{ fontSize: '2em' }}
                      repeat={Infinity}
                    />
              </div>
          </div>
        </section>


      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                As a recent aeronautical engineering graduate, I'm passionate about the intersection of technology and business. Through strategic internships, self-training and school courses, I've gained hands-on experience in digital transformation, data engineering, process automation and industrial engineering.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                My internship experiences have exposed me to enterprise-scale digital solutions, waterfall development practices, and cross-functional collaboration. I'm eager to apply my technical skills and fresh perspective to contribute in shaping the future.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-slate-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Graduated this year</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Building className="h-5 w-5 mr-2 text-blue-600" />
                  <span>5 Internships Completed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Competencies</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-2 mr-4">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Strategic Planning</h4>
                    <p className="text-slate-600">Developed digital transformation strategies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-600 rounded-full p-2 mr-4">
                    <HardHat className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Industrial engineering</h4>
                    <p className="text-slate-600">Optimising processes for aeronautical and automotive industries.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 rounded-full p-2 mr-4">
                    <BrainCircuit className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Automation & Data engineering</h4>
                    <p className="text-slate-600">Exploring new tools in business automation and building experience with data solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl max-w-2xl mx-auto">
              A comprehensive skill set spanning strategy, technology, and leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-gray-800 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center ">
                    <div className="rounded-lg p-3 mr-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='text-center mb-12 py-25'>
            <h2 className='text-4xl font-bold'>programming languages</h2>
            </div>
            <div className="-mt-20 grid md:grid-cols-4 gap-4">
                <div className="flex items-center">
                    <div className="rounded-lg p-3 mr-5">
                      <SiPython className="h-30 w-40" />
                      </div>
                      </div>
                    <div className="flex items-center">
                    <div className="rounded-lg p-3 mr-5">
                      <SiMysql className="h-30 w-50" />
                      </div>
              </div>
              <div className="flex items-center">
                    <div className="rounded-lg p-3 mr-5">
                      <SiC className="h-30 w-40" />
                      </div>
              </div>
              <div className="flex items-center">
                    <div className="rounded-lg p-3 mr-5">
                      <SiJavascript className="h-30 w-60" />
                      </div>
              </div>
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-150">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Internship experiences that shaped my understanding of engineering.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {experience.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="text-sm text-blue-600 font-medium mb-2">{exp.period}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                    <div className="text-slate-600 mb-3">{exp.company}</div>
                    <p className="text-slate-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Academic, group and personal projects demonstrating technical skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-10">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed h-50 w-90">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                      <span className="font-medium text-green-600">{project.impact}</span>
                    </div>
                    <a href={project.link} target='_blank'>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              I'm excited to start my career; Let's explore opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-lg p-3 mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">oussamaelbachri1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-teal-100 rounded-lg p-3 mr-4">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600">+212 615 941 211</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 rounded-lg p-3 mr-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Location</h3>
                  <p className="text-slate-600">Ouarzazate, Morocco</p>
                </div>
              </div>
              
            
          </div>
          <div className="py-10 px-60 grid md:grid-cols-2 gap-50">
              <div className='flex items-center'>
                <a href="https://github.com/oussamaElbachri" target="_blank" className="bg-gray-100 rounded-lg p-3 mr-4">
                 <Github className="h-6 w-6 text-slate-600" />
                </a>
                <div>
                  <a href="https://github.com/oussamaElbachri" target="_blank" className="text-lg font-semibold text-slate-900">GitHub</a>
                  <p className="text-slate-600">oussamaElbachri</p>
                </div>
              </div>

              <div className='flex items-center'>
                <a href="https://www.linkedin.com/in/oussama-el-bachri/" target="_blank" className="bg-blue-500 rounded-lg p-3 mr-4">
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <div>
                  <a href="https://www.linkedin.com/in/oussama-el-bachri/" target="_blank" className="text-lg font-semibold text-slate-900">LinkedIn</a>
                  <p className="text-slate-600">OUSSAMA EL BACHRI</p>
                </div>
              
            
            </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">© 2025 Oussama EL BACHRI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;