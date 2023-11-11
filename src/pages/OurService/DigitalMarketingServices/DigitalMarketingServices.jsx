// import service1 from "../../../assets/OurService/service1.png";
// import service2 from "../../../assets/OurService/service2.png";
// import service3 from "../../../assets/OurService/service3.png";
// import service4 from "../../../assets/OurService/service4.png";
// import service5 from "../../../assets/OurService/service5.png";
// import service6 from "../../../assets/OurService/service6.png";
// import service7 from "../../../assets/OurService/service1.png";
import service8 from "../../../assets/OurService/1.png";
import service9 from "../../../assets/OurService/2.png";
import service10 from "../../../assets/OurService/3.png";
import service11 from "../../../assets/OurService/4.png";
import service12 from "../../../assets/OurService/5.png";
import service13 from "../../../assets/OurService/6.png";
import service14 from "../../../assets/OurService/7.png";
import service15 from "../../../assets/OurService/8.png";

import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos';
import { useEffect } from "react";

const DigitalMarketingServices = () => {
  const allService = [
    {
      id: 1,
      image: service8,
      position: "Google Search Ads ",
      info: "It’s a most powerful advertising platform in the World. Drive qualified traffic to your website and generate leads and sales. ",
      learnMore: "learnMore",
    },
    {
      id: 2,
      image: service9,
      position: "YouTube Ads",
      info: "Reach the right audience with the right message, which matters most.",
      learnMore: "learnMore",
    },
    {
      id: 3,
      image: service10,
      position: "Google Display Ads",
      info: "Increase engagement and brand recognition with a thoughtful display ad campaign.",
      learnMore: "learnMore",
    },
    {
      id: 4,
      image: service11,
      position: "Facebook Ads",
      info: "The most powerful social media advertising platform Drive traffic to your website and generate leads.",
      learnMore: "learnMore",
    },
    {
      id: 5,
      position: "Google Analytics",
      image: service13,
      info: "Understand your customers better with Google Analytics. The power of data is at your fingertips. ",
      learnMore: "learnMore",
    },
    {
      id: 6,
      position: "GA4 Server Side Tracking",
      image: service12,
      info: "Server-side tracking for a more complete and accurate view of your customers. Get the power of data at your fingertips.",
      learnMore: "learnMore",
    },
    {
      id: 7,
      position: "Pixel & Conversion API",
      image: service8,
      info: "Measure your conversions more accurately, even when cookies are blocked.",
      learnMore: "learnMore",
    }
    ,
    {
      id: 8,
      position: "SEO ",
      image: service14,
      info: "We are SEO Expert | Boost Website Ranking & Traffic 📈 | On-Page,Technical SEO",
      learnMore: "learnMore",
    }
    ,
    {
      id: 9,
      position: "Full Stack Development",
      image: service15,
      info: "The power to create complete digital solutions, from front-end to back-end, with SEO in mind",
      learnMore: "learnMore",
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
      <p className="w-4/5 mx-auto text-center text-xl mt-10">
      Marketing Hawk is a full-stack Digital Marketing agency that helps businesses grow their online presence, increase leads and conversions, and maximize their ROI and ROAS.
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
