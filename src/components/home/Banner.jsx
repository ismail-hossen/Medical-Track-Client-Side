const Banner = () => {
  return (
    <div className="bg-black flex justify-end relative h-80 lg:h-screen">
      <div className="w-7/12 lg:w-3/5 overflow-hidden h-full">
        <img
          src="https://medicate.peacefulqode.com/cardiology/wp-content/uploads/sites/5/2022/06/1-5.jpg"
          className="w-full h-full"
          alt="Health Banner Image"
        />
      </div>
      <div className="banner-card absolute w-7/12 lg:w-5/12 bg-white top-16 left-10 lg:top-64 lg:left-80 p-3 lg:p-7 rounded-md flex flex-col lg:gap-4 border-base-200 shadow-sm mb-0">
        <h4 className="lg:inline text-[12px] px-2 uppercase lg:text-2xl bg-blue-100 text-blue-500 text-center rounded-sm font-medium lg:font-bold">
          Follow Health Guidelines
        </h4>
        <h1 className="lg:text-6xl text-[20px] lg:my-2 text-[#000] font-medium capitalize leading-5 my-1">
          Medical professionals to know health advices
        </h1>
        <p className="text-sm lg:text-xl text-[12px] text-[#0000007e] font-medium leading-4">
          Wash your hands frequently, especially before eating and after using
          the restroom. Practice good hygiene to minimize the risk of spreading
          or contracting infections.
        </p>
      </div>
    </div>
  );
};

export default Banner;
