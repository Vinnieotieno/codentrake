import Container from '@/components/Container'
import { Card } from '@/components/ui/card';
import { team } from '@/constants/about';
import React from 'react'

const Team = () => {
  return (
    <Container className="py-10 bg-brandLighter bg-opacity-40 ">
      <h1 className="font-bold text-4xl mb-4  tracking-wide text-center text-brandDark">Our Team</h1>
      <p className="text-center text-base lg:text-medium text-brandDark">Creative People</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {team.map((member, idx) => (
          <Card key={idx} className="flex flex-col p-4 bg-brandDark text-brandLighter my-5">
            <div className="flex items-center gap-x-5">
              <img src={member.img} className="w-20 h-20 object-cover rounded-r-3xl rounded-bl-3xl" alt="" />
              <div className="grow">
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-xs uppercase">{member.position}</p>
              </div>
            </div>
            <p className="mt-3">{member.desc}</p>
            <div className="flex items-center  mt-4 space-x-2">
              {member.socials.map((social, idx) => (
                <a key={idx} href={social.link} target="blank" className="md:flex hidden">
                  <img src={social.img} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Team