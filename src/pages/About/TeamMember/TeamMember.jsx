import member1 from "../../../assets/AboutMySelf/AboutMy.jpg";
import member2 from "../../../assets/AboutMySelf/AboutMy.png";
import member3 from "../../../assets/AboutMySelf/homeImage.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const TeamMember = () => {
  const allMember = [
    {
      id: 1,
      image: member1,
      name: "Marcie Lord",
      designation: "DIGITAL MARKETING STRATEGIST & FOUNDER",
      info: `Marcie Lord has worked in digital marketing for over 16 years, managing projects that require SEO, web development, analytics and content creation. She cut her teeth creating email marketing and SEO campaigns for environmental NGOs and later worked as an in-house marketing manager, developing and managing corporate websites and marketing platforms. Marcie eventually became a freelance digital marketing strategist, working with small and medium-sized businesses to help them improve their digital footprint. Her experience as a freelancer was the motivation to start Digital Dynamo, offering affordable digital services that help smaller companies harness the latest marketing tactics.

            Her work has helped organizations double their organic traffic and conversion rates, increase consumer engagement, and improve marketing ROI. Marcie has worked with a wide range of industries, including financial services, energy, sustainability, non-profit, manufacturing and healthcare.
            
            Marcie earned her Bachelor of Arts from Allegheny College in Meadville, PA.
            
            On a personal level, Marcie is an advocate for Adult Literacy and believes strongly that widespread literacy is important to a successful society. She is an active member of Thrive, the Young Professionals Advisory Board to Literacy Pittsburgh, where she manages fundraising and outreach events.
            
            In her free time she likes to hike with her dog and family, listen to podcasts, and follow politics.`,
    },

    {
      id: 2,
      image: member2,
      name: "Sara Roberts",
      designation: "DIGITAL MARKETING STRATEGIST",
      info: `Sara Roberts is a Digital Marketing Strategist at Digital Dynamo. She helps small and medium-sized organizations advance their business goals through planning, building, and executing effective digital marketing campaigns. She specializes in content creation, SEO, data analysis, and digital PR that delivers a positive return-on-investment.

            Sara previously worked in community education for 14 years and brings the same resourcefulness, compassion, and client-centered care to the field of digital marketing. With her extensive project management background and executive nonprofit management experience, she understands the importance of investing tight budgets in resources that deliver maximum results.
            
            Sara earned her Bachelor of Science from Allegheny College in Meadville, PA, and her Master of Arts in Education from Duquesne University in Pittsburgh, PA.
            
            In her spare time, she likes to cook, read, garden, watch bad reality tv, and advocate for health care reform.`,
    },
    {
      id: 3,
      image: member3,
      name: "Isaac Esterline",
      designation: "DIGITAL MARKETING STRATEGIST",
      info: `Isaac Esterline is a Digital Marketing Strategist at Digital Dynamo. He works on digital marketing projects for clients that involve web design, SEO, video editing, and CRM management. Prior to Digital Dynamo, he edited short films, documentaries, and wedding videos, and created websites designed for e-commerce, small business marketing, and document management.

            Isaac aims to create impactful and user-focused digital collateral. His favorite project work is revamping outdated and stagnant content so that it delivers higher conversions and an enjoyable experience for users.
            
            In his spare time, Isaac travels around Pennsylvania with his DSLR camera taking pictures of landscapes, wildlife, and people. He also enjoys the occasional round of golf and skiing.
            
            Isaac is a graduate of Penn State Behrend in Erie, PA with a Bachelor of Arts degree in Digital Arts, Media and, Technology.`,
    },
  ];
  console.log(allMember);

  return (
    <div className="container mx-auto mt-48">
        <div>
            <h1 className="text-6xl font-bold mb-28 ">Meet The Minds Behind All These <br /> Amazing Works</h1>
        </div>
      <div className="flex gap-10 justify-around container mx-auto">
        {allMember.map((singleMember) => (
          <>
            <div className="w-1/4" key={singleMember.id}>
              <img
                className="h-72 w-64 object-cover mx-auto"
                src={singleMember.image}
                alt={singleMember.name}
              />
              <div>
                <h1 className="text-center mt-5 text-2xl font-bold">
                  {singleMember.name}
                </h1>
                <p className="text-center mt-2 font-semibold text-violet-700">
                  {singleMember.designation}
                </p>
                <p className="text-center mt-3">
                  {singleMember.info.length > 50
                    ? singleMember.info.slice(0, 100)
                    : singleMember.info}
                  ...
                </p>
                <div className="text-center mt-5">
                  <button className="text-xl text-orange-500 hover:text-2xl">
                    <FaArrowRightLong></FaArrowRightLong>
                  </button>
                </div>
              </div>
            </div>
            ;
          </>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
