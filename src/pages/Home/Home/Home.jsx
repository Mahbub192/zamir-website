import Footer from "../../../shared/Footer/Footer";
import AboutMySelf from "../AboutMySelf/AboutMySelf";
import Banner from "../Banner/Banner";
import ClientSection from "../ClientSection/ClientSection";
import Experience from "../Experience/Experience";


const Home = () => {
    return (
        <div>
            <Banner /> 
            <AboutMySelf />   
            <ClientSection />   
            <Experience /> 
        </div>
    );
};

export default Home;