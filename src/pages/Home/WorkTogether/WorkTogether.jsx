import WorkTogether1 from "../../../assets/WorkTogether/WorkTogether1.png";

import WorkTogether3 from "../../../assets/WorkTogether/WorkTogether12.jpeg";
import WorkTogether4 from "../../../assets/WorkTogether/WorkTogether13.jpeg";

// import WorkTogether2 from "../../../assets/WorkTogether/WorkTogether2.jpg";
//import WorkTogether3 from "../../../assets/WorkTogether/WorkTogether3.webp";
//import WorkTogether4 from "../../../assets/WorkTogether/WorkTogether4.webp";


const WorkTogether = () => {
  return (
    <div className="container mx-auto mt-28">
      <h1 className="text-5xl font-semibold">
        Choose How We Work Together: <br /> From One-Time Audits To Done-For-{" "}
        <br />
        You-Everything
      </h1>
      <p className="text-lg mt-6">
        Outsource all your marketing to us or have us help your internal <br />{" "}
        team get better. You choose the style of engagement.
      </p>

      <div className="flex mt-16">
        <div className="bg-white shadow-2xl rounded-xl w-1/2 mr-10 pb-8">
          <img className="h-72 mx-auto" src={WorkTogether1} alt="" />
          <h1 className="mt-8 text-2xl font-bold text-center">In-Depth One-Time Audit</h1>
          <p className="text-lg text-center mt-3 w-2/3 mx-auto">
          Get a custom to-do list to help you achieve your goals faster than ever before.
          </p>
        </div>
        <div className="bg-white shadow-2xl rounded-xl w-1/2 ml-10 pb-8">
          <img className="h-72 mx-auto" src={WorkTogether3} alt="" />
          <h1 className="mt-8 text-2xl font-bold text-center">Strongly One –Time Setup</h1>
          <p className="text-lg text-center mt-3 w-2/3 mx-auto">
          We’ll Build a high-performing machine that will help you achieve your goals. 
          </p>
        </div>
      </div>

      <div className="flex bg-white shadow-2xl mt-10 items-center justify-between rounded-2xl">
        <div className="pl-10">
          <h1 className="text-4xl font-bold font-serif ">Ongoing Expert Management & Support</h1>
          <p className="text-xl my-5 w-2/3">We&apos;ll handle all aspects of your business, from strategy to execution, and report directly to you.</p>
          <button className="bg-blue-500 px-10 py-3 rounded-xl text-white uppercase text-lg font-semibold">Book a Call</button>
        </div>
        <div>
          <img className="h-96 rounded-2xl " src={WorkTogether4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
