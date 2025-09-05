'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import { MY_URLS, PERSONAL_INFO } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-gray-400">
        {/* Left */}
        <p className="text-sm mb-4 sm:mb-0">
          © {new Date().getFullYear()} {PERSONAL_INFO.first_name}. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex space-x-5">
          <a
            href={MY_URLS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={MY_URLS.linked_in}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          {/* <a
            href={MY_URLS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <Twitter className="w-5 h-5" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
