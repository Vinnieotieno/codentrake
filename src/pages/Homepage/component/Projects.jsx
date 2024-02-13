import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "@/constants/homepage";

const Projects = () => {
  return (
    <div className="py-14 text-brandDark">
      <Container>
        <Carousel
          opts={{
            align: "start",
            // loop: true,
          }}
          className="mx-auto w-full max-w-full space-y-8">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-10/12">
              <h1 className="font-bold text-xl lg:text-5xl l leading-tight">Projects </h1>
              <p className="my-3  text-base">
                Explore a selection of our completed projects that showcase our expertise in web development, UI/UX design, and application
                programming. Each project reflects our commitment to innovation, quality, and client satisfaction.
              </p>
            </div>

            <div className="space-x-3 mx-auto">
              <CarouselPrevious className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 border-gray-400 bg-white" />
              <CarouselNext className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 border-gray-400 bg-white" />
            </div>
          </div>

          <CarouselContent className="w-full flex">
            {projects.map((project, idx) => (
              <CarouselItem key={idx} className="rounded-lg shadow-lg cursor-pointer pl-3 md:basis-1/2 md:pl-4 lg:basis-1/3 ">
                <img src={project.img} className="rounded-t-2xl w-full  h-48 object-cover" alt="rollinscode.com" />
                <div className="text-center pb-5 bg-brandLighter bg-opacity-40 text-brandDark">
                  <h1 className="text-lg lg:text-xl font-bold py-2 ">{project.name}</h1>
                  <p className="px-2 mx-auto text-sm">{project.desc}</p>
                  <div className="flex justify-end mt-3 mr-2">
                    <Button 
                      className="bg-brandDark hover:bg-green-800 hover:text-white" variant="">See Project</Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
};

export default Projects;
