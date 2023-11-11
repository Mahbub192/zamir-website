import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../assets/ClientSay/image1.jpeg";
import image2 from "../../../assets/ClientSay/image2.jpeg";
import image3 from "../../../assets/ClientSay/image3.jpeg";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ClientSay = () => {
  return (
    <div className="container mx-auto">
        <div>
            <h1 className="text-center text-4xl font-semibold py-10">Client say</h1>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="px-5 bg-white shadow-2xl">
            <div>
              <p className="text-6xl text-orange-500">
                <FaQuoteLeft />
              </p>
            </div>
            <p className="text-lg text-justify">
              What a valuable service Jamir Khan offers! In today&apos;s highly
              competitive e-commerce environment, business owners like myself
              need all the skills and knowledge we can get to stay ahead of the
              curve. But the resources aren&apos;t always readily available to
              develop a full understanding of Google Ads strategies and account
              management.{" "}
            </p>
            <p className="text-lg text-justify mt-4">
              That&apos;s where Marketing Hawk Agency comes in. They offer an
              affordable way to have an expert evaluate your current Google Ads
              setup and make recommendations on how to improve your performance.
              I found their 1-on-1 training to be truly valuable, and I highly
              recommend this service to anyone looking to get more out of their
              Google Ads campaigns .{" "}
            </p>
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 mt-10 ">
                <img
                  className="object-cover h-full w-full rounded-full"
                  src={image3}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-xl">Jerry Keifer</h3>
                <h2 className="text-3xl">United State</h2>
              </div>
              <div>
                <p className="text-6xl text-blue-500">
                  <FaLinkedin />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5">
            <div>
              <p className="text-6xl text-orange-500">
                <FaQuoteLeft />
              </p>
            </div>
            <p className="text-lg text-justify">
              Jamir and Fatema were really helpful and very quick at solving my
              tracking issue.{" "}
            </p>
            <p className="text-lg text-justify">
              Jamir and his marketing team are very experienced in Google Tag
              Manager, Google Analytics, and Google Ads. He also set up my
              Google Analytics ecommerce tracking, Google Ads conversion
              tracking, and Google Ads re-marketing tags, which are very
              advanced. He also set up my Google Analytics custom dashboard,
              like the sales performance report, and Google&apos;s custom
              dashboard with the Google Analytics 4 GA4 property, and he also
              explained the Zoom session. They also took the time to explain how
              to understand the analytics once they&apos;d fixed them, which was
              very helpful for a beginner like me. I am really happy with Jamir
              and his Marketing Hawk agency.
            </p>
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 mt-10 ">
                <img
                  className="object-cover h-full w-full rounded-full"
                  src={image1}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-xl">Joseph</h3>
                <h2 className="text-3xl">United State</h2>
              </div>
              <div>
                <p className="text-6xl text-blue-500">
                  <FaLinkedin />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 bg-white shadow-2xl">
            <div>
              <p className="text-6xl text-orange-500">
                <FaQuoteLeft />
              </p>
            </div>
            <p className="text-lg  text-justify">
            Jamir was extremely open and honest about what he could deliver and what he could not. He made no false promises, and I appreciate that. His work was extraordinary, to say the least. I was wowed and blown away by the comprehensiveness and clarity of it all. I feel like he gave me something extra. My confidence has grown tremendously in my entrepreneurial endeavors, knowing that I have him as a resource.
            </p>
            <p className="text-lg  text-justify mt-4">
            This was my first time using an agency, and I am surprised with the results of my Facebook advertising. I will surely be using his services again soon! And I decided to do on-going management advertising.
            </p>
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 mt-10 ">
                <img
                  className="object-cover h-full w-full rounded-full"
                  src={image2}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-xl">Jerry Keifer</h3>
                <h2 className="text-3xl">United State</h2>
              </div>
              <div>
                <p className="text-6xl text-blue-500">
                  <FaLinkedin />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientSay;
