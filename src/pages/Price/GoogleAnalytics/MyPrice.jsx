import service1 from "../../../assets/OurService/service1.png";

const MyPrice = () => {
  return (
    <div className="mt-10 container mx-auto">
      <div>
        <h1 className="text-center font-bold font-serif text-5xl">My Price</h1>
        <h3 className="text-center font-bold font-serif text-3xl mt-4">
          How Much I Charge?
        </h3>
      </div>
      <div className="flex items-center justify-around mt-20">
        <div className="w-3/12 bg-white p-5 shadow-2xl rounded-lg">
          <img className="w-36 " src={service1} alt="" />
          <h3 className="text-2xl font-semibold font-serif mt-2">
            Google PPC Ads
          </h3>
          <h1 className="mt-3">
            <span className="text-xl font-bold">Basic</span>{" "}
            <span className="text-2xl font-bold text-orange-500 ">
              $99(7days)
            </span>
          </h1>
          <ul className="list-disc mt-6 leading-loose pl-5 text-lg">
            <li>Gads Setup</li>
            <li>Keyword Research</li>
            <li>Multiple Ads Copy</li>
            <li>Conversion Setup</li>
            <li>Sales Funnel</li>
            <li>Ads Optimizaion</li>
            <li>Negetive Keyword</li>
          </ul>
          <div className="mt-10">
            <button className="text-xl font-medium border-2 px-4 py-1 bg-blue-400 rounded-xl text-white hover:bg-blue-500">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-3/12 bg-white p-5 shadow-2xl rounded-lg">
          <img className="w-36 " src={service1} alt="" />
          <h3 className="text-2xl font-semibold font-serif mt-2">
            Google PPC Ads
          </h3>
          <h1 className="mt-3">
            <span className="text-xl font-bold">Standard</span>{" "}
            <span className="text-2xl font-bold text-orange-500 ">
              $99(7days)
            </span>
          </h1>
          <ul className="list-disc mt-6 leading-loose pl-5 text-lg">
            <li>Ads Setup</li>
            <li>Audience Create</li>
            <li>Sales Funnel</li>
            <li>Data Driven Decision</li>
            <li>Pixel & CAPI Setup</li>
            <li>Ads Optimizaion</li>
            <li>A/B Testing</li>
          </ul>
          <div className="mt-10">
            <button className="text-xl font-medium border-2 px-4 py-1 bg-blue-400 rounded-xl text-white hover:bg-blue-500">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-3/12 bg-white p-5 shadow-2xl rounded-lg">
          <img className="w-36 " src={service1} alt="" />
          <h3 className="text-2xl font-semibold font-serif mt-2">
            Google PPC Ads
          </h3>
          <h1 className="mt-3">
            <span className="text-xl font-bold">Premium</span>{" "}
            <span className="text-2xl font-bold text-orange-500 ">
              $99(7days)
            </span>
          </h1>
          <ul className="list-disc mt-6 leading-loose pl-5 text-lg">
            <li>Ads Setup</li>
            <li>Audience Create</li>
            <li>Sales Funnel</li>
            <li>Data Driven Decision</li>
            <li>Pixel & CAPI Setup</li>
            <li>Ads Optimizaion</li>
            <li>A/B Testing</li>
          </ul>
          <div className="mt-10">
            <button className="text-xl font-medium border-2 px-4 py-1 bg-blue-400 rounded-xl text-white hover:bg-blue-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPrice;
