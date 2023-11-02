import home2 from "../../../assets/AboutMySelf/home2.png";
import home3 from "../../../assets/AboutMySelf/home3.jpg";
import { FaArrowRight, FaGripfire } from "react-icons/fa6";
const OurDigitalMarketing = () => {
  return (
    <div className=" py-20 bg-gray-300 mt-28">
      <div className="container mx-auto flex gap-20 items-center ">
        <div className="w-2/4">
          <div>
            <p className="flex items-center gap-3 text-xl font-bold font-serif">
              <span className="text-orange-500 text-5xl"><FaGripfire /></span>{" "}
              <span className="text-2xl uppercase font-bold">We are passionate about digital marketing.</span>
            </p>
            <h1 className="text-6xl font-semibold py-5 tracking-wide leading-normal ">
              Our Digital <br /> Marketing <br /> Philosophy
            </h1>
            <ul className="list-disc ">
            <li className="tracking-wide text-lg text-justify text-black ">
            At [Marketing Hawk], we believe that the internet should be a force for good. That&apos;s why our mission is to help businesses use digital marketing to reach their target audience in a way that is informative, engaging, and ethical.
            </li>
            <li  className="tracking-wide text-lg mt-2 text-justify text-black ">We believe that the best digital marketing is honest, transparent, and helpful. We never use bait-and-switch tactics or misleading advertising. Instead, we focus on creating high-quality content and experiences that provide real value to our clients&apos; customers.</li>
            <li  className="tracking-wide text-lg mt-2 text-justify text-black ">We also believe that digital marketing should be accessible to businesses of all sizes. That&apos;s why we offer a wide range of services, from website design to major advertising platforms like Google or Facebook, SEO, and social media campaigns. We work with our clients to develop a custom marketing plan that meets their specific needs and budget.</li>
            <li  className="tracking-wide text-lg mt-2 text-justify text-black ">We are excited to be a part of the digital marketing community. We are committed to using our skills to make digital marketing a better place.</li>
            </ul>
            <div className=" mt-5 py-1 ">
              <button className="flex items-center gap-3 text-white bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-lg px-5 py-2 rounded-lg">
              MEET OUR TEAM <span><FaArrowRight></FaArrowRight></span>
              </button>
            </div>
          </div>
        </div>
        <div className="w1/4 pt-52">
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
