import dots from "../../../assets/OurService/dots.webp";
import service7 from "../../../assets/OurService/service7.jpg";

const DigitalDynamo = () => {
  return (
    <div className="container mx-auto mt-36">
      <div className="flex items-center">
        <div className="flex w-1/2 items-center ">
          <div>
            <img className="h-44 w-44" src={dots} alt="" />
          </div>
          <div>
            <img className="" src={service7} alt="" />
          </div>
        </div>
        <div className="w-1/2 px-10">
          <p className="text-blue-500 text-xl font-medium mb-5">We are Digital Dynamo.</p>
          <h1 className="text-5xl font-semibold mb-5">We are a full-service digital marketing agency</h1>
          <p className="text-lg mb-10">Digital marketing initiatives combined into one cohesive strategy. Simplified management with maximized results.</p>
          <div>
            <button className="text-white bg-orange-400 text-xl font-semibold px-9 py-3 shadow-2xl rounded-lg">Got a project? Contact us!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDynamo;
