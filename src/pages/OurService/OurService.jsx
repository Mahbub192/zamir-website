import company from '../../assets/OurService/company.png'
import DigitalDynamo from './DigitalDynamo/DigitalDynamo';
import DigitalMarketingServices from './DigitalMarketingServices/DigitalMarketingServices';


const OurService = () => {
  return (
    <>
      <h1 className="py-10 bg-gray-200 text-5xl font-bold text-center font-serif">
        Service
      </h1>
      <div className="container mx-auto mt-10">
        <div className="w-2/4 text-justify">
          <h1 className="text-[32px] font-bold">
            Service That Is Specially Tailored To You And Your Business Needs.
          </h1>
          <p className="text-xl font-serif mt-5 tracking-wide">
            Businesses differ from one another much like fingerprints do. I
            firmly believe in offering my customers specialized Google Ads
            management that produces distinctive outcomes for their unique
            businesses.
          </p>
        </div>

        <div>
            <h1 className="mt-20 text-4xl font-bold">We’ve Had The Privilege Of Working With Amazing Companies.</h1>
            <img className='mt-10 mx-auto w-full' src={company} alt="" />
        </div>
        <DigitalMarketingServices />
        <DigitalDynamo />
      </div>
    </>
  );
};

export default OurService;
