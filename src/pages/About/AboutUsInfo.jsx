import about12 from "../../assets/AboutMySelf/home3.jpg";
import about13 from "../../assets/AboutMySelf/about12.png";

const AboutUsInfo = () => {
  return (
    <div className="container mx-auto mt-36">
      <h1 className="text-6xl font-bold tracking-wide ">
        Learn More About The Creative And <br /> Innovative Team That Will Help
        Your <br /> Business Grow.
      </h1>
      <div className="flex items-center justify-center my-20">
          <div className="flex relative w-1/2">
            <div>
              <img className="h-96 w-64 rounded-2xl" src={about13} alt="" />
            </div>
            <div className="absolute top-8 left-72 ">
              <img className="h-96 w-72 rounded-2xl" src={about12} alt="" />
            </div>
          </div>
        <div className="w-1/2">
          <p className="text-xl font-semibold text-blue-500">About Us</p>
          <h1 className="text-4xl font-bold my-5">This Is Who We Are</h1>
          <p className=" text-justify text-lg">
            WebnWell is a digital marketing agency focused on bringing maximum
            ROI from investment in digital activities. Our mission is to make
            your digital campaigns more transparent, trustful and authentic so
            that your customers talk, search and shop more from you.{" "}
          </p>
          <p className=" text-justify text-lg mt-3">
            We are building long-term relationships with our clients and we are
            growing with them. We create strategies that are user-oriented and
            results-driven. We also like to measure all of our results and show
            you exactly how cool our campaigns are but in numbers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo;
