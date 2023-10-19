import home2 from "../../../assets/AboutMySelf/home2.png";
import home3 from "../../../assets/AboutMySelf/home3.jpg";
import { FaGripfire } from "react-icons/fa6";
const OurDigitalMarketing = () => {
  return (
    <div className=" py-20 bg-gray-300 mt-5">
      <div className="container mx-auto flex gap-20 items-center">
        <div className="w-2/4">
          <div>
            <p className="flex items-center gap-3 text-xl font-bold font-serif">
              <span className="text-orange-500 text-5xl"><FaGripfire /></span>{" "}
              <span className="text-2xl uppercase font-bold">We are passionate about digital marketing.</span>
            </p>
            <h1 className="text-6xl font-semibold py-5 tracking-wide leading-normal ">
              Our Digital <br /> Marketing <br /> Philosophy
            </h1>
            <p className="tracking-wide text-xl text-justify text-black ">
            &apos;Marketing Hawk&apos; is a digital marketing agency focused on bringing
              maximum ROI from investment in digital activities. Our mission is
              to make your digital campaigns more transparent, trustful and
              authentic so that your customers talk, search and shop more from
              you. We are building long-term relationships with our clients and
              we are growing with them. We create strategies that are
              user-oriented and results-driven. We also like to measure all of
              our results and show you exactly how cool our campaigns are but in
              numbers.
            </p>
          </div>
        </div>
        <div className="w1/4">
          <div className="flex gap-10">
            <img className="w-2/4 h-[400px] rounded-2xl" src={home3} alt="" />
            <div className="w-2/4  pt-5">
            <img className="  h-[300px] rounded-2xl " src={home2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDigitalMarketing;
