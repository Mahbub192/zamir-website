import AboutMySelf from "../AboutMySelf/AboutMySelf";
import Banner from "../Banner/Banner";
import Comment from "../Comment/Comment";
import Discover from "../Discover/Discover";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import MyInfo from "../MyInfo/MyInfo";
import OurDigitalMarketing from "../OurDigitalMarketing/OurDigitalMarketing";
import WorkTogether from "../WorkTogether/WorkTogether";


const Home = () => {
    return (
        <div>
            <Banner /> 
            <AboutMySelf />   
            <OurDigitalMarketing />
            <Discover />
            <WorkTogether />
            <Comment />
            <FrequentlyAsked /> 
            <MyInfo />
        </div>
    );
};

export default Home;