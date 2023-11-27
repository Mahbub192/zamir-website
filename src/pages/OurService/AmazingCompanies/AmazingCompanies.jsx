import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import image1 from '../../../assets/OurService/CompaniesLogo/Screenshot_1.jpg';
import image10 from '../../../assets/OurService/CompaniesLogo/Screenshot_10.jpg';
import image11 from '../../../assets/OurService/CompaniesLogo/Screenshot_11.jpg';
import image12 from '../../../assets/OurService/CompaniesLogo/Screenshot_12.jpg';
import image2 from '../../../assets/OurService/CompaniesLogo/Screenshot_2.jpg';
import image3 from '../../../assets/OurService/CompaniesLogo/Screenshot_3.jpg';
import image4 from '../../../assets/OurService/CompaniesLogo/Screenshot_4.jpg';
import image5 from '../../../assets/OurService/CompaniesLogo/Screenshot_5.jpg';
import image6 from '../../../assets/OurService/CompaniesLogo/Screenshot_6.jpg';
import image7 from '../../../assets/OurService/CompaniesLogo/Screenshot_7.jpg';
import image8 from '../../../assets/OurService/CompaniesLogo/Screenshot_8.jpg';
import image9 from '../../../assets/OurService/CompaniesLogo/Screenshot_9.jpg';


const imageArray = [
  {
    id:'01',
    image: image1,
  },
  {
    id:'02',
    image: image2,
  },
  {
    id:'03',
    image: image3,
  },
  {
    id:'04',
    image: image4,
  },
  {
    id:'05',
    image: image5,
  },
  {
    id:'06',
    image: image6,
  },
  {
    id:'07',
    image: image7,
  },
  {
    id:'08',
    image: image8,
  },
  {
    id:'09',
    image: image9,
  },
  {
    id:'10',
    image: image10,
  },
  {
    id:'11',
    image: image11,
  },
  {
    id:'12',
    image: image12,
  },
]

const AmazingCompanies = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="container mx-auto">
      <div className="  text-center">
        <h1 className="mt-20 text-5xl font-semibold">
          We’ve Had The Privilege Of Working With Amazing Companies
        </h1>
        <p className="w-3/4 mx-auto text-3xl mt-5 font-bold text-blue-400">
          We Are Featured In
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {
            imageArray.map(singleImage =>(
              <div key={singleImage.id} className="mt-5">
              <div>
                <img className="bg-white h-28 w-72 " src={singleImage?.image} alt="" />
              </div>
            </div>
            )
             
            )
          }
        </Slider>
      </div>
    </div>
  );
};

export default AmazingCompanies;
