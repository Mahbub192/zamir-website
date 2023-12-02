import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../../assets/AwesomeClients/Screenshot_1.jpg";
import image2 from "../../../assets/AwesomeClients/Screenshot_2.jpg";
import image3 from "../../../assets/AwesomeClients/Screenshot_3.jpg";
import image4 from "../../../assets/AwesomeClients/Screenshot_4.jpg";
import image5 from "../../../assets/AwesomeClients/Screenshot_5.jpg";
import image6 from "../../../assets/AwesomeClients/Screenshot_6.jpg";
import image7 from "../../../assets/AwesomeClients/Screenshot_9.jpg";
import image8 from "../../../assets/AwesomeClients/Screenshot_15.jpg";
import image9 from "../../../assets/AwesomeClients/Screenshot_18.jpg";

const AwesomeClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const imageArray = [
    { id: 1, imageName: image1 },
    { id: 2, imageName: image2 },
    { id: 3, imageName: image3 },
    { id: 4, imageName: image4 },
    { id: 5, imageName: image5 },
    { id: 6, imageName: image6 },
    { id: 7, imageName: image7 },
    { id: 8, imageName: image8 },
    { id: 9, imageName: image9 },
  ];

  return (
    <div>
      <div className="container mx-auto my-24">
        <h1 className="text-center text-4xl font-bold text-gray-600">OUR AWESOME CLIENTS</h1>
        <div>
          <p className="w-5/6 mx-auto text-center my-10 text-lg">
            Our Clients are our top priority. We treat them with the utmost care
            and they inspire us to do better with every step. We help our
            clients with various services such as Website Design, Software
            Development, Mobile Apps, Digital Marketing, Graphics Design, Social
            Media, Video Production, & Consultancy services to conquer their
            digital landscape and outrank their competitors. Contact us today to
            learn how SEO Agency can help you to grow your online business and
            take it to the next level.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {imageArray.map((singleImage) => (
              <div key={singleImage.id} className="mt-5">
                <div>
                  <img
                    className="bg-white h-28 w-56 "
                    src={singleImage?.imageName}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-60 mx-auto mt-20">
            <button className="flex items-center gap-3 text-white bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-lg px-10 py-2 rounded-lg">View All Clients</button>
        </div>
      </div>
    </div>
  );
};

export default AwesomeClients;
