import googleAllImage from "../../../assets/GoogleSearchAd/googleAllImage.png";
import image11 from "../../../assets/GoogleSearchAd/image11.png";
import FrequentlyAskedQuestions from "../../../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import adding from "/src/assets/GoogleSearchAd/adding.png";
import MyImage from "../../../assets/AboutMySelf/AboutMy.png";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Aos from "aos";
import { FaArrowRight } from "react-icons/fa6";


const GoogleSearchAd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
      <div className="flex flex-wrap  mt-20 items-center bg-gray-100 py-20">
        <div className="w-1/2 mx-auto">
          <p className="pl-32 mb-3 text-blue-500 font-serif">Why Choose Us?</p>
          <h1 className="text-4xl font-bold w-2/3 mx-auto mb-3 font-serif">
            We Provide Solutions To Make Our Clients&apos; Lives Easier
          </h1>
          <p className="w-2/3 mx-auto mb-3 font-serif">
            Choose us for exceptional quality, unmatched service, and unbeatable
            value. Experience the difference with our trusted and reliable
            teamPixel Perfect
          </p>
          <div className="w-2/3 mx-auto bg-white shadow-2xl p-5 rounded-xl">
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">
                Options & Suggestions
              </div>
              <div className="collapse-content">
                <p>
                  Develop innovative ideas and game-changing solutions for
                  yourself. With our help, overcome obstacles, realize your
                  potential, and accomplish your objectives!
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">
                Market Analysis
              </div>
              <div className="collapse-content">
                <p>
                  With the help of our thorough market analysis, stay one step
                  ahead of the competition. Learn about consumer trends, market
                  trends, and expansion prospects.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">
                Innovation
              </div>
              <div className="collapse-content">
                <p>
                  We keep abreast of the most recent developments in trends and
                  technology to keep our clients one step ahead of the
                  competition.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">
                Customization
              </div>
              <div className="collapse-content">
                <p>
                  We approach each project we work on specifically because we
                  recognize that every business is different.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">Teamwork</div>
              <div className="collapse-content">
                <p>
                  Every step of the way, we work directly with our customers to
                  meet their needs and accomplish their objectives.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">Results</div>
              <div className="collapse-content">
                <p>
                Our track record speaks for itself; we have a history of exceeding our clients’ expectations with our outcomes.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">Experience</div>
              <div className="collapse-content">
                <p>
                With years of experience in our field, we have the knowledge and ability to provide excellent solutions that satisfy your demands.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <img className="w-full" src={image11} alt="" />
        </div>
      </div>

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
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-1/2 bg-white shadow-2xl p-5">
            <h1 className="text-3xl font-bold font-serif w-4/5 mb-5 mx-auto">
              Refreshing Your Brand And Paving The Way For New Business Ventures
            </h1>
            <p className="font-serif text-lg w-4/5 mx-auto">
              Get your digital marketing plan, tailored made for your business.
              Share your story, vision and goals and let us do the rest.
            </p>

            <div data-aos="fade-up" className="mt-10 mb-10 w-4/5 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email@gmail.com"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control   mt-4">
                  <label className="label ">
                    <span className="label-text flex items-center">
                      {" "}
                      <span className="pl-2">Message</span>
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered textarea-lg w-full "
                    type="text"
                    {...register("message", { required: true })}
                    placeholder="Message"
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-600">Message is required</span>
                  )}
                </div>

                <button
                  className={`mt-10 mx-auto border-2 px-10 py-2 text-lg md:text-xl font-bold bg-blue-500 hover:bg-blue-800 text-white `}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="w-1/2">
            <div className="w-2/3 mx-auto">
              <img className="h-[500px] mx-auto" src={MyImage} alt="" />
            </div>
            <div>
              <h1 className="text-4xl font-bold w-2/3 mx-auto text-center"> Jamir Khan</h1>
              <h1 className="text-2xl font-bold text-gray-400 my-5 w-2/3 text-center mx-auto">
                Marketing Team Leader
              </h1>
              <ul className="list-disc leading-loose w-2/3 mx-auto pl-20">
                <li>10x Meta Blueprint Certified.</li>
                <li>HubSpot Certified Inbound Marketer</li>
                <li>8x Google Ads & Microsoft Ads Certified</li>
                <li>Conversion Rate Optimization Professional</li>
                <li>Google Analytics & Google Tag Manager Certified.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleSearchAd;
