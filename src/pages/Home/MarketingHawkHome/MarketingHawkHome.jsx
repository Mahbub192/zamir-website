import image1 from "../../../assets/MarketingHawkHome/MarketingHawkHome1.jpg";

const MarketingHawkHome = () => {
  return (
    <div>
      <div className="flex items-center justify-between container mx-auto py-28">
        <div className="w-1/2">
          <h1 className="text-6xl text-blue-500 font-bold">What We Do!</h1>
          <h1 className="mt-2 text-4xl font-bold text-purple-500 mt-5">
            <span className="">We’re Marketing Hawk Agency</span>
          </h1>
          <p className="text-lg mt-5 text-gray-500 text-justify">
            Marketing Hawk is basically highly experienced in Google
            advertising, Facebook advertising, and Google Analytics. That works
            for worldwide clients.
          </p>
          <p className="text-lg mt-5 text-gray-500 text-justify">
            It goes from a young start-up company to brands in various
            industries. We know how to turn a young start-up company into a
            brand. We are experienced geniuses and marketing strategists.
          </p>
          <p className="text-lg mt-5 text-gray-500 text-justify">
            Our main job is to generate Leads for Local Businesses. And increase
            the Sales of an E-commerce Business. We will ensure your progress in
            generating Leads, excellent CTR, Higher Conversion Rates, Lower
            Prices, and ROI.
          </p>
          <p className="text-lg mt-5 text-gray-500 text-justify">
            Our main job is to generate Leads for Local Businesses. And increase
            the Sales of an E-commerce Business. We will ensure your progress in
            generating Leads, excellent CTR, Higher Conversion Rates, Lower
            Prices, and ROI.
          </p>
          <div className=" mx-auto mt-10">
            <button className="flex items-center gap-3 text-white bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-lg px-5 py-2 rounded-lg">Get a Project! Contact Us </button>
          </div>
        </div>
        <div className="w-1/2">
          <img className="px-10 mx-auto" src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MarketingHawkHome;
