import MyInfo from "../Home/MyInfo/MyInfo";
import AboutBanner from "./AboutBanner";
import AboutUsInfo from "./AboutUsInfo";
import OurLocation from "./OurLocation/OurLocation";
import TeamMember from "./TeamMember/TeamMember";


const About = () => {
    return (
        <div>
            <AboutBanner />
            <AboutUsInfo />
            <TeamMember />
            <OurLocation />
            <MyInfo />
        </div>
    );
};

export default About;