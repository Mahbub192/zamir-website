import service1 from "../../../assets/OurService/service1.png";
import service2 from "../../../assets/OurService/service2.png";
import service3 from "../../../assets/OurService/service3.png";
import service4 from "../../../assets/OurService/service4.png";
import service5 from "../../../assets/OurService/service5.png";
import service6 from "../../../assets/OurService/service6.png";
import service7 from "../../../assets/OurService/service1.png";

import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos';
import { useEffect } from "react";

const DigitalMarketingServices = () => {
  const allService = [
    {
      id: 1,
      image: service1,
      position: "SEO",
      info: "Optimization that improves your rankings & your branding.",
      learnMore: "learnMore",
    },
    {
      id: 2,
      image: service2,
      position: "WordPress Design",
      info: "Websites fully customized & developed with SEO in mind.",
      learnMore: "learnMore",
    },
    {
      id: 3,
      image: service3,
      position: "Content Creation",
      info: "Content that boosts your SEO & brand collateral.",
      learnMore: "learnMore",
    },
    {
      id: 4,
      image: service4,
      position: "Google Analytics",
      info: "Track your digital marketing performance with ease.",
      learnMore: "learnMore",
    },
    {
      id: 5,
      image: service5,
      position: "Google Ads",
      info: "Campaign management that works in tandem with your SEO strategy.",
    },
    {
      id: 6,
      position: "Email Marketing",
      image: service6,
      info: "Email campaigns that are beautiful & work within a holistic marketing strategy.",
    },
    {
      id: 7,
      position: "Social Media",
      image: service7,
      info: "Increase engagement & brand recognition with thoughtful social media campaigns.",
    },
  ];

  useEffect(() => {
    AOS.init({
      // Global settings here
    });
  }, []);

  return (
    <div className="">
      <h1 className="text-5xl font-bold font-serif text-center mt-20">
        Digital Marketing Services
      </h1>
      <p className="w-3/5 mx-auto text-center text-xl mt-10">
        Services that work together to grow your online presence, increase leads
        and conversions, and maximize digital marketing ROI.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-24">
        {
            allService.map((singleService) =><>
            <div data-aos="fade-up" data-aos-duration="2000" key={singleService.id} className="bg-white shadow-2xl rounded-lg">
                <div>
                    <img className="mx-auto" src={singleService?.image} alt="" />
                </div>
                <div>
                    <h1 className="text-2xl text-center font-semibold my-5">{singleService?.position}</h1>
                    <p className="w-2/3 mx-auto text-center text-lg">{singleService?.info}</p>
                    <div className="text-center my-5">
                    <button className="text-xl text-blue-500">{singleService?.learnMore ? singleService.learnMore + ' ->' : ''}</button>
                    </div>
                </div>
            </div>
            </>

            )
        }
      </div>
    </div>
  );
};

export default DigitalMarketingServices;
