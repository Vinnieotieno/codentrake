import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from "@/constants/homepage"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Container from '@/components/Container'

const Work = () => {
  return (
    <div className="bg-brandLighter bg-opacity-40 text-brandDark py-10">
      <Container className="">
        <span className=" font-bold text-2xl capitalize mb-3">our work</span>
            <h2 className="text-md font-semibold mb-5">Case Studies Are Conducted By Our Team</h2>
        <div className="absolute right-0 sm:top-24 flex justify-end sm:pr-16 pr-6">
          <Link to={"/portfolio"} className="flex items-center hover:underline">
            <span className="mr-2">Explore all Projects</span>
            <ArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.slice(0, 3).map((project, idx) => (
            <Link to={"/portfolio"} key={idx}>
              <Card>
                <img src={project.img} alt="rollinscodes.com" className="object-cover h-48 w-full rounded-t-lg" />
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.desc}</CardDescription>
                </CardHeader>
                <CardFooter>
                  
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Work