import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

const OurLocation = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex items-center mt-36">
        <div className="w-1/2">
          <div className="">
            <FaLocationDot className="mx-auto text-[300px] text-blue-400"/>
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-3">Where Can You</h1>
          <h1 className="text-5xl font-bold text-blue-600 mb-16">Find Us</h1>
          <div>
            <h3 className="text-3xl font-semibold  mb-3">Bangladesh</h3>
            <p className="flex items-center gap-5 text-xl mt-10">
              <span>
                <FaPhoneVolume />
              </span>{" "}
              <span>015263*****</span>
            </p>
            <p className="flex items-center gap-5 mt-5 text-lg">
              <span>
                <FaLocationDot></FaLocationDot>
              </span>{" "}
              <span>
                {" "}
                House 1357 Avenue 10, <br /> Mirpur DOHS, Dhaka 1216
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
