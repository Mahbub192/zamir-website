import adding from "/src/assets/GoogleSearchAd/adding.png";
import quickly from "/src/assets/GoogleSearchAd/quickly.png";

const ResultCard = () => {
    return (
        <div className="mt-24">
        <h1 className="text-center text-3xl font-bold mb-6">
          What Result You Will Get{" "}
        </h1>
        <p className="text-center w-4/6 text-lg mx-auto">
          These are some of our amazing previous clients&apos; Google search,
          display, and YouTube ads results.
        </p>

        <div className="my-20">
          <div className="flex flex-wrap items-center justify-around gap-2">
            <div className="w-1/3 bg-white shadow-2xl p-6">
              <img src={adding} alt="" />
              <div className="mt-6">
                <h1 className="my-3 text-xl font-bold ">
                  AUDIT AND OPTIMAZATION
                </h1>
                <p className="text-justify">
                  It was a project of the Google Search Ads Audit and
                  Optimization Project. Good results came after about six to
                  seven days, and many clients were happy.{" "}
                </p>
              </div>
            </div>
            <div className="w-1/3 bg-white shadow-2xl p-6">
              <img src={quickly} alt="" />
              <div className="mt-6">
                <h1 className="my-3 text-xl font-bold ">
                  QUICKLY CAMPAIGN SETUP
                </h1>
                <p className="text-justify">
                  It was a project of the Google Search Ads Audit and
                  Optimization Project. Good results came after about six to
                  seven days, and many clients were happy.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-20">
          <div className="flex flex-wrap items-center justify-around gap-2">
            <div className="w-1/3 bg-white shadow-2xl p-6">
              <img src={adding} alt="" />
              <div className="mt-6">
                <h1 className="my-3 text-xl font-bold ">
                  AUDIT AND OPTIMAZATION
                </h1>
                <p className="text-justify">
                  It was a project of the Google Search Ads Audit and
                  Optimization Project. Good results came after about six to
                  seven days, and many clients were happy.{" "}
                </p>
              </div>
            </div>
            <div className="w-1/3 bg-white shadow-2xl p-6">
              <img src={quickly} alt="" />
              <div className="mt-6">
                <h1 className="my-3 text-xl font-bold ">
                  QUICKLY CAMPAIGN SETUP
                </h1>
                <p className="text-justify">
                  It was a project of the Google Search Ads Audit and
                  Optimization Project. Good results came after about six to
                  seven days, and many clients were happy.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-red-400 text-center my-10">
            Don&apos;t wait! Order now and start growing your online business
            today.
          </h1>
          <div className="mx-auto w-48">
            <button className="bg-blue-500 text-white px-5 py-3 text-lg font-bold rounded-lg ">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    );
};

export default ResultCard;