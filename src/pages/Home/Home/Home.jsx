import AboutMySelf from "../AboutMySelf/AboutMySelf";
import AwesomeClients from "../AwesomeClients/AwesomeClients";
import Banner from "../Banner/Banner";
import Comment from "../Comment/Comment";
import Discover from "../Discover/Discover";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import MarketingHawkHome from "../MarketingHawkHome/MarketingHawkHome";
import MyInfo from "../MyInfo/MyInfo";
import OurDigitalMarketing from "../OurDigitalMarketing/OurDigitalMarketing";
import WorkTogether from "../WorkTogether/WorkTogether";


const Home = () => {
    return (
        <div>
            <Banner /> 
            <AboutMySelf />   
            <OurDigitalMarketing />
            <MarketingHawkHome />
            <Discover />
            <WorkTogether />
            <AwesomeClients />
            <Comment />
            <FrequentlyAsked /> 
            <MyInfo />
        </div>
    );
};

export default Home;