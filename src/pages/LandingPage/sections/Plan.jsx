import React from 'react';
import { plans } from '@/constants/landingpage';
import { Sprout, Flower, CheckCircle, Palmtree } from 'lucide-react';
import Container from '@/components/Container';


const Plan = () => {
  return (
    <section className="relative px-6 lg:pt-10 lg:pb-30 bg-brandLighter bg-opacity-40 text-brandDark overflow-hidden">
      <Container>
        
          <div className="flex flex-wrap -mx-4 items-center mb-10">
            <div className="w-full px-4 lg:mb-0">
              <span className=" font-bold text-xl capitalize">our plans</span>
              <h3 className=" mt-6">
                Let's chat about your needs and schedule a call for a personalized quote. Excited to hear from you!
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full py-5">
              {plans.map((plan, idx) => (
                <div className={`${plan.backgroundColor} h-fit rounded-lg `} key={idx}>
                  <span>
                    <span>
                      {plan.title === "Basic" && <Sprout className="m-10 text-green-700" fill="green" />}
                      {plan.title === "Enterprise" && <Flower className="m-10 text-red-700" fill="orange" />}
                      {plan.title === "Business" && <Palmtree className="m-10 text-green-800" fill="green" />}
                    </span>
                  </span>
                  <h2 className="flex pl-6 font-bold text-xl">{plan.title}</h2>
                  <h5 className="text-xs pl-6 text-gray-500">{plan.description}</h5>
                  <h2 className="flex pl-6 mb-4 font-semibold text-lg pt-4 text-gray-700">{plan.price}</h2>
                  <hr className="border-2 m-4" />
                  <div className="pl-6">
                    <h5 className="text-sm font-bold">Features</h5>
                    <div className="pr-2">
                      <ul className="pl-6">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center my-2">
                            <CheckCircle className="mr-2" size={15} fill="green" />
                            {feature.name}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

      </Container>
    </section>
  );
};

export default Plan;
