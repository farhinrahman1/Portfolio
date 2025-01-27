import React from "react";
import { SocialIcon } from "react-social-icons";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-black border w-full h-12 flex items-center justify-between shadow-2xl">
      <div className="flex flex-row items-center">
        <div className="relative group cursor-pointer">
          <SocialIcon
            url="https://www.linkedin.com/in/farhin-rahman-06510a27b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            fgColor="gray"
            bgColor="transparent"
            className="hover:bg-black rounded-e-3xl"
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] px-2 py-1 text-xs text-white bg-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            LinkedIn
          </span>
        </div>
        <div className="relative group cursor-pointer">
          <SocialIcon
            url="https://www.facebook.com/farhin.rahman.169"
            fgColor="gray"
            bgColor="transparent"
            className="hover:bg-black rounded-e-3xl"
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] px-2 py-1 text-xs text-white bg-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Facebook
          </span>
        </div>
        <div className="relative group cursor-pointer">
          <SocialIcon
            url="https://github.com/farhinrahman1"
            fgColor="gray"
            bgColor="transparent"
            className="hover:bg-black rounded-e-3xl"
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] px-2 py-1 text-xs text-white bg-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Github
          </span>
        </div>
        <div className="relative group cursor-pointer">
          <SocialIcon
            url="https://x.com/farhinrahman_"
            fgColor="gray"
            bgColor="transparent"
            className="hover:bg-black rounded-e-3xl"
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] px-2 py-1 text-xs text-white bg-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            X
          </span>
        </div>
        <div className="relative group cursor-pointer">
          <SocialIcon
            url="https://www.instagram.com/f_a_e_f_i_n?igsh=MW5xbzF3bXpyNnBlaw=="
            fgColor="gray"
            bgColor="transparent"
            className="hover:bg-black rounded-e-3xl"
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] px-2 py-1 text-xs text-white bg-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Instagram
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          url="https://email.com/in/couetilc"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-black rounded-s-3xl"
        />
      </div>
    </header>
  );
}
