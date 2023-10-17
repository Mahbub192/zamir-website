import googleAd from "../../../assets/GoogleSearchAd/googlead.png";
import googleAllImage from "../../../assets/GoogleSearchAd/googleAllImage.png";
import image11 from "../../../assets/GoogleSearchAd/image11.png";

import Accordion from "../../../../components/Accordion/Accordion";
import FrequentlyAskedQuestions from "../../../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import ResultCard from "../../../../components/ResultCard/ResultCard";


const GoogleSearchAd = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-5">
          Big Clients. Small(Ish) Agency.
        </h1>
        <p className="w-2/5">
          Magoosh, Northwest Career College, and more than 20 more businesses
          have trusted us with their money for digital advertising. We use those
          funds extremely carefully.
        </p>

        <img className="mx-auto mt-8" src={googleAllImage} alt="" />
      </div>
      <div className="flex items-center w-5/6 mx-auto">
        <div className="w-1/2">
          <img className="mx-auto " src={googleAd} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4">GOOGLE ADWORDS</h1>
          <p className="leading-relaxed text-justify">
            For your project&apos;s planning goals and deadlines, I provide the
            best Google Ads services. I’m a Google Ads certified expert who
            knows how to set up, optimize, and manage Google Ads campaigns to
            get more sales, leads, and customers.
          </p>
          <p className="leading-relaxed mt-3 text-justify">
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
          <p className="pl-32 mb-3">Why Choose Us?</p>
          <h1 className="text-2xl font-bold w-2/3 mx-auto mb-3">
            We Provide Solutions To Make Our Clients&apos; Lives Easier
          </h1>
          <p className="w-2/3 mx-auto mb-3">
            Choose us for exceptional quality, unmatched service, and unbeatable
            value. Experience the difference with our trusted and reliable
            teamPixel Perfect
          </p>
          <div className="w-2/3 mx-auto bg-white shadow-2xl p-5">
            <Accordion />
          </div>
        </div>
        <div className="w1/2">
          <img src={image11} alt="" />
        </div>
      </div>

      {/* What Result  You Will Get  */}
      <div>
        <ResultCard />
      </div>

      {/* Frequently Asked Questions */}

      <div className="mt-24 w-4/6 mx-auto">
        <h1 className="text-4xl font-bold mb-5">Frequently Asked Questions</h1>
        <p className="w-4/6 mb-5">
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
