import Container from "@/components/Container";
import { languages } from "@/constants/homepage";


const Languages = () => {
  return (
    <div className="my-10">
      <Container>
              <h1 className="lg:text-2xl text-xl font-bold mt-10 ">{languages.title}</h1>
              <p className="text-medium mb-8">{ languages.desc}</p>
        <div className="flex flex-wrap items-stretch space-x-6 md:space-x-10 lg:space-x-14 text-justify">
          {languages.languages.map((language, idx) => (
            <img key={idx} src={language} alt="pulsecoding" className=" object-contain lg:h-24 lg:w-32 md:h-28 md:w-28 w-24 h-24" />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Languages