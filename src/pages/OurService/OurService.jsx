
import AmazingCompanies from './AmazingCompanies/AmazingCompanies';
import DigitalDynamo from './DigitalDynamo/DigitalDynamo';
import DigitalMarketingServices from './DigitalMarketingServices/DigitalMarketingServices';
import OurServiceFrom from './OurServiceFrom/OurServiceFrom';
import Testimonials from './Testimonials/Testimonials';
import image1 from '../../assets/image12.jpg'


const OurService = () => {
  return (
    <>
      <h1 className="py-10 bg-gray-200 text-5xl font-bold text-center font-serif">
        Service
      </h1>
      <div className="container mx-auto mt-10">
        <div className=" text-justify">
          <h1 className="text-5xl text-center font-bold">
          Customized Service Tailored To Your Unique Business Needs!
          </h1>
          <div className='flex items-center justify-around gap-10 mt-16'>
            <div className='w-1/2'>
              <img className='w-full rounded-2xl' src={image1} alt="" />
            </div>
            <div className='w-1/2'>
              <h1 className='text-blue-500 text-3xl font-bold mb-5'>Every Business is Unique, Just Like a Fingerprint.</h1>
              <ul className='text-xl list-disc leading-loose'>
                <li>We believe that Digital Marketing should be accessible to businesses of all sizes.</li>
                <li>That&apos;s why we offer a wide range of services, from website design to Google advertising and major social media advertising platforms like Facebook</li>
                <li>We also work with an SEO service to improve your website.</li>
                <li>Analytics and Reporting provide valuable insights that can help overall business performance. That&apos;s why we are offering Google Analytics, Pixel, and Conversion API.</li>
              </ul>
            </div>
          </div>
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
