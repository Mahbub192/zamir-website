import AboutMySelf from "../AboutMySelf/AboutMySelf";
import Banner from "../Banner/Banner";
import ClientSection from "../ClientSection/ClientSection";
import Comment from "../Comment/Comment";
import Discover from "../Discover/Discover";
import Experience from "../Experience/Experience";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
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
            <ClientSection />   
            <Experience /> 
        </div>
    );
};

export default Home;