import React from 'react';
import { ChevronUp } from 'lucide-react';
import whatsapp from "@/assets/whatsapp.svg";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col space-y-5 items-center fixed bottom-10 right-2 z-[9999]">
      <a href="https://wa.me/254797398004" target="_blank" className=" rounded-full">
        <img src={whatsapp} width={70} height={70} alt="rollinscodes.com" />
      </a>
      <button className="" onClick={scrollToTop} title="Back to Top">
        <ChevronUp className="text-white rounded-full bg-brandMedium w-10 h-10" />
      </button>
    </div>
  );
};

export default BackToTopButton;
