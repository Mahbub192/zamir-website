import { Link } from "react-router-dom";

import homeImage from "../../../assets/AboutMySelf/homeImage.jpg";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useTypewriter } from "react-simple-typewriter";

const AboutMySelf = () => {
  const [text1] = useTypewriter({
    words: ["Marketing Team Leader\""],
    loop: 30,
  });
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration
      easing: 'ease-in-out', // easing for animation
      once: true, // whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <>
      <div className="flex mt-20 w-4/6 mx-auto items-center justify-around">
        <div data-aos="fade-right" className="w-1/2">
          <img className="h-[500px]" src={homeImage} alt="" />
         
        </div>
        <div data-aos="zoom-in-up"  data-aos-duration="1500" className="w-1/2">
          <h1 className="text-2xl font-bold">HELLO!</h1>
          <h1 className="text-lg font-bold my-4 leading-relaxed tracking-wide">
            THIS IS <Link className="text-blue-400 underline">JAMIR</Link>, THE CEO AND MARKETING TEAM LEADER AT THE &quot;Marketing Hawk&quot;{" "}
          </h1>
          <p className="leading-relaxed mb-3 text-lg">
            Marketing Hawk has worked as a Google Adwords manager and in Web
            Analytics [ Google Analytics 4 ] for a data-driven digital marketing
            agency in Bangladesh for a long time with the
          </p>
          <p className="underline text-blue-400 text-xl">Expertise Team.</p>

          <div>
            <ul className="list-disc px-5 my-6">
              <li className="leading-relaxed">
                It’s worked with worldwide clients, from young start-up
                companies to brands in a variety of industries. Our core
                strength is generating leads for local businesses. I’ll confirm
                your generated leads, excellent CTR, upper conversion rate,
                lower price, and progressing ROI. You Can Trust Your Budget With
                &apos;Marketing Hawk&apos;
              </li>
            </ul>
            <h3 className="text-lg leading-relaxed">
              We know what we are doing. We are honest, excellent communicators,
              and easy to work with, and we will try to take ownership of a
              project.
            </h3>
            <h1 className="text-xl font-bold mt-3">
              WE HELP BUSINESS OWNERS JUST LIKE YOU
            </h1> 
            <div className=" mt-5 ">
              <button className="text-white bg-red-400 font-bold text-lg px-5 py-2 rounded-lg">
                Message Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMySelf;
