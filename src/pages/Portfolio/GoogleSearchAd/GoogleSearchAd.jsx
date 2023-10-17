import googleAd from "../../../assets/GoogleSearchAd/googlead.png";
import googleAllImage from "../../../assets/GoogleSearchAd/googleAllImage.png";
import image11 from "../../../assets/GoogleSearchAd/image11.png";
import FrequentlyAskedQuestions from "../../../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import adding from "/src/assets/GoogleSearchAd/adding.png";
import quickly from "/src/assets/GoogleSearchAd/quickly.png";

const GoogleSearchAd = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-5">
          Big Clients. Small(Ish) Agency.
        </h1>
        <p className="w-2/5 font-serif">
          Magoosh, Northwest Career College, and more than 20 more businesses
          have trusted us with their money for digital advertising. We use those
          funds extremely carefully.
        </p>

        <img className="mx-auto mt-8" src={googleAllImage} alt="" />
      </div>
      <div className="flex items-center w-5/6 mx-auto mt-20">
        <div className="w-1/2">
          <img className="mx-auto " src={googleAd} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4 font-serif">GOOGLE ADWORDS</h1>
          <p className="leading-relaxed text-justify font-serif">
            For your project&apos;s planning goals and deadlines, I provide the
            best Google Ads services. I’m a Google Ads certified expert who
            knows how to set up, optimize, and manage Google Ads campaigns to
            get more sales, leads, and customers.
          </p>
          <p className="leading-relaxed mt-3 text-justify font-serif">
            I have a wealth of experience in creating and managing Google PPC
            (Pay-Per-Click) ad campaigns that deliver tangible results.
            Here&apos;s an overview of my expertise and an example of a
            successful Google PPC ad campaign:
          </p>
        </div>
      </div>
      {/* Why Choose Us? */}
      <div className="flex flex-wrap gap-2 mt-20">
        <div className="w-1/2 mx-auto">
          <p className="pl-32 mb-3 text-blue-500 font-serif">Why Choose Us?</p>
          <h1 className="text-2xl font-bold w-2/3 mx-auto mb-3 font-serif">
            We Provide Solutions To Make Our Clients&apos; Lives Easier
          </h1>
          <p className="w-2/3 mx-auto mb-3 font-serif">
            Choose us for exceptional quality, unmatched service, and unbeatable
            value. Experience the difference with our trusted and reliable
            teamPixel Perfect
          </p>
          <div className="w-2/3 mx-auto bg-white shadow-2xl p-5">
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
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
              <div className="collapse-title text-xl font-medium">
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
              <div className="collapse-title text-xl font-medium">
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
              <div className="collapse-title text-xl font-medium">
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
              <div className="collapse-title text-xl font-medium">Teamwork</div>
              <div className="collapse-content">
                <p>
                  Every step of the way, we work directly with our customers to
                  meet their needs and accomplish their objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w1/2">
          <img src={image11} alt="" />
        </div>
      </div>

      {/* What Result  You Will Get  */}
      <div>
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
      </div>

      {/* Frequently Asked Questions */}

      <div className="mt-24 w-4/6 mx-auto">
        <h1 className="text-4xl font-bold mb-5 font-serif">Frequently Asked Questions</h1>
        <p className="w-4/6 mb-5 font-serif">
          Here are some frequently asked questions from our customers to help
          you find the answers you’re looking for faster.
        </p>
        <div className="w-4/5">
          <FrequentlyAskedQuestions />
        </div>
      </div>

      {/* About */}
      <h1 className="text-center text-3xl font-semibold mt-20 mb-10">About</h1>
      <div>
        <div>
          <h1>
            Refreshing Your Brand And Paving The Way For New Business Ventures
          </h1>
          Get your digital marketing plan, tailored made for your business.
          Share your story, vision and goals and let us do the rest.
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default GoogleSearchAd;
