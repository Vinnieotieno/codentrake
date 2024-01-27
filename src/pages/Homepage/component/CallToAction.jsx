import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { calltoAction } from "@/constants/homepage";


const CallToAction = () => {
  return (
    <div className=" bg-brandDark text-brandLighter pt-10">
      <Container className="lg:flex lg:space-x-20">
        <div className="lg:w-5/12 w-full mx-auto flex flex-col items-center justify-center">
          <div className="">
            <h1 className="lg:text-4xl text-xl font-bold ">{calltoAction.text}</h1>
            <Button className="bg-brandMedium mt-3" > Contact Us</Button>
          </div>
        </div>
        <div className="lg:w-7/12 w-full mx-auto">
          <img src={calltoAction.img}  alt="rollinscode.com" className="" />
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
