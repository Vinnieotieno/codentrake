import { ArrowRight } from 'lucide-react'
import { services } from '@/constants/landingpage'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Container from '@/components/Container'

const Wedo = () => {
  return (
    <Container className="w-full max-w-[1600px] bg-brandLighter bg-opacity-40 text-brandDark py-20 ">
      <div className="md:flex justify-between items-center mb-7">
        <span className="font-bold text-2xl capitalize">what we do</span>
        <Link to={"/services"} className="flex items-center">
          <span className="mr-2">Explore all services</span>
          <ArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-2">
            <h2 className="text-md font-semibold">Perfect Solution For Your Business</h2>
            <span className="text-sm leading-[20px]">
              Discover our range of software products engineered to transcend mere aesthetics. We specialize in crafting purposeful experiences that
              align with your brand's vision and goals.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <Link to={service.to} key={idx}>
                <div className="sm:w-[300px] shadow-xl p-5 rounded-lg mt-2 bg-white">
                  <h2 className="font-semibold py-2 flex justify-center">{service.title}</h2>
                  <p className="text-gray-800">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full  rounded-md shrink-1"
          />
        </div>
      </div>
    </Container>
  );
}

export default Wedo