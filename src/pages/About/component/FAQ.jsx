import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/constants/about";

import React from "react";

const FAQ = () => {
  return (
    <div className="my-5 py-20 bg-brandLighter bg-opacity-40 flex flex-col items-center text-brandDark " id="faq">
      <h1 className="font-bold text-4xl mb-8  text-center  tracking-wide "> Discover Why <br /> We're Your Ideal Tech Partner
      </h1>

      <Accordion type="single" collapsible className="lg:w-3/5 w-full px-10 ">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent className="my-3">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
