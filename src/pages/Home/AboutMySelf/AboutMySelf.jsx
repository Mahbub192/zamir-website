// import homeImage from "../../../assets/AboutMySelf/AboutMy.jpg";
import homeImage from "../../../assets/AboutMySelf/bal12.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaHandsClapping } from "react-icons/fa6";

const AboutMySelf = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration
      easing: "ease-in-out", // easing for animation
      once: true, // whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <div className="container mx-auto mt-20 ">
      <h1 className="text-blue-400 text-5xl font-bold font-serif text-center">
              Marketing Hawk Agency: Your Trusted Full-Stack Digital Marketing
              Partner
            </h1>
      <div className="flex flex-wrap mt-10  mx-auto items-center justify-around">
        <div data-aos="fade-right" className="w-1/2">
         
          <div>
            
            <h1 className="text-amber-700 text-4xl font-bold mt-4 font-serif">YOUR SUCCESS</h1>
            <h1 className="text-4xl font-bold mt-4 font-serif">IS OUR DIGITAL MISSION & PASSION</h1>
            {/* <h1 className="text-sky-400 font-bold text-4xl font-serif mt-4">DIGITAL MISSION & PASSION</h1> */}
            <p className="mt-5 text-xl font-bold text-justify">Marketing Hawk Agency is a full-stack Digital Marketing agency that helps businesses of all sizes achieve their Online Marketing Goals. </p>
            <p className="mt-4 text-justify"><span className="text-xl font-bold">We Believe:</span> We believe that Digital Marketing should be accessible to businesses of all sizes. A full-stack Digital Marketing agency can provide a one-stop shop for all of the client`&apos;s Digital Marketing needs. This can save the client time and hassle. That`&apos;s why we offer a wide range of services. </p>
            <p className="text-lg font-bold mt-5">Including: </p>
            <ul className="list-disc leading-loose pl-10">
              <li>Website design & development.</li>
              <li>Google Advertising</li>
              <li>Facebook Advertising</li>
              <li>Search engine optimization (SEO)</li>
              <li>Google Analytics</li>
              <li>GA4 Server - Side Tracking</li>
              <li>Pixel and Conversion API</li>
              <li>Analytics and Reporting </li>
            </ul>

            <div>
              <h1 className="text-sky-500 text-3xl font-bold mt-5">We Help Business Owners Just Like You</h1>
              <p className="mt-2 text-justify">At Marketing Hawk Agency, we take a holistic approach to Digital Marketing. We believe that the best results are achieved when all of your Digital Marketing channels are working together in concert. That's why we work with our clients to develop a comprehensive Digital Marketing strategy that is tailored to their specific needs and goals.</p>
              <p className="mt-3 text-justify">If you&apos;re looking for a full-stack Digital Marketing partner that can help you achieve your online marketing goals, then Marketing Hawk is the right choice for you. </p>
              <div className="mt-10">
                <button className="text-white bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-lg px-5 py-2 rounded-lg">Get a Project! Contact Us </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-10 ">
           <img className="w-full h-[750px] rounded-xl" src={homeImage} alt="" />
           <div className="mt-5 text-center">
            <h1 className="text-sky-500 text-3xl font-medium">Jamir Khan </h1>
            <h1 className="text-xl mt-2">Founder & Chief Executive Officer</h1>
           </div>
          {/* <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className=" bg-white shadow-2xl p-10 pt-2 rounded-2xl absolute -top-80"
          >
            <h1 className="text-2xl font-bold flex items-center">
              {" "}
              <span className="text-orange-400 pr-3 text-3xl">
                <FaHandsClapping></FaHandsClapping>
              </span>
              HELLO!
            </h1>
            <h1 className="text-xl font-bold my-4 leading-relaxed tracking-wide">
              THIS IS JAMIR THE FOUNDER AND CEO AT &quot;Marketing Hawk&quot;{" "}
            </h1>
            <p className="leading-relaxed mb-2 text-xl font-serif">
              The &quot;Marketing Hawk&quot; has worked as an Advertising
              manager, SEO, Web Analytics, and full-stack Web Development
              service as a data-driven Digital Marketing agency in Bangladesh
              for a long time with an Experienced Team.
            </p>

            <div>
              <ul className="list-disc px-5 my-6">
                <li className="leading-relaxed text-lg">
                  It’s worked with worldwide clients, from young start-up
                  companies to brands in a variety of industries. Our long-term
                  experience can transform a young start-up company into a brand
                  that works with clients worldwide. Our core task is generating
                  leads for local businesses. We will confirm your generating
                  leads, excellent CTR, upper conversion rate, lower price, and
                  progression of ROI and ROAS.
                </li>
              </ul>
              <h3 className="text-lg leading-relaxed font-serif">
                We know what we are doing. We are honest, excellent
                communicators, and easy to work with, and we will try to take
                ownership of a project.
              </h3>
              <h1 className="text-xl font-bold mt-3">
                WE HELP BUSINESS OWNERS JUST LIKE YOU
              </h1>
              <ul className="list-disc  px-5 my-6">
                <li>
                  As a data-driven digital marketer, we have the skills and
                  experience needed to help businesses overcome these challenges
                  and succeed online.
                </li>
                <li>
                  Let&apos;s see exactly what we&apos;re doing and how much
                  we&apos;re changing your business!
                </li>
              </ul>
              <div className=" mt-5 py-1 ">
                <button className="text-white bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-lg px-5 py-2 rounded-lg">
                  GET A PROJECT? CONTACT US!
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMySelf;
