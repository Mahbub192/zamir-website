import homeImage from "../../../assets/AboutMySelf/AboutMy.jpg";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import {  FaHandsClapping } from "react-icons/fa6";

const AboutMySelf = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration
      easing: 'ease-in-out', // easing for animation
      once: true, // whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <div className="container mx-auto ">
      <div className="flex flex-wrap  mt-20 mx-auto items-center justify-around">
        <div data-aos="fade-right" className="w-1/2">
          <img className="w-full h-[620px] rounded-xl" src={homeImage} alt="" />
         
        </div>
        <div className="w-1/2  pl-14 relative">
        <div data-aos="zoom-in-up"  data-aos-duration="1500" className=" bg-white shadow-2xl p-10 pt-2 rounded-2xl absolute -top-80">
          <h1 className="text-2xl font-bold flex items-center"> <span className="text-orange-400 pr-3 text-3xl"><FaHandsClapping></FaHandsClapping></span>HELLO!</h1>
          <h1 className="text-xl font-bold my-4 leading-relaxed tracking-wide">
            THIS IS JAMIR THE FOUNDER AND CEO  AT &quot;Marketing Hawk&quot;{" "}
          </h1>
          <p className="leading-relaxed mb-2 text-xl font-serif">
          The &quot;Marketing Hawk&quot; has worked as an Advertising manager, SEO, Web Analytics, and full-stack Web Development service as a data-driven Digital Marketing agency in Bangladesh for a long time with an Experienced Team.
          </p>

          <div>
            <ul className="list-disc px-5 my-6">
              <li className="leading-relaxed text-lg">
              It’s worked with worldwide clients, from young start-up companies to brands in a variety of industries. Our long-term experience can transform a young start-up company into a brand that works with clients worldwide. Our core task is generating leads for local businesses. We will confirm your generating leads, excellent CTR, upper conversion rate, lower price, and progression of ROI and ROAS.
              </li>
            </ul>
            <h3 className="text-lg leading-relaxed font-serif">
              We know what we are doing. We are honest, excellent communicators,
              and easy to work with, and we will try to take ownership of a
              project.
            </h3>
            <h1 className="text-xl font-bold mt-3">
              WE HELP BUSINESS OWNERS JUST LIKE YOU
            </h1> 
            <ul className="list-disc  px-5 my-6">
              <li>
              As a data-driven digital marketer, we have the skills and experience needed to help businesses overcome these challenges and succeed online.
              </li>
              <li>Let&apos;s see exactly what we&apos;re doing and how much we&apos;re changing your business!</li>
            </ul>
            <div className=" mt-5 py-1 ">
              <button className="text-white bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-lg px-5 py-2 rounded-lg">
              GET A PROJECT? CONTACT US!
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMySelf;
