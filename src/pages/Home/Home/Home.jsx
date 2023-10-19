import AboutMySelf from "../AboutMySelf/AboutMySelf";
import Banner from "../Banner/Banner";
import ClientSection from "../ClientSection/ClientSection";
import Discover from "../Discover/Discover";
import Experience from "../Experience/Experience";
import OurDigitalMarketing from "../OurDigitalMarketing/OurDigitalMarketing";


const Home = () => {
    return (
        <div>
            <Banner /> 
            <AboutMySelf />   
            <OurDigitalMarketing />
            <Discover />
            <ClientSection />   
            <Experience /> 
        </div>
    );
};

export default Home;