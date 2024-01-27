
import React from "react";
import Container from "@/components/Container";
import hero from "@/assets/hero.png"
import { socials } from "@/constants/footer";

const Hero = () => {
  return (
    <div className=" pt-24 lg:pt-36 pb-10 bg-brandLighter bg-opacity-40">
      <Container>
        <div className="lg:flex mx-auto gap-14   ">
          <div className="lg:w-7/12 w-full mx-auto">
            <h1 className="font-semibold text-3xl lg:text-6xl leading-tight">Elevate Your Brand with Vigilux Corp</h1>
            <h1 className="font-semibold text-lg lg:text-2xl leading-tight my-5">Where tech meets creativity</h1>
            <p className="my-5 text-base">
              In the fast-paced and ever-evolving world of technology, finding skilled and knowledgeable professionals is crucial for the success of
              any business.
            </p>

            <div className="inline-flex justify-between  w-3/4 ">
              {socials && <div className="flex items-center justify-center  space-x-2 bg-brandDark p-4 rounded-lg">
                {socials.map((social, idx) => (
                  <a key={idx} href={social.link} target="blank" className="md:flex hidden">
                    <img src={social.img} className="h-8 w-8" />
                  </a>
                ))}
              </div>}
            </div>
          </div>

          <div className="lg:w-5/12 w-full  relative lg:mt-6 mx-auto mt-10  ">
            <div className="h-[50vw] w-[50vw] sm:h-72 sm:w-80 bg-brandDark relative rounded-t-[10%] rounded-br-[30%] rounded mx-auto">
              <img src={hero} className="absolute -top-8 -left-10 lg:h-80 md:h-72  " alt="rollinscodes.com" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
