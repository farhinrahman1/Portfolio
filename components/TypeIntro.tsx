// import React from "react";
// import { Typewriter } from "react-simple-typewriter";
// import farhinImage from "../components/farhin1.jpg";
// import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision";

// export default function () {
//   const handleType = (count: number) => {
//     console.log(count);
//   };
//   const handleDone = () => {
//     console.log(`Done after 10 loops!`);
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center h-screen w-screen">
//       <BackgroundBeamsWithCollision>
//         {/* image */}
//         <div className="fixed top-2.5/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 p-[4px] border-2 border-gray-300 rounded-full shadow-xl">
//           <img
//             src={farhinImage.src}
//             alt="Farhin"
//             className="h-[150px] w-[120px] max-w-full border-2 border-white rounded-full shadow-lg"
//           />
//         </div>

//         <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
//           <div className="mt-[200px] text-center">
//             <h1 className="text-2xl font-bold shadow-sm shadow-slate-200">
//               <span className="text-2xl font-bold font-mono">
//                 <Typewriter
//                   words={["Hi, I'm Farhin", "<Frontend Developer/>"]}
//                   loop={10}
//                   cursor
//                   cursorStyle="_"
//                   typeSpeed={80}
//                   deleteSpeed={60}
//                   delaySpeed={1000}
//                   onLoopDone={handleDone}
//                   onType={handleType}
//                 />
//               </span>
//               <p className="text-medium text-black dark:text-gray-200 mt-4 max-w-lg">
//                 Dedicated to creating intuitive and dynamic user interfaces.
//               </p>
//             </h1>
//           </div>
//         </div>
//       </BackgroundBeamsWithCollision>
//     </div>
//   );
// }

// import React from "react";
// import { Typewriter } from "react-simple-typewriter";
// import farhinImage from "../components/farhin1.jpg";
// import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision";

// export default function HeroSection() {
//   const handleType = (count: number) => {
//     console.log(count);
//   };

//   const handleDone = () => {
//     console.log(`Done after 10 loops!`);
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-gray-50 dark:bg-neutral-900">
//       <BackgroundBeamsWithCollision />

//       {/* Profile Image */}
//       <div className="absolute top-1/4 flex items-center justify-center">
//         <div className="p-[4px] border-4 border-gray-300 rounded-full shadow-xl">
//           <img
//             src={farhinImage.src}
//             alt="Farhin"
//             className="h-[150px] w-[150px] max-w-full border-2 border-white rounded-full shadow-lg object-cover"
//           />
//         </div>
//       </div>

//       {/* Main Text */}
//       <div className="relative mt-60 text-center">
//         {" "}
//         {/* Adjusted the margin */}
//         <h1 className="text-2xl mb-20 font-bold text-gray-800 dark:text-gray-100">
//           <Typewriter
//             words={["Hi, I'm Farhin", "<Frontend Developer/>"]}
//             loop={10}
//             cursor
//             cursorStyle="_"
//             typeSpeed={80}
//             deleteSpeed={60}
//             delaySpeed={1000}
//             onLoopDone={handleDone}
//             onType={handleType}
//           />
//         </h1>
//         <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
//           Dedicated to creating intuitive and dynamic user interfaces.
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import farhinImage from "../components/farhin1.jpg";
import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision";

export default function HeroSection() {
  const handleType = (count: number) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 10 loops!`);
  };

  return (
    <div className="relative h-screen w-screen bg-gray-50 dark:bg-neutral-900 overflow-hidden">
      {/* Background Beams */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeamsWithCollision />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Profile Image */}
        <div className="flex items-center justify-center mb-4">
          <div className="p-[4px] border-4 border-gray-300 rounded-full shadow-xl">
            <img
              src={farhinImage.src}
              alt="Farhin"
              className="h-[130px] w-[120px] max-w-full border-2 border-white rounded-full shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Typewriter Text */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            <Typewriter
              words={["Hi, I'm Farhin", "<Frontend Developer/>"]}
              loop={10}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Dedicated to creating intuitive and dynamic user interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}
