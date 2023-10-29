import { GoGraph } from "react-icons/go";
import { RiUserSettingsLine } from "react-icons/ri";
import { GiWorld } from "react-icons/gi";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaCircleArrowDown } from "react-icons/fa6";



const GoogleAnalyticsTracking = () => {
    return (
        <div className="py-24 container mx-auto">
            <h1 className="text-center text-5xl">Google Analytics tracking & dashboards that tell you:</h1>
            <div className="flex flex-wrap justify-between mt-20">
                <div className="bg-gray-300 py-20 px-10 hover:text-orange-400 w-72 text-center">
                    <p className="text-6xl pb-6 rounded-full"><GoGraph className="mx-auto bg-[#a64ac9] px-4 py-2 rounded-full font-bold text-white"></GoGraph></p>
                    
                    <h1 className="text-2xl font-bold ">Traffic Metrics</h1>
                </div>
                <div className="bg-gray-300 py-20 px-10 hover:text-orange-400 w-72 text-center">
                    <p className="text-6xl pb-6 rounded-full"><GiWorld className="mx-auto bg-[#fccd04] px-4 py-2 rounded-full font-bold text-white"></GiWorld></p>
                    
                    <h1 className="text-2xl font-bold ">Users&apos; Geographic Locations</h1>
                </div>
                <div className="bg-gray-300 py-20 px-10 hover:text-orange-400 w-72 text-center">
                    <p className="text-6xl pb-6 rounded-full"><RiUserSettingsLine className="mx-auto bg-[#ffb48f] px-4 py-2 rounded-full font-bold text-white"></RiUserSettingsLine></p>
                    
                    <h1 className="text-2xl font-bold ">User Actions & Conversion Rate</h1>
                </div>
                <div className="bg-gray-300 py-20 px-10 hover:text-orange-400 w-72 text-center">
                    <p className="text-6xl pb-6 rounded-full"><TfiAnnouncement className="mx-auto bg-[#443791] px-4 py-2 rounded-full font-bold text-white"></TfiAnnouncement></p>
                    
                    <h1 className="text-2xl font-bold ">Most Lucrative Advertising Channels</h1>
                </div>
                <div className="bg-gray-300 py-20 px-10 hover:text-orange-400 w-72 text-center">
                    <p className="text-6xl pb-6 rounded-full"><FaCircleArrowDown className="mx-auto bg-[#17e9e0] px-4 py-2 rounded-full font-bold text-white"></FaCircleArrowDown></p>
                    
                    <h1 className="text-2xl font-bold ">Drop-offs in the Customer Journey</h1>
                </div>
            </div>
        </div>
    );
};

export default GoogleAnalyticsTracking;