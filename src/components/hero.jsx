// import React from 'react';
// import profilePic from '../assets/pic.png';
// import resume from '../assets/resume.pdf';
// import { FaLaptopCode, FaMobileAlt, FaChartBar } from 'react-icons/fa';

// function HeroSection({ isDarkMode }) {
//   const sectionBg = isDarkMode ? "bg-gradient-to-r from-gray-950 to-gray-950" : "bg-gradient-to-r from-indigo-50 to-purple-100";


//   const textColor = isDarkMode ? "text-gray-200" : "text-gray-800";
//   const headingColor = isDarkMode ? "text-white" : "text-gray-900";
//   const spanColor = isDarkMode ? "text-teal-400" : "text-purple-600";
//   const paraColor = isDarkMode ? "text-gray-400" : "text-gray-600";
//   const resumeBtnColor = isDarkMode ? "text-gray-300" : "text-gray-700";
//   const resumeBtnHoverBg = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100";
//   const statColor = isDarkMode ? "text-white" : "text-gray-900";
//   const statParaColor = isDarkMode ? "text-gray-400" : "text-gray-500";
//   const imageBg = isDarkMode ? "bg-gray-800" : "bg-gray-100";
//   const imageBorder = isDarkMode ? "border-gray-700" : "border-white";
//   const imageSpinColor = isDarkMode ? "border-teal-400" : "border-purple-200";
//   const iconBg = isDarkMode ? "bg-gray-700" : "bg-white";
//   const iconColor = isDarkMode ? "text-teal-400" : "text-purple-600";
//   const tagBg = isDarkMode ? "bg-gray-700" : "bg-gray-200";
//   const tagTextColor = isDarkMode ? "text-gray-200" : "text-gray-700";

//   const skills = ["React", "Node.js", "JavaScript", "Python", "MongoDB"];

//   return (
//     <section className={`relative min-h-screen flex items-center justify-center pt-30 pb-16 lg:pt-26 lg:pb-24 ${sectionBg} ${textColor} transition-colors duration-300 overflow-hidden`}>
      
//       <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-8 md:px-4">
//         {/* Left Side: Text, Buttons, Stats */}
//         <div className="flex flex-col items-start text-left">
//           <h1 className={`text-4xl lg:text-5xl font-extrabold leading-tight ${headingColor} mb-6`}>
//             Building <span className={spanColor}>The Future</span> With 
//             Code, Creativity 
//             and Technology.
//           </h1>
//           <p className={`text-lg ${paraColor} mb-8 max-w-lg`}>
//             Hi, I'm Himanshu! With more than 1 years of experience, <br />
//             I'm ready to be a part of your wonderful project!
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mb-8">
//             <a href="https://www.linkedin.com/in/himanshu561hi/" className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-teal-600 dark:to-cyan-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//               Connect With Me
//             </a>
//             <a href={resume} className={`flex items-center ${resumeBtnColor} font-semibold py-3 px-6 rounded-full ${resumeBtnHoverBg} transition-colors duration-300`}>
//               Resume <span className="ml-2 text-xl">&rarr;</span>
//             </a>
//           </div>

//           {/* Skill Tags */}
//           <div className="flex flex-wrap gap-2 mt-0">
//             {skills.map((skill) => (
//               <span
//                 key={skill}
//                 className={`flex items-center justify-center px-5 py-2.5 rounded-full ${tagBg} ${tagTextColor} font-medium text-sm border border-transparent transition-colors duration-300`}
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Image and Surrounding Icons */}
//         <div className="relative flex justify-center items-center min-h-[auto] lg:min-h-[auto]">
//           {/* Main Image in circular frame */}
//           <div className={`relative w-75 h-75 lg:w-96 lg:h-96 rounded-full flex items-center justify-center ${imageBg} shadow-xl overflow-hidden border-4 ${imageBorder}`}>
//             <div className={`absolute inset-0 rounded-full border-8 ${imageSpinColor} animate-spin-slow`} style={{ animationDuration: '20s', borderTopColor: 'transparent', borderLeftColor: 'transparent' }}></div>
//             <img
//               src={profilePic}
//               alt="Himanshu"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>

//           {/* Floating Icons */}
//           <div className={`absolute top-1/4 left-0 p-3 ${iconBg} rounded-full shadow-md ${iconColor} text-2xl`}>
//             <FaLaptopCode />
//           </div>
//           <div className={`absolute top-1/33 right-0 p-3 ${iconBg} rounded-full shadow-md ${iconColor} text-2xl`}>
//             <FaMobileAlt />
//           </div>
//           <div className={`absolute bottom-1/4 left-1/4 p-3 ${iconBg} rounded-full shadow-md ${iconColor} text-2xl`}>
//             <FaChartBar />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;




import React from 'react';
import profilePic from '../assets/pic.png';
import resume from '../assets/resume.pdf';
import { FaLaptopCode, FaMobileAlt, FaChartBar } from 'react-icons/fa';

function HeroSection({ isDarkMode }) {
  const sectionBg = isDarkMode 
    ? "bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950" 
    : "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50";

  const textColor = isDarkMode ? "text-gray-100" : "text-gray-800";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const spanColor = isDarkMode ? "text-teal-400" : "text-purple-600";
  const paraColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const resumeBtnColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const resumeBtnHoverBg = isDarkMode ? "hover:bg-gray-700/50" : "hover:bg-white/70";
  const imageBg = isDarkMode ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-white to-gray-50";
  const imageBorder = isDarkMode ? "border-gray-700" : "border-white";
  const imageSpinColor = isDarkMode ? "border-teal-400" : "border-purple-300";
  const iconBg = isDarkMode ? "bg-gray-800/80 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm";
  const iconColor = isDarkMode ? "text-teal-400" : "text-purple-600";
  const tagBg = isDarkMode ? "bg-gray-800/60 backdrop-blur-sm" : "bg-white/70 backdrop-blur-sm";
  const tagTextColor = isDarkMode ? "text-gray-200" : "text-gray-700";
  const particleColor = isDarkMode ? "bg-teal-400/20" : "bg-purple-400/20";

  const skills = ["React", "Node.js", "JavaScript", "Python", "MongoDB"];

  return (
    <section className={`relative min-h-screen flex items-center justify-center pt-32 pb-16 lg:pt-28 lg:pb-24 ${sectionBg} ${textColor} transition-all duration-500 overflow-hidden`}>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${particleColor} rounded-full opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-${i % 4} ${8 + Math.random() * 12}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Larger Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`large-${i}`}
            className={`absolute w-4 h-4 ${isDarkMode ? 'bg-gradient-to-br from-teal-500/10 to-cyan-500/10' : 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'} rounded-full blur-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-large-${i % 3} ${15 + Math.random() * 10}s infinite linear`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Geometric Shapes */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`geo-${i}`}
            className={`absolute w-6 h-6 ${isDarkMode ? 'border border-teal-500/20' : 'border border-purple-500/20'} ${i % 2 === 0 ? 'rotate-45' : 'rounded-full'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `geometric-float-${i % 2} ${20 + Math.random() * 15}s infinite linear`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center px-6 md:px-8 lg:px-12">
        
        {/* Left Side: Text, Buttons, Stats */}
        <div className="flex flex-col items-start text-left space-y-8">
          <div className="space-y-6">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] ${headingColor} tracking-tight`}>
              Building{' '}
              <span className={`${spanColor} relative inline-block`}>
                The Future
                <div className={`absolute -bottom-2 left-0 w-full h-1 ${isDarkMode ? 'bg-gradient-to-r from-teal-400 to-cyan-400' : 'bg-gradient-to-r from-purple-600 to-pink-600'} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </span>
              <br />
              With Code, Creativity
              <br />
              & Technology.
            </h1>
            
            <p className={`text-lg sm:text-xl ${paraColor} max-w-2xl leading-relaxed font-medium`}>
              Hi, I'm <span className={`${spanColor} font-semibold`}>Himanshu</span>! With more than 1 year of experience,
              <br className="hidden sm:block" />
              I'm ready to be a part of your wonderful project!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://www.linkedin.com/in/himanshu561hi/" 
              className={`group relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500' : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500'} text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-center sm:text-left`}
            >
              <span className="relative z-10">Connect With Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href={resume} 
              className={`group flex items-center justify-center sm:justify-start ${resumeBtnColor} font-bold py-4 px-6 rounded-2xl ${resumeBtnHoverBg} border border-gray-300/20 hover:border-gray-300/40 transition-all duration-300 backdrop-blur-sm`}
            >
              <span>Resume</span>
              <span className="ml-3 text-xl transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </a>
          </div>

          {/* Enhanced Skill Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`group flex items-center justify-center px-6 py-3 rounded-2xl ${tagBg} ${tagTextColor} font-semibold text-sm border border-gray-300/20 hover:border-gray-300/40 hover:scale-105 transition-all duration-300 cursor-default shadow-lg hover:shadow-xl`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Enhanced Image and Floating Icons */}
        <div className="relative flex justify-center items-center min-h-[500px] lg:min-h-[600px]">
          
          {/* Main Image Container with Enhanced Effects */}
          <div className={`absolute w-70 h-70 lg:w-[420px] lg:h-[420px] rounded-full flex items-center justify-center ${imageBg} shadow-2xl overflow-hidden border-4 ${imageBorder}`}>
            
            {/* Animated Border Ring */}
            <div className={`absolute inset-0 rounded-full border-4 ${imageSpinColor} opacity-60`} 
                 style={{ 
                   animation: 'spin 20s linear infinite',
                   borderTopColor: 'transparent', 
                   borderLeftColor: 'transparent'
                 }}>
            </div>
            
            {/* Secondary Ring */}
            <div className={`absolute inset-2 rounded-full border-2 ${isDarkMode ? 'border-teal-500/30' : 'border-purple-500/30'}`} 
                 style={{ 
                   animation: 'spin 15s linear infinite reverse',
                   borderTopColor: 'transparent', 
                   borderRightColor: 'transparent'
                 }}>
            </div>
            
            {/* Profile Image */}
            <img
              src={profilePic}
              alt="Himanshu"
              className="w-70 h-70 lg:w-96 lg:h-96 object-cover rounded-full  transition-transform duration-500 relative z-10"
            />
            
            {/* Overlay Glow Effect */}
            <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-gradient-to-t from-teal-600/20 to-transparent' : 'bg-gradient-to-t from-purple-600/20 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          </div>

          {/* Enhanced Floating Icons with Better Positioning */}
          <div className={`absolute -top-8 -left-8 p-4 ${iconBg} rounded-2xl shadow-xl ${iconColor} text-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer`}
               style={{ animation: 'float-icon-1 6s ease-in-out infinite' }}>
            <FaLaptopCode />
          </div>
          
          <div className={`absolute -top-4 -right-12 p-4 ${iconBg} rounded-2xl shadow-xl ${iconColor} text-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer`}
               style={{ animation: 'float-icon-2 8s ease-in-out infinite', animationDelay: '2s' }}>
            <FaMobileAlt />
          </div>
          
          <div className={`absolute -bottom-8 -left-4 p-4 ${iconBg} rounded-2xl shadow-xl ${iconColor} text-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer`}
               style={{ animation: 'float-icon-3 7s ease-in-out infinite', animationDelay: '4s' }}>
            <FaChartBar />
          </div>

          {/* Decorative Elements */}
          <div className={`absolute top-1/3 -right-4 w-4 h-4 ${isDarkMode ? 'bg-teal-400' : 'bg-purple-500'} rounded-full opacity-60`}
               style={{ animation: 'pulse 3s ease-in-out infinite' }}>
          </div>
          
          <div className={`absolute bottom-1/3 -left-2 w-3 h-3 ${isDarkMode ? 'bg-cyan-400' : 'bg-pink-500'} rounded-full opacity-60`}
               style={{ animation: 'pulse 4s ease-in-out infinite', animationDelay: '1s' }}>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-15px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(5px) rotate(270deg); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(-20px) rotate(120deg); }
          66% { transform: translateY(-25px) translateX(10px) rotate(240deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-40px) translateX(-10px) rotate(180deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-10px) translateX(-25px) rotate(90deg); }
          50% { transform: translateY(-35px) translateX(15px) rotate(180deg); }
          75% { transform: translateY(-5px) translateX(20px) rotate(270deg); }
        }
        
        @keyframes float-large-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-60px) translateX(-30px) scale(1.2); }
        }
        
        @keyframes float-large-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(-40px) translateX(25px) scale(0.8); }
          66% { transform: translateY(-20px) translateX(-40px) scale(1.1); }
        }
        
        @keyframes float-large-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-50px) translateX(-20px) scale(1.3); }
          75% { transform: translateY(-30px) translateX(35px) scale(0.9); }
        }
        
        @keyframes geometric-float-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-50px) translateX(-30px) rotate(90deg); }
          50% { transform: translateY(-100px) translateX(20px) rotate(180deg); }
          75% { transform: translateY(-25px) translateX(40px) rotate(270deg); }
        }
        
        @keyframes geometric-float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-80px) translateX(-50px) rotate(360deg); }
        }
        
        @keyframes float-icon-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes float-icon-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-5deg); }
        }
        
        @keyframes float-icon-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(8deg); }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
