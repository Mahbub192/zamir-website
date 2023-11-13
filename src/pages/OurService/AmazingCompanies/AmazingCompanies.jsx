import company from "../../../assets/OurService/company.png";

const AmazingCompanies = () => {
  return (
    <div className="container mx-auto">
     <div className="  text-center">
     <h1 className="mt-20 text-4xl font-bold">
      We’ve Had The Privilege Of Working With Some Amazing Companies 
      </h1>
      <p className="w-3/4 mx-auto text-xl mt-5 font-semibold text-gray-500">We’ve had the privilege of working with some of the world’s most innovative and successful companies. We’re proud to have helped these companies achieve their marketing goals, and we’re confident that we can do the same for you.</p>
     </div>
      <img className="mt-10 mx-auto w-full" src={company} alt="" />
    </div>
  );
};

export default AmazingCompanies;
