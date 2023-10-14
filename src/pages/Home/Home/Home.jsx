import Footer from "../../../shared/Footer/Footer";
import AboutMySelf from "../AboutMySelf/AboutMySelf";
import Banner from "../Banner/Banner";
import ClientSection from "../ClientSection/ClientSection";


const Home = () => {
    return (
        <div>
            <Banner /> 
            <AboutMySelf />   
            <ClientSection />    
            <Footer />    
        </div>
    );
};

export default Home;