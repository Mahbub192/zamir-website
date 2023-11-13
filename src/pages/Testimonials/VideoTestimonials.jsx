import discover2 from "../../assets//Discover/discover2.jpeg";

const VideoTestimonials = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-xl text-blue-500 font-semibold mb-5">
        Video Testimonials
      </p>
      <h1 className="text-6xl font-bold w-2/4 mb-10">
        Hear What Our Clients Have To Say
      </h1>
      <p className="w-2/5 text-xl mb-10">
      When you partner with Marketing Hawk, we take care of the heavy lifting, so you can expect to see a significant increase in website traffic, leads, and revenue.&quot;
      </p>

      <div>
        <div className="flex gap-10">
          <div className="shadow-2xl rounded-2xl">
            <img className="p-10" src={discover2} alt="" />
            <p className="text-2xl font-medium text-center pb-3">Google Ads</p>
          </div>
          <div className="shadow-2xl rounded-2xl">
            <img className="p-10" src={discover2} alt="" />
            <p className="text-2xl font-medium text-center pb-3">Google Ads</p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="shadow-2xl rounded-2xl">
            <img className="p-10" src={discover2} alt="" />
            <p className="text-2xl font-medium text-center pb-3">Google Ads</p>
          </div>
          <div className="shadow-2xl rounded-2xl">
            <img className="p-10" src={discover2} alt="" />
            <p className="text-2xl font-medium text-center pb-3">Google Ads</p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="shadow-2xl rounded-2xl">
            <img className="p-10" src={discover2} alt="" />
            <p className="text-2xl font-medium text-center pb-3">Google Ads</p>
          </div>
          <div className="shadow-2xl rounded-2xl">
            <img className="p-10" src={discover2} alt="" />
            <p className="text-2xl font-medium text-center pb-3">Google Ads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
