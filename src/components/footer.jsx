// // src/components/Footer.jsx

// import React from 'react';
// import { FaHeart, FaWhatsapp, FaGithub, FaLinkedinIn, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
// import { SiGmail } from 'react-icons/si';

// function Footer({ isDarkMode }) {
//   const footerBg = isDarkMode ? "bg-gray-950" : "bg-white";
//   const textColor = isDarkMode ? "text-gray-400" : "text-gray-600";
//   const headingColor = isDarkMode ? "text-white" : "text-gray-900";
//   const accentColor = isDarkMode ? "text-teal-400" : "text-indigo-600";
//   const dividerColor = isDarkMode ? "bg-gray-700" : "bg-gray-300";
//   const iconCardBg = isDarkMode ? "bg-gray-800/60 backdrop-blur-md" : "bg-white/60 backdrop-blur-md";
//   const iconColor = isDarkMode ? "text-white" : "text-gray-900";
//   const iconHoverColor = "hover:text-teal-400 dark:hover:text-cyan-400";
//   const iconLinkBg = isDarkMode ? "bg-gray-700/60 backdrop-blur-md" : "bg-white/60 backdrop-blur-md";
//   const iconLinkColor = isDarkMode ? "text-white" : "text-gray-900";

//   return (
//     <footer className={`py-16 lg:py-24 ${footerBg} transition-colors duration-300`}>
//       <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//         {/* Left Section: Portfolio Title and Tagline */}
//         <div className="flex flex-col items-center md:items-start text-left md:text-left">
//           <h2 className={`text-4xl lg:text-5xl font-extrabold leading-tight ${headingColor} mb-4`}>
//             Aman's <br />
//             <span className={accentColor}>Portfolio</span>
//           </h2>
//           <p className={`text-lg ${textColor} max-w-sm`}>
//             "Crafting digital experiences with <br /> passion & precision"
//           </p>
//         </div>

//         {/* Center Section: Social Icons */}
//         <div className="flex flex-col items-center md:items-center">
//           <h3 className={`text-xl lg:text-2xl font-bold ${headingColor} mb-4`}>Let's Connect</h3>
//           <div className="grid grid-cols-3 gap-4">
//             {/* WhatsApp */}
//             <a href="#" className={`flex items-center justify-center w-16 h-16 rounded-lg ${iconLinkBg} ${iconLinkColor} ${iconHoverColor}`}>
//               <FaWhatsapp className="text-3xl" />
//             </a>
//             {/* GitHub */}
//             <a href="#" className={`flex items-center justify-center w-16 h-16 rounded-lg ${iconLinkBg} ${iconLinkColor} ${iconHoverColor}`}>
//               <FaGithub className="text-3xl" />
//             </a>
//             {/* LinkedIn */}
//             <a href="#" className={`flex items-center justify-center w-16 h-16 rounded-lg ${iconLinkBg} ${iconLinkColor} ${iconHoverColor}`}>
//               <FaLinkedinIn className="text-3xl" />
//             </a>
//             {/* Gmail */}
//             <a href="#" className={`flex items-center justify-center w-16 h-16 rounded-lg ${iconLinkBg} ${iconLinkColor} ${iconHoverColor}`}>
//               <SiGmail className="text-3xl" />
//             </a>
//             {/* Instagram */}
//             <a href="#" className={`flex items-center justify-center w-16 h-16 rounded-lg ${iconLinkBg} ${iconLinkColor} ${iconHoverColor}`}>
//               <FaInstagram className="text-3xl" />
//             </a>
//             {/* Telegram */}
//             <a href="#" className={`flex items-center justify-center w-16 h-16 rounded-lg ${iconLinkBg} ${iconLinkColor} ${iconHoverColor}`}>
//               <FaTelegramPlane className="text-3xl" />
//             </a>
//           </div>
//         </div>

//         {/* Right Section: Location */}
//         <div className="flex flex-col items-center md:items-end text-center md:text-right">
//           <h3 className={`text-xl lg:text-2xl font-bold ${headingColor} mb-4`}>Location</h3>
//           <p className={`text-lg ${textColor}`}>Village: Jashara</p>
//           <p className={`text-lg ${textColor}`}>Post: Sachui</p>
//           <p className={`text-lg ${textColor}`}>District: Mau</p>
//           <p className={`text-lg ${textColor}`}>Uttar Pradesh, India</p>
//         </div>
//       </div>

//       {/* Footer Bottom (Copyright and Tagline) */}
//       <div className="container mx-auto px-4 md:px-12 mt-8 md:mt-16 text-center">
//         <div className={`w-full h-px ${dividerColor} max-w-lg mx-auto mb-4`}></div>
//         <p className={`text-sm ${textColor} mb-2`}>
//           © 2025 All rights reserved
//         </p>
//         <p className={`text-sm ${textColor} flex items-center justify-center`}>
//           Made with <FaHeart className={`mx-2 text-red-500`} /> by 
//           <span className={`font-semibold ${accentColor} ml-1`}>Himanshu Gupta</span>
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;








// src/components/Footer.jsx

import React from 'react';
import { FaHeart, FaWhatsapp, FaGithub, FaLinkedinIn, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Footer({ isDarkMode }) {
  const footerBg = isDarkMode ? "bg-gray-950" : "bg-white"; // Main footer background
  const textColor = isDarkMode ? "text-gray-400" : "text-gray-600"; // General text color
  const headingColor = isDarkMode ? "text-white" : "text-gray-900"; // Headings color
  const accentColor = isDarkMode ? "text-teal-400" : "text-indigo-600"; // Accent color for names/highlights
  const dividerColor = isDarkMode ? "bg-gray-700" : "bg-gray-300"; // Divider line color

  // Glassmorphism effect colors for social icons
  const glassCardBg = isDarkMode ? "bg-white/[0.08] backdrop-blur-md border border-white/[0.1]" : "bg-gray-800/[0.08] backdrop-blur-md border border-gray-800/[0.1]";
  const glassIconColor = isDarkMode ? "text-white" : "text-gray-900";
  const glassIconHoverBg = isDarkMode ? "hover:bg-teal-500/[0.2]" : "hover:bg-indigo-600/[0.2]";
  const glassIconHoverText = isDarkMode ? "hover:text-teal-300" : "hover:text-indigo-700";

  return (
    <footer className={`py-12 ${footerBg} transition-colors duration-300`}>
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section: Portfolio Title and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className={`text-3xl lg:text-5xl font-extrabold leading-tight ${headingColor} mb-2`}>
            Himanshu's <br />
            <span className={accentColor}>Portfolio</span>
          </h2>
          <p className={`text-lg ${textColor} max-w-sm`}>
            "Crafting digital experiences with <br /> passion & precision"
          </p>
        </div>

        {/* Center Section: Social Icons with Glassmorphism */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className={`text-xl lg:text-2xl font-bold ${headingColor} mb-6`}>Let's Connect</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* WhatsApp */}
            <a href="https://wa.link/0ecl22" className={`flex items-center justify-center w-16 h-16 rounded-xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}>
              <FaWhatsapp className={`text-3xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
            {/* GitHub */}
            <a href="https://github.com/himanshu561hi" className={`flex items-center justify-center w-16 h-16 rounded-xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}>
              <FaGithub className={`text-3xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/himanshu561hi/" className={`flex items-center justify-center w-16 h-16 rounded-xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}>
              <FaLinkedinIn className={`text-3xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
            {/* Gmail */}
            <a href="mailto:himanshu561hi@gmail.com" className={`flex items-center justify-center w-16 h-16 rounded-xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}>
              <SiGmail className={`text-3xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/_oye_himanshu/" className={`flex items-center justify-center w-16 h-16 rounded-xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}>
              <FaInstagram className={`text-3xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
            {/* Telegram */}
            <a href="https://t.me/himanshu561hi" className={`flex items-center justify-center w-16 h-16 rounded-xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}>
              <FaTelegramPlane className={`text-3xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
          </div>
        </div>

        {/* Right Section: Location */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className={`text-xl lg:text-2xl font-bold ${headingColor} mb-4`}>Location</h3>
          <p className={`text-lg ${textColor}`}>Gorakhpur</p>
          <p className={`text-lg ${textColor}`}>Uttar Pradesh, India</p>
        </div>
      </div>

      {/* Footer Bottom (Copyright and Made with love) */}
      <div className="container mx-auto px-4 md:px-12 mt-8 text-center">
        <div className={`w-full h-px ${dividerColor} max-w-lg mx-auto mb-4`}></div>
        <p className={`text-sm ${textColor} mb-2`}>
          © 2025 All rights reserved
        </p>
        <p className={`text-sm ${textColor} flex items-center justify-center`}>
          Made with <FaHeart className={`mx-2 text-red-500`} /> by 
          <span className={`font-semibold ${accentColor} ml-1`}>Himanshu Gupta</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;