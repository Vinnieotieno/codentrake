const Hero = () => {
  return (
    <div className="mt-1 overflow-x-hidden">
      <div className=" mt-5 bg-cover bg-center h-80 relative bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat ">
        <div className="absolute bg-brandLighter bg-opacity-40 top-0 left-0 h-80  w-1/2 flex items-center justify-center">
          <h1 className="text-brandDark lg:text-5xl text-3xl font-bold">About Us</h1>
        </div>
      </div>
      <div className="px-5 my-8">
        <p className="text-base leading-relaxed tracking-wide text-justify">
          Welcome to Vigilux Corporation, your strategic partner in the dynamic and ever-evolving technology landscape. At Vigilux, we are committed
          to delivering top-notch software solutions, cutting-edge UI/UX design, and expert application development, all rooted in a passion for
          coding and programming excellence.
        </p>
        <p className="text-base my-1.5 leading-relaxed tracking-wide text-justify">
          In our mission to bridge the gap in the software development industry, we offer tailor-made solutions that address unique client challenges.
          Whether you are seeking innovative web development, captivating UI/UX design, or robust application development, Vigilux is here to
          transform your vision into reality. Our team of skilled professionals is dedicated to upholding quality and innovation, ensuring that your
          digital presence stands out in the competitive tech landscape.
        </p>
        <p className="text-base my-1.5 leading-relaxed tracking-wide text-justify">
          As part of our vision to empower businesses with technology solutions that contribute to growth and sustainability, Vigilux Corporation
          stands as a beacon of reliability in the tech industry. Our expertise in coding and programming encompasses a wide range of languages and
          frameworks, making us your go-to partner for comprehensive technical solutions. Whether it's front-end development, back-end programming, or
          full-stack expertise, Vigilux is poised to exceed your expectations.
        </p>
        <p className="text-base my-1.5 leading-relaxed tracking-wide text-justify">
          At Vigilux, we understand the critical role of web development, UI/UX design, and application development in driving progress and success.
          Our commitment to lasting relationships built on trust and reliability ensures that partnering with Vigilux Corporation is not just a
          service but a journey towards sustained excellence in the digital realm.
        </p>
      </div>
    </div>
  );
};

export default Hero;
