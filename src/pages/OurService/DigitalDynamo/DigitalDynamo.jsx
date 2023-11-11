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
          <p>Hey! </p>
          <p className="text-blue-500 text-xl font-medium mb-5">We are ‘Marketing Hawk’</p>
          <h1 className="text-5xl font-semibold mb-5">We are the best full-stack Digital Marketing agency.</h1>
          <p className="text-lg mb-10">We streamline your Digital Marketing efforts by developing a cohesive strategy that unifies all of your initiatives. This simplifies management and maximizes results.</p>
          <div>
            <button className="text-white bg-orange-400 text-xl font-semibold px-9 py-3 shadow-2xl rounded-lg"> Get a free consultant? Book a call!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDynamo;
