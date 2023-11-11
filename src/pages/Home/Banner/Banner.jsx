import { FaCalendarDays, FaChartLine, FaFaceSmileBeam, FaRegLightbulb } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";


const Banner = () => {
   
  return (
    <div className="">
      <div className=" h-[700px] bg-gradient-to-r from-cyan-600 to-blue-600 text-center pt-48">
        <h1 className="text-[70px] font-bold text-gray-200 w-3/5 mx-auto">
        You Really Want This High-Quality Digital Marketing Service!
        </h1>
        <p className="text-2xl font-bold text-gray-200 mt-10">
        See exactly what we’d do, how much we’d change, and why your competitors are in deep trouble
        </p>
        <div className="flex items-center justify-center mt-10 ">
          <button className="text-white border-2 px-6 py-3 rounded-lg text-xl font-bold hover:text-gray-700">
            Contact Us
          </button>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-5 border-2 py-6 px-5 mt-9">
        <div className="flex items-center gap-3">
          <p className="text-3xl text-orange-400"><FaCalendarDays /></p>
          <div>
            <h1 className="text-2xl font-semibold">800</h1>
            <p>Working Hours</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-3xl text-orange-400"><GiWorld /></p>
          <div>
            <h1 className="text-2xl font-semibold">120</h1>
            <p>Total Project</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-3xl text-orange-400"><FaRegLightbulb /></p>
          <div>
            <h1 className="text-2xl font-semibold">4</h1>
            <p>Years Journey</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-3xl text-orange-400"><FaFaceSmileBeam /></p>
          <div>
            <h1 className="text-2xl font-semibold">140</h1>
            <p>Total Client</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-3xl text-orange-400"><FaChartLine /></p>
          <div>
            <h1 className="text-2xl font-semibold">94%</h1>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
