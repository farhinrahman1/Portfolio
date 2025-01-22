import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <header>
      <div className="">
        <SocialIcon
          url="https://linkedin.com/in/couetilc"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com/in/couetilc"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/in/couetilc"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/in/couetilc"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/in/couetilc"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
    </header>
  );
}
