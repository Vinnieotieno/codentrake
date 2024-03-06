import React from 'react'
import getstarted from '../../../assets/getstarted.png'
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';

const Howworks = () => {
  return (
    <Container className="bg-brandLighter bg-opacity-40 text-brandDark py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" bg-[url('https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-center bg-cover bg-no-repeat relative rounded-xl ">
          <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
            <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7 hidden md:block">
              <div className="hidden md:block">
                <h3 className="text-lg font-bold text-gray-800 sm:text-2xl dark:text-gray-200">How we work</h3>
                <p className="mt-2 text-gray-800 dark:text-gray-200">Learn more about our services</p>
              </div>

              <div className="md:mt-10 hidden md:block">
                <Button className="bg-brandDark">Book a Call</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={getstarted} alt="rollinscodes.com" className="" />
        </div>
      </div>
    </Container>
  );
}

export default Howworks