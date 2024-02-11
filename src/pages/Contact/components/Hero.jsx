const Hero = () => {
  return (
    <div className="mt-1 overflow-x-hidden">
      <div className=" mt-5 bg-cover bg-center h-96 relative bg-[url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww')] bg-no-repeat ">
        <div className="absolute bg-brandLighter bg-opacity-50 top-0 left-0 h-96  w-1/2 flex items-center justify-center">
          <h1 className="text-brandDark lg:text-5xl text-3xl font-bold">Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
