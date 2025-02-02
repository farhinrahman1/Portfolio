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
          <div className="flex space-x-4">
            <Link
              href="https://github.com/farhinrahman1"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <Github size={30} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/farhin-rahman00"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <Linkedin size={30} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://facebook.com/in/farhin.rahman.169"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <Facebook size={30} />
              <span className="sr-only">Facebook</span>
            </Link>

            <Link
              href="https://twitter.com/farhinrahman_"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <Twitter size={30} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="mailto:farhinrahmanp@gmail.com"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <Mail size={30} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        {/* <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-gray-800 transition-colors"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-gray-800 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="hover:text-gray-800 transition-colors"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-800 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
          <p className="text-base">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <Link
            href="mailto:farhinrahmanp@gmail.com"
            className="inline-block bg-gradient-to-r from-pink-900 to-black text-white px-4 py-2 rounded-md text-sm font-medium hover:from-black hover:to-pink-900 transition-colors"
          >
            Send a Message
          </Link>
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
