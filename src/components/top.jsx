import React from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className="fixed p-2 sm:p-3 flex bottom-[10%] right-1 rounded-full bg-green-800 z-[1000]"
      onClick={scrollToTop}
      title="Back to Top"
    >
      <ChevronUp className="text-white" />
    </button>
  );
};

export default BackToTopButton;
