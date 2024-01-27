import Container from "@/components/Container";
import { stats } from "@/constants/homepage";
import React from "react";

const Stats = () => {
  return (
    <div className="py-24 text-brandDark bg-brandLighter bg-opacity-40">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h1 className="lg:text-5xl text-3xl font-bold">{stat.number}</h1>
              <p className="">{stat.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Stats;
