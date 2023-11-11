
import AmazingCompanies from './AmazingCompanies/AmazingCompanies';
import DigitalDynamo from './DigitalDynamo/DigitalDynamo';
import DigitalMarketingServices from './DigitalMarketingServices/DigitalMarketingServices';
import OurServiceFrom from './OurServiceFrom/OurServiceFrom';
import Testimonials from './Testimonials/Testimonials';


const OurService = () => {
  return (
    <>
      <h1 className="py-10 bg-gray-200 text-5xl font-bold text-center font-serif">
        Service
      </h1>
      <div className="container mx-auto mt-10">
        <div className=" text-justify">
          <h1 className="text-[32px] font-bold">
          Customized Service Tailored To Your Unique Business Needs!
          </h1>
          <p className="text-xl font-serif mt-5 tracking-wide">
          Every business is unique, just like a fingerprint. We also believe that digital marketing should be accessible to businesses of all sizes. This is why we offer a wide range of services, from website design to major advertising platforms such as Google or Facebook to social media campaigns. We also work with an SEO service to improve your website.
          </p>
        </div>

        <AmazingCompanies />
        <DigitalMarketingServices />
        <Testimonials />
        <DigitalDynamo />        
        <OurServiceFrom />
      </div>
    </>
  );
};

export default OurService;
