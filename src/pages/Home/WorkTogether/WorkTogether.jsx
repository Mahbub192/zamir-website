import WorkTogether1 from "../../../assets/WorkTogether/WorkTogether1.png";
import WorkTogether2 from "../../../assets/WorkTogether/WorkTogether2.jpg";

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
          <h1 className="mt-8 text-2xl font-bold text-center">Deep One-Time Audit</h1>
          <p className="text-lg text-center mt-3">
            Get detailed to-do’s to hit your goals <br />  faster than ever
            before
          </p>
        </div>
        <div className="bg-white shadow-2xl rounded-xl w-1/2 ml-10 pb-8">
          <img className="h-72 mx-auto" src={WorkTogether2} alt="" />
          <h1 className="mt-8 text-2xl font-bold text-center">Deep One-Time Audit</h1>
          <p className="text-lg text-center mt-3">
            Get detailed to-do’s to hit your  goals <br />  faster than ever
            before
          </p>
        </div>
      </div>

      <div className="flex bg-white shadow-2xl mt-10 items-center justify-between rounded-2xl">
        <div className="pl-10">
          <h1 className="text-4xl font-bold font-serif ">Ongoing Expert Management</h1>
          <p className="text-xl my-5">We’ll do everything, take care of everything, and <br /> report directly to you.</p>
          <button className="bg-blue-500 px-10 py-3 rounded-xl text-white uppercase text-lg font-semibold">book a call</button>
        </div>
        <div>
          <img className="h-96 rounded-2xl " src={WorkTogether2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;