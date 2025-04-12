import Link from "next/link";
import { WordRotate } from "../components/word-rotate";
import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <WordRotate
            className="text-4xl font-bold text-white dark:text-white"
            words={["Frontend", "Developer"]}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
          <p className="text-base">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Farhin Rahman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
