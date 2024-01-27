import Container from "@/components/Container";
import { stats } from "@/constants/about";

import React from "react";

const Stats = () => {
  return (
    <div className="py-16 ">
      <Container>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-10 text-center text-brandSlightDark">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h1 className="lg:text-5xl text-3xl font-bold text-brandPrimary">{stat.number}</h1>
              <p className="">{stat.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Stats;
