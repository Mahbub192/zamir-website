import AmazingCompanies from "../OurService/AmazingCompanies/AmazingCompanies";
import AboutFrom from "../Portfolio/GoogleSearchAd/AboutFrom";
import ChooseUs from "../Portfolio/GoogleSearchAd/ChooseUs";
import VideoTestimonials from "./VideoTestimonials";

const Testimonials = () => {
  return (
    <div className="">
      <h1 className="py-10 bg-gray-200 text-5xl font-bold text-center font-serif">
        Testimonials
      </h1>
      <div >
        <AmazingCompanies />
        <ChooseUs />
        <VideoTestimonials />
        <AboutFrom />        
      </div>
    </div>
  );
};

export default Testimonials;
