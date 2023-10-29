import { FaArrowRightLong } from "react-icons/fa6";
import googleAnalytic from "../../../assets/Price/GoogleAnalytics/googleAnalytic.png";
import GoogleAnalyticsTracking from "./GoogleAnalyticsTracking";
import { GoCheckCircleFill } from "react-icons/go";
import GoogleAnalyticsServices from "./GoogleAnalyticsServices";


const GoogleAnalytics = () => {
  return (
    <div className="">
      <div className="bg-gray-200 py-20 text-center text-5xl font-bold font-serif">
        <h1>Google Analytics Services</h1>
      </div>

      <div className="container mx-auto my-20">
      <div className="flex justify-center items-center ">
        <div className="w-1/2">
          <img className="w-[650px]" src={googleAnalytic} alt="" />
        </div>
        <div className="w-1/2">
          <div className="">
            <h3 className="text-4xl font-bold text-justify">
              Google Analytics is a powerful tool every business should leverage
              to measure digital marketing activities.
            </h3>
            <h1 className="text-3xl my-6">
              Harnessing the power of Google Analytics helps business owners:
            </h1>
            <ul className="leading-loose text-xl">
              <li className="flex items-center gap-2 "> <span className="text-orange-400"><GoCheckCircleFill></GoCheckCircleFill></span> Track the efficiency of their website</li>
              <li className="flex items-center gap-2 "><span className="text-orange-400"><GoCheckCircleFill></GoCheckCircleFill></span>
                Determine if they are reaching the right audience with their
                marketing tactics
              </li>
              <li className="flex items-center gap-2 "><span className="text-orange-400"><GoCheckCircleFill></GoCheckCircleFill></span> Figure out what channels are attracting the most users</li>
              <li className="flex items-center gap-2 "><span className="text-orange-400"><GoCheckCircleFill></GoCheckCircleFill></span>Improve the ROI of their marketing initiatives</li>
            </ul>
          </div>
          <div className="mt-16">
            <button className="px-6 py-3 bg-violet-600 text-white text-xl font-bold flex justify-center items-center gap-3 rounded-2xl ">Get a Free Consultation <span><FaArrowRightLong/></span></button>
          </div>
        </div>
      </div>
      </div>
      <GoogleAnalyticsTracking/>
      <GoogleAnalyticsServices />
    </div>
  );
};

export default GoogleAnalytics;
