import {
  FaFileVideo,
  FaGaugeSimpleHigh,
  FaInfinity,
  FaLocationDot,
  FaSearchengin,
} from "react-icons/fa6";

const PPCAnalyticsTracking = () => {
  return (
    <div className="py-24 container mx-auto">
      <h1 className="text-center text-5xl">
        A customized SEO Strategy that incorporates:
      </h1>
      <div className="flex flex-wrap justify-between mt-20">
        <div className="bg-gray-300 py-20 px-10  w-72 text-center">
          <p className="text-6xl pb-6 rounded-full">
            <FaLocationDot className="mx-auto bg-[#a64ac9] px-4 py-2 rounded-full font-bold text-white"></FaLocationDot>
          </p>

          <h1 className="text-2xl font-bold ">
            Local or National Optimization
          </h1>
          <p className="text-xl mt-5">Google My Business pages</p>
          <p className="text-xl mt-5">Local signals</p>
          <p className="text-xl mt-5">
            Keyword research based on regional or national metrics
          </p>
        </div>
        <div className="bg-gray-300 py-20 px-10  w-72 text-center">
          <p className="text-6xl pb-6 rounded-full">
            <FaSearchengin className="mx-auto bg-[#fccd04] px-4 py-2 rounded-full font-bold text-white"></FaSearchengin>
          </p>

          <h1 className="text-2xl font-bold ">SEO Audits</h1>
          <p className="text-xl mt-5">Full site crawl</p>
          <p className="text-xl mt-5">
            Different audit levels – basic, advanced and robust
          </p>
        </div>
        <div className="bg-gray-300 py-20 px-10  w-72 text-center">
          <p className="text-6xl pb-6 rounded-full">
            <FaInfinity className="mx-auto bg-[#ffb48f] px-4 py-2 rounded-full font-bold text-white"></FaInfinity>
          </p>

          <h1 className="text-2xl font-bold ">
            On-Page & Off-Page Optimization
          </h1>
          <p className="text-xl mt-5">Keyword targeting</p>
          <p className="text-xl mt-5">Title & Meta Tags</p>
          <p className="text-xl mt-5">Content</p>
          <p className="text-xl mt-5">Backlinks</p>
          <p className="text-xl mt-5">EAT Strategy</p>
        </div>
        <div className="bg-gray-300 py-20 px-10  w-72 text-center">
          <p className="text-6xl pb-6 rounded-full">
            <FaGaugeSimpleHigh className="mx-auto bg-[#443791] px-4 py-2 rounded-full font-bold text-white"></FaGaugeSimpleHigh>
          </p>

          <h1 className="text-2xl font-bold ">Technical Optimization</h1>
          <p className="text-xl mt-5">Site speed</p>
          <p className="text-xl mt-5">Structured data</p>
          <p className="text-xl mt-5">Link fixes & more</p>
        </div>
        <div className="bg-gray-300 py-20 px-10  w-72 text-center">
          <p className="text-6xl pb-6 rounded-full">
            <FaFileVideo className="mx-auto bg-[#17e9e0] px-4 py-2 rounded-full font-bold text-white"></FaFileVideo>
          </p>

          <h1 className="text-2xl font-bold ">SEO Guides</h1>
          <p className="text-xl mt-5 leading-loos">
            A guide for how YOU can take control of your site’s SEO after
            Digital Dynamo’s optimizations have been implemented
          </p>
        </div>
      </div>
    </div>
  );
};

export default PPCAnalyticsTracking;
