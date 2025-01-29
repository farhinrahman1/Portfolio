// "use client";
// import React from "react";

// export default function AboutPage() {
//   return (
//     <div className="relative min-h-screen bg-gray-50 dark:bg-neutral-900 overflow-hidden">
//       <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12">
//         {/* Skills Section */}
//         <div className="max-w-3xl mx-auto mb-12">
//           <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
//             My Skills
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
//               <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
//                 HTML & CSS
//               </h4>
//             </div>
//             <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
//               <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
//                 JavaScript
//               </h4>
//             </div>
//             <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
//               <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
//                 React
//               </h4>
//             </div>
//             <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
//               <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
//                 Next.js
//               </h4>
//             </div>
//             <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
//               <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
//                 Tailwind CSS
//               </h4>
//             </div>
//             <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
//               <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
//                 Git & GitHub
//               </h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
  "UI/UX Design",
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-neutral-900 overflow-hidden flex flex-col items-center justify-center">
      {/* Skills Section */}
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        My Skills
      </h3>

      {/* Scrolling Skills Container */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex space-x-6"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="bg-black dark:bg-neutral-700 px-3 py-3 shadow-lg text-center text-xl font-medium text-white dark:text-gray-200 min-w-[150px]"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
