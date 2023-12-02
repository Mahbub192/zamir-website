import {
  FaArrowTrendUp,
  FaCalendarDays,
  FaFaceSmileBeam,
  FaRegLightbulb,
} from "react-icons/fa6";

import { GiWorld } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <div className=" h-[700px] bg-gradient-to-r from-cyan-600 to-blue-600 text-center pt-48">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="mb-10">
            <h1 className="text-[70px] font-bold text-gray-200 w-3/5 mx-auto">
              You Really Want High-Quality Digital Marketing Service!
            </h1>
            <p className="text-2xl font-bold text-gray-200 mt-10">
              See exactly what we’d do, how much we’d change, and why your
              competitors are in deep trouble
            </p>
            <div className="flex items-center justify-center mt-10 ">
              <button className="text-white border-2 px-6 py-3 rounded-lg text-xl font-bold hover:text-gray-700">
                Contact Us
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-[70px] font-bold text-gray-200 w-3/5 mx-auto">
              Our Teams Who Use Their Brains Feel Advertising in Their Veins.
            </h1>
            <p className="text-2xl font-bold text-gray-200 mt-10">
              Meet the Minds behind All These Amazing Works
            </p>
            <div className="flex items-center justify-center mt-10 ">
              <button className="text-white border-2 px-6 py-3 rounded-lg text-xl font-bold hover:text-gray-700">
                Meet Our Teem
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-[60px] font-bold text-gray-200 w-3/5 mx-auto">
              Your Trusted Digital Marketing Agency
            </h1>
            <p className="text-2xl font-bold text-gray-200 mt-10">
              Stay Connected With Us and Get Your Digital Marketing Plan to Grow
              Your Digital Business.
            </p>
            <div className="flex items-center justify-center mt-10 ">
              <button className="text-white border-2 px-6 py-3 rounded-lg text-xl font-bold hover:text-gray-700">
                Get a Free Consultant! Book a Call Now
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container mx-auto grid grid-cols-5 border-2 py-6 px-5 mt-9">
        <div className="flex items-center gap-3">
          <p className="text-3xl text-orange-400">
            <FaCalendarDays />
          </p>
          <div>
            <h1 className="text-2xl font-semibold">800</h1>
            <p>Working Hours</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <p className="text-3xl text-orange-400">
            <GiWorld />
          </p>
          <div>
            <h1 className="text-2xl font-semibold">120</h1>
            <p>Total Project</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <p className="text-3xl text-orange-400">
            <FaRegLightbulb />
          </p>
          <div>
            <h1 className="text-2xl font-semibold">4</h1>
            <p>Years Journey</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <p className="text-3xl text-orange-400">
            <FaFaceSmileBeam />
          </p>
          <div>
            <h1 className="text-2xl font-semibold">140</h1>
            <p>Total Client</p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <p className="text-3xl text-orange-400">
            <FaArrowTrendUp />
          </p>

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
