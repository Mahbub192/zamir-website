import googleAllImage from "../../../assets/GoogleSearchAd/googleAllImage.png";
import FrequentlyAskedQuestions from "../../../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import adding from "/src/assets/GoogleSearchAd/adding.png";
import { useEffect } from "react";
import Aos from "aos";
import { FaArrowRight } from "react-icons/fa6";
import ChooseUs from "./ChooseUs";
import AboutFrom from "./AboutFrom";


const GoogleSearchAd = () => {


  useEffect(() => {
    Aos.init({
      duration: 1500, // animation duration
      easing: 'ease-in-out', // easing for animation
      once: true, // whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <div className="">
      <div data-aos="fade-up" className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-5 ">
            Big Clients. Small(Ish) Agency.
          </h1>
          <p className="w-2/5 font-serif">
            Magoosh, Northwest Career College, and more than 20 more businesses
            have trusted us with their money for digital advertising. We use
            those funds extremely carefully.
          </p>

          <img className="mx-auto mt-8 w-full" src={googleAllImage} alt="" />
        </div>
      </div>
      
      {/* Why Choose Us? */}
      <ChooseUs />

      {/* What Result  You Will Get  */}
      <div>
        <div className="mt-24">
          <h1 className="text-center text-5xl font-bold mb-6">
            What Result You Will Get{" "}
          </h1>
          <p className="text-center w-4/6 text-3xl mx-auto">
            These are some of our amazing previous clients&apos; Google search,
            display, and YouTube ads results.
          </p>

          <div className="my-20">
          <div className="flex flex-wrap items-center justify-center gap-10 mx-auto">
              <div className="w-5/12 bg-white shadow-2xl p-6">
                <img className="w-full" src={adding} alt="" />
                <div className="mt-6">
                  <h1 className="my-3 text-xl font-bold ">
                    AUDIT AND OPTIMAZATION
                  </h1>
                  <p className="text-justify">
                    It was a project of the Google Search Ads Audit and
                    Optimization Project. Good results came after about six to
                    seven days, and many clients were happy.{" "}
                  </p>
                  <div className="text-center text-orange-600 flex items-center justify-center my-5">
                    <button className="">Read More... </button>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="w-5/12 bg-white shadow-2xl p-6">
                <img className="w-full" src={adding} alt="" />
                <div className="mt-6">
                  <h1 className="my-3 text-xl font-bold ">
                    AUDIT AND OPTIMAZATION
                  </h1>
                  <p className="text-justify">
                    It was a project of the Google Search Ads Audit and
                    Optimization Project. Good results came after about six to
                    seven days, and many clients were happy.{" "}
                  </p>
                  <div className="text-center text-orange-600 flex items-center justify-center my-5">
                    <button className="">Read More... </button>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-20">
          <div className="flex flex-wrap items-center justify-center gap-10 mx-auto">
              <div className="w-5/12 bg-white shadow-2xl p-6">
                <img className="w-full" src={adding} alt="" />
                <div className="mt-6">
                  <h1 className="my-3 text-xl font-bold ">
                    AUDIT AND OPTIMAZATION
                  </h1>
                  <p className="text-justify">
                    It was a project of the Google Search Ads Audit and
                    Optimization Project. Good results came after about six to
                    seven days, and many clients were happy.{" "}
                  </p>
                  <div className="text-center text-orange-600 flex items-center justify-center my-5">
                    <button className="">Read More... </button>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="w-5/12 bg-white shadow-2xl p-6">
                <img className="w-full" src={adding} alt="" />
                <div className="mt-6">
                  <h1 className="my-3 text-xl font-bold ">
                    AUDIT AND OPTIMAZATION
                  </h1>
                  <p className="text-justify">
                    It was a project of the Google Search Ads Audit and
                    Optimization Project. Good results came after about six to
                    seven days, and many clients were happy.{" "}
                  </p>
                  <div className="text-center text-orange-600 flex items-center justify-center my-5">
                    <button className="">Read More... </button>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-20">
          <div className="flex flex-wrap items-center justify-center gap-10 mx-auto">
              <div className="w-5/12 bg-white shadow-2xl p-6">
                <img className="w-full" src={adding} alt="" />
                <div className="mt-6">
                  <h1 className="my-3 text-xl font-bold ">
                    AUDIT AND OPTIMAZATION
                  </h1>
                  <p className="text-justify">
                    It was a project of the Google Search Ads Audit and
                    Optimization Project. Good results came after about six to
                    seven days, and many clients were happy.{" "}
                  </p>
                  <div className="text-center text-orange-600 flex items-center justify-center my-5">
                    <button className="">Read More... </button>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="w-5/12 bg-white shadow-2xl p-6">
                <img className="w-full" src={adding} alt="" />
                <div className="mt-6">
                  <h1 className="my-3 text-xl font-bold ">
                    AUDIT AND OPTIMAZATION
                  </h1>
                  <p className="text-justify">
                    It was a project of the Google Search Ads Audit and
                    Optimization Project. Good results came after about six to
                    seven days, and many clients were happy.{" "}
                  </p>
                  <div className="text-center text-orange-600 flex items-center justify-center my-5">
                    <button className="">Read More... </button>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            
            <div className="mx-auto w-48">
              <button className="bg-blue-500 uppercase text-white px-10 py-4 text-lg font-bold rounded-lg  ">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-gray-100 py-10 mt-10">
        <div className="mt-24 w-4/6 mx-auto ">
          <h1 className="text-4xl font-bold mb-5 font-serif">
            Frequently Asked Questions
          </h1>
          <p className="w-4/6 mb-5 font-serif">
            Here are some frequently asked questions from our customers to help
            you find the answers you’re looking for faster.
          </p>
          <div className="w-4/5">
            <FrequentlyAskedQuestions />
          </div>
        </div>
      </div>

      {/* About */}
      <h1 className="text-center text-5xl font-serif font-semibold mt-20 mb-10">
        About
      </h1>
      <AboutFrom />
    </div>
  );
};

export default GoogleSearchAd;
