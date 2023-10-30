import service1 from "../../../assets/OurService/service1.png";

const PPCPrice = () => {
  return (
    <div className="mt-10 container mx-auto">
      <div>
        <h1 className="text-center font-bold font-serif text-5xl">My Price</h1>
        <h3 className="text-center font-bold font-serif text-3xl mt-4">
          How Much I Charge?
        </h3>
      </div>
      <div className="flex items-center justify-around mt-20">
        <div className="w-3/12 bg-white p-5 shadow-xl rounded-lg">
          <img className="w-36 " src={service1} alt="" />
          <h3 className="text-2xl font-semibold font-serif mt-2">
            Google PPC Ads
          </h3>
          <h1 className="mt-3">
            <span className="text-xl font-bold">Basic</span>{" "}
            <span className="text-2xl font-bold text-orange-500 ">
            $2,000-$3,000
            </span>
          </h1>
          <ul className="list-disc mt-6 leading-loose pl-5 text-lg">
            <li>Basic Audit</li>
            <li>Basic Strategy</li>
            <li>Basic Fixes</li>
            <li>Basic guide for SEO</li>
            <li>Good for: smaller sites, site owners who are comfortable doing their own development work, gaining small wins in the short term and a few bigger wins in the long term</li>
          </ul>
          <div className="mt-10">
            <button className="text-xl font-medium border-2 px-4 py-1 bg-blue-400 rounded-xl text-white hover:bg-blue-500">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-3/12 bg-white p-5 shadow-xl rounded-lg">
          <img className="w-36 " src={service1} alt="" />
          <h3 className="text-2xl font-semibold font-serif mt-2">
            Google PPC Ads
          </h3>
          <h1 className="mt-3">
            <span className="text-xl font-bold">Standard</span>{" "}
            <span className="text-2xl font-bold text-orange-500 ">
            $3,100-$5,000
            </span>
          </h1>
          <ul className="list-disc mt-6 leading-loose pl-5 text-lg">
            <li>Advanced Audit</li>
            <li>Advanced Strategy</li>
            <li>Advanced Fixes</li>
            <li>One guide & a video for SEO</li>
            <li>Good for: small and medium sites, site owners who want to do their own development or need outside help, gaining small wins in the short term, developing a long-term SEO strategy</li>
          </ul>
          <div className="mt-10">
            <button className="text-xl font-medium border-2 px-4 py-1 bg-blue-400 rounded-xl text-white hover:bg-blue-500">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-3/12 bg-white p-5 shadow-xl rounded-lg">
          <img className="w-36 " src={service1} alt="" />
          <h3 className="text-2xl font-semibold font-serif mt-2">
            Google PPC Ads
          </h3>
          <h1 className="mt-3">
            <span className="text-xl font-bold">Premium</span>{" "}
            <span className="text-2xl font-bold text-orange-500 ">
            $5100-$10,000
            </span>
          </h1>
          <ul className="list-disc mt-6 leading-loose pl-5 text-lg">
            <li>Robust Audit</li>
            <li>Robust Strategy</li>
            <li>Robust Fixes</li>
            <li>Multiple guides & videos for SEO</li>
            <li>Good for: small, medium and large sites, site owners who need help with development work, gaining robust gains in rankings more quickly, building for long-term success</li>
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

export default PPCPrice;
