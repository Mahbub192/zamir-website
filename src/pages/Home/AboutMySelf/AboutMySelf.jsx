import MyImage from "../../../assets/AboutMySelf/AboutMy.png";

const AboutMySelf = () => {
  return (
    <>
    <div className="flex mt-20 w-4/6 mx-auto items-center justify-around">
      <div className="w-1/2">
        <img className="h-[400px]" src={MyImage} alt="" />
        <div>
          <h1 className="text-4xl font-bold">Monzurul Hasan</h1>
          <h1 className="text-2xl font-bold text-gray-400 my-5">Marketing Team Leader</h1>
          <ul className="list-disc leading-loose">
            <li>10x Meta Blueprint Certified</li>
            <li>HubSpot Certified Inbound Marketer</li>
            <li>8x Google Ads & Microsoft Ads Certified</li>
            <li>Conversion Rate Optimization Professional</li>
            <li>Google Analytics & Google Tag Manager Certified.</li>
          </ul>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-bold">HELLO!</h1>
        <h1 className="text-lg font-bold my-6 leading-relaxed tracking-wide">
          THIS IS JAMIR, THE CEO AND MARKETING TEAM LEADER AT THE DIGITAL DYNAMO
          AGENCY{" "}
        </h1>
        <p className="leading-relaxed mb-3 text-lg">
          Marketing Hawk has worked as a Google Adwords manager and in Web
          Analytics [ Google Analytics 4 ] for a data-driven digital marketing
          agency in Bangladesh for a long time with the
        </p>
        <p className="underline text-blue-400 text-xl">Expertise Team.</p>

        <div>
          <ul className="list-disc px-5 my-6">
            <li className="leading-relaxed">
              It’s worked with worldwide clients, from young start-up companies
              to brands in a variety of industries. Our core strength is
              generating leads for local businesses. I’ll confirm your generated
              leads, excellent CTR, upper conversion rate, lower price, and
              progressing ROI. You Can Trust Your Budget With &apos;Marketing
              Hawk&apos;
            </li>
          </ul>
          <h3 className="text-lg leading-relaxed">
            We know what we are doing. We are honest, excellent communicators,
            and easy to work with, and we will try to take ownership of a
            project.
          </h3>
          <h1 className="text-xl font-bold mt-3">
            WE HELP BUSINESS OWNERS JUST LIKE YOU
          </h1>
          <ul className="list-disc px-5 my-3">
            <li>
              As a data-driven digital marketer, we have the skills and
              experience needed to help businesses overcome these challenges and
              succeed online.
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <div className="mx-auto w-44">
        <button className="text-white bg-red-400 font-bold text-lg px-5 py-2 rounded-lg">Message Me</button>
      </div>
    </>
  );
};

export default AboutMySelf;
