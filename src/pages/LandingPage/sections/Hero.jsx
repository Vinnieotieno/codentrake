import React from 'react'
import landhero from '../../../assets/landhero.png'
import { ArrowRight } from 'lucide-react'
import { PhoneCallIcon } from 'lucide-react'
import vscode from '../../../assets/vscode.png'
import rocket from '../../../assets/rocket.png'
import apple from '../../../assets/apple.png'
import Container from '@/components/Container'

const Hero = () => {
  return (
    <Container className="sm:relative flex flex-col items-center sm:flex-row bg-brandLighter bg-opacity-40 text-brandDark rounded-sm sm:h-[632px] h-[550px]">
      <div className="text-left py-6 max-w-[600px] 2xl:max-w-[800px] sm:pt-0 pt-24">
        <p className="sm:text-4xl text-2xl font-bold sm:leading-[50px]">
          Need Futuristic <br />
          design for your brand <span className="text-purple-900">?</span> <br className="2xl:hidden" />
          <span className="text-orange-400 font-bold">We're Here...</span>
        </p>
        <p className="text-md mt-10">
          Welcome to <span className="text-orange-400 font-semibold">Vigilux</span>, where we ignite possibilities, amplify creativity, and engineer
          success through our innovative technology solutions, propelling you forward in the digital realm.
        </p>

        <div className="flex flex-row mb-5 sm:mb-0 mt-10 font-bold">
          <button className="sm:px-6 px-4 sm:py-4 py-3 text-sm hover:text-gray-900 bg-green-900 hover:bg-green-200 text-white border-green-900 border-[1px] rounded-md flex items-center">
            <span>Get Started</span>
            <ArrowRight className="ml-2 border rounded-full hover:border-green-900" />
          </button>
          <button className="px-6 sm:py-4 py-2 ml-10 text-sm text-gray-900 sm:ml-20 hover:bg-green-900 hover:text-white border-green-900 border-[1px] rounded-md flex items-center">
            <span>Book a Call</span>
            <PhoneCallIcon className="ml-2" />
          </button>
        </div>
      </div>
      <img src={landhero} alt="" className="absolute right-0 hidden lg:block w-[850px] h-[630px]" />
      <div className="hidden lg:block">
        <img src={apple} alt="" className="absolute right-4 top-60  w-[120px] h-[100px]" />
        <img src={vscode} alt="" className="absolute right-60 top-10 w-[120px] h-[100px]" />
        <img src={rocket} alt="" className="absolute right-[500px] top-[330px] w-[140px] h-[100px]" />
      </div>
    </Container>
  );
}

export default Hero