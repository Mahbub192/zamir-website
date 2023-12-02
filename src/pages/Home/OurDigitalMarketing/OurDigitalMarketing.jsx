import home2 from "../../../assets/AboutMySelf/home2.png";
import home3 from "../../../assets/AboutMySelf/home3.jpg";
import { FaArrowRight, FaGripfire } from "react-icons/fa6";
const OurDigitalMarketing = () => {
  return (
    <div className=" py-20 bg-gray-300 mt-28">
      <p className="flex items-center gap-3 text-xl font-bold font-serif container mx-auto mt-10">
        <span className="text-orange-500 text-5xl">
          <FaGripfire />
        </span>{" "}
        <span className="text-2xl uppercase font-bold">
          We’re Passionate about Digital Marketing Solutions!
        </span>
      </p>
      <div className="container mx-auto flex gap-20 items-center ">
        <div className="w-2/4">
          <div>
            <h1 className="text-6xl font-semibold py-5 tracking-wide leading-normal ">
              Our Digital <br /> Marketing Philosophy
            </h1>
            <ul className="list-disc ">
              <li className="tracking-wide text-lg text-justify text-black mt-5">
                <span className="font-bold text-xl ">Marketing Philosophy</span>
                <p>
                  We believe that the best digital marketing is honest,
                  transparent, and helpful. We never use bait-and-switch tactics
                  or misleading advertising. Instead, we focus on creating
                  high-quality content and experiences that provide real value
                  to our clients&apos; customers.
                </p>
              </li>
              <li className="tracking-wide text-lg text-justify text-black mt-5">
                <span className="font-bold text-xl ">Good Communicator</span>
                <p>
                  A good marketing communicator is someone who can effectively
                  convey a marketing message to a target audience. They must be
                  able to understand the needs and wants of the audience and
                  then create and deliver a message that is relevant and
                  persuasive. We know we’re honest and excellent communicators.
                  It is easy to work with you.
                </p>
              </li>
              <li className="tracking-wide text-lg text-justify text-black mt-5 ">
                <span className="font-bold text-xl ">Our Service</span>
                <p>
                  We believe that digital marketing should be accessible to
                  businesses of all sizes. That&apos;s why we offer a wide range
                  of services, from website design to Google advertising and
                  major social media advertising platforms like Facebook.
                  Analytics & Reporting provides valuable insights that can help
                  businesses improve their websites, marketing campaigns, and
                  overall business performance. That&apos;s why we are offering
                  Google Analytics, Pixel, and Conversion APIs. SEO is also
                  important for online businesses. Because it can help to
                  increase website traffic, lead generation, sales, brand
                  awareness, and trust. That’s why we’re offering SEO services
                </p>
              </li>
            </ul>
            <div className=" mt-5 py-1 ">
              <button className="flex items-center gap-3 text-white bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-lg px-5 py-2 rounded-lg">
                See All Services{" "}
                <span>
                  <FaArrowRight></FaArrowRight>
                </span>
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
