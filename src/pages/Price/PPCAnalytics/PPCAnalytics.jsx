import { FaArrowRightLong } from "react-icons/fa6";
import ppcAnalytic from "../../../assets/Price/PPCAnalytics/ppc.png";
import { GoCheckCircleFill } from "react-icons/go";
import PPCAnalyticsTracking from "./PPCAnalyticsTracking";
import PPCAnalyticsServices from "./PPCAnalyticsServices";
import PPCPrice from "./PPCPrice";
import MyInfo from "../../Home/MyInfo/MyInfo";
import AboutFrom from "../../Portfolio/GoogleSearchAd/AboutFrom";



const PPCAnalytics = () => {
  return (
    <div className="">
      <div className="bg-gray-200 py-20 text-center text-5xl font-bold font-serif">
        <h1>PPC Analytics Services</h1>
      </div>

      <div className="container mx-auto my-20">
      <div className="flex justify-center items-center ">
        <div className="w-1/2">
          <img className="w-[650px]" src={ppcAnalytic} alt="" />
        </div>
        <div className="w-1/2">
          <div className="w-4/5">
            <h3 className="text-4xl font-bold text-justify">
            Search Engine Optimization (SEO) is important for every business.
            </h3>
            <h1 className="text-3xl my-6">
            Harnessing the power of SEO can:
            </h1>
            <ul className="leading-loose text-xl">
              <li className="flex items-center gap-5 "> <span className="text-orange-400"><GoCheckCircleFill></GoCheckCircleFill></span> Increase organic traffic to your site</li>
              <li className="flex items-center gap-5 "><span className="text-orange-400"><GoCheckCircleFill></GoCheckCircleFill></span>
              Increase the number of conversion actions on your site (purchases, downloads, etc.)
              </li>
              <li className="flex items-center gap-5 "><span className="text-orange-400"><GoCheckCircleFill></GoCheckCircleFill></span> Build awareness for your brand</li>
              <li className="flex items-center gap-5 "><span className="text-orange-400"><GoCheckCircleFill></GoCheckCircleFill></span>Give you an advantage over competitors on a local or national level</li>
            </ul>
          </div>
          <div className="mt-16">
            <button className="px-6 py-3 bg-violet-600 text-white text-xl font-bold flex justify-center items-center gap-3 rounded-2xl ">Get a Free Consultation <span><FaArrowRightLong/></span></button>
          </div>
        </div>
      </div>
      </div>
      <PPCAnalyticsTracking />
      <PPCAnalyticsServices />
      <PPCPrice />
      <div className="mt-20">
        <h1 className="text-5xl font-bold text-center font-serif mt-36">About</h1>
      <AboutFrom />
      </div>
    </div>
  );
};

export default PPCAnalytics;
