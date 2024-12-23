import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center mx-auto py-8 footer rounded-2xl shadow-2xl isolate bg-background/10 saturate-100 backdrop-blur-[10px] transition-shadow z-10 w-full md:w-10/12 lg:w-9/12">
      {/* Contact Section - Working on new branch*/}
      <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
      <p className="mb-4">
        For suggestions:
        <a
          href="mailto:rawal.nikhil29@gmail.com"
          className="text-blue-500 hover:underline ml-1"
        >
          <FaEnvelope className="inline h-5 w-5" /> Email Me
        </a>
      </p>
      <p className="mb-4">
        Phone: <span className="text-blue-500">+1-807-356-6564</span>
      </p>
      <p className="mb-4">
        <a
          href="https://nikhil-portfolio-screenshots.s3.us-east-1.amazonaws.com/Nikhil+Rawal+Resume.pdf"
          download="Nikhil_Resume.pdf"
        >
          <FcDocument className="inline h-5 w-5" /> Download My Resume
        </a>
      </p>

      {/* Social Media Section */}
      <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
      <div className="flex space-x-4">
        <a
          href="https://github.com/nikhil-rawal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-7 w-7 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 hover:scale-125" />
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil-rawal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-7 w-7 hover:text-blue-600 text-blue-800 hover:scale-125" />
        </a>
        <a
          href="https://www.instagram.com/nnikhil.rrawal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-7 w-7 hover:text-pink-500 text-pink-700 hover:scale-125" />
        </a>
      </div>

      {/* Credits */}
      <p className="mt-8 text-gray-900 dark:text-gray-100">
        Nikhil Rawal, © <span>{new Date().getFullYear()}</span>.
      </p>
    </div>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <div className="footer flex flex-col items-center mx-auto py-8 rounded-2xl shadow-2xl isolate bg-background/10 saturate-100 backdrop-blur-[10px] transition-shadow z-10 w-full">
//       {/* Contact Section */}
//       <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
//       <p className="mb-4">
//         For suggestions:
//         <a
//           href="mailto:rawal.nikhil29@gmail.com"
//           className="text-blue-500 hover:underline ml-1"
//         >
//           Email Me
//         </a>
//       </p>
//       <p className="mb-4">Phone: +1-807-356-6564</p>
//       <div className="flex space-x-4">
//         <a
//           href="https://github.com/nikhil-rawal"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaGithub className="h-7 w-7 hover:scale-125" />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/nikhil-rawal/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLinkedin className="h-7 w-7 hover:scale-125" />
//         </a>
//       </div>
//       <p className="mt-8">Nikhil Rawal, © {new Date().getFullYear()}</p>
//     </div>
//   );
// };

// export default Footer;
