import React from 'react'
import { Linkedin } from 'lucide-react'
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react'
import { Facebook } from 'lucide-react'
import {Twitter } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="absolute top-[490px] sm:top-[590px] w-full max-w-[1600px] z-10">
      <div className="sm:h-20 h-10 bg-brandDark flex justify-around items-center  rounded-lg mx-10 text-white">
        <a href="https://www.linkedin.com/in/vigilux-corp-571a61291/" target="_blank" rel="noopener noreferrer" className="font-bold">
          <Linkedin className="hover:text-blue-300 ml-4" />
          <span className="hidden sm:block">Linkedin</span>
        </a>
        <a href="https://github.com/Vigilux-Corp" target="_blank" rel="noopener noreferrer" className="font-bold">
          <Github className="ml-3 hover:text-black " />
          <span className="hidden sm:block">Github</span>
        </a>
        <a href="https://www.instagram.com/vigilux.corp/" target="_blank" rel="noopener noreferrer" className="font-bold">
          <Instagram className="ml-5 hover:text-red-400 " />
          <span className="hidden sm:block">Instagram</span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100094756418058" target="_blank" rel="noopener noreferrer" className="font-bold">
          <Facebook className="hover:text-blue-300 ml-4" />
          <span className="hidden sm:block">Facebook</span>
        </a>
        <a href="https://twitter.com/VigiluxCorp" target="_blank" rel="noopener noreferrer" className="font-bold">
          <FaXTwitter className="hover:text-blue-300 ml-4" />
          <span className="hidden sm:block">Twitter</span>
        </a>
      </div>
    </div>
  );
}

export default Socials