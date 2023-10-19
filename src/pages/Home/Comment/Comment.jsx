import { FaQuoteLeft } from "react-icons/fa6";


const Comment = () => {
    return (
        <div className="mt-20 bg-gray-300 py-20">
            <div className="container mx-auto ">
            <p className="text-6xl text-orange-500"><FaQuoteLeft /></p>
            <h1 className="text-5xl font-semibold italic tracking-wide leading-relaxed ">We Developed A Great Partnership With Monzurul And His Team And Their Dedication To Our Digital Ads Campaign Is Evident In All Aspects Our Business Online. We Appreciate Their Attention To Details And Creative Approach To Bringing Our New Exhibit To Life Online.</h1>
            <h1 className="text-4xl font-semibold italic tracking-wide leading-relaxed mt-5">Bryan Mitchell</h1>
            <p className="text-lg italic">Founder Of Mitchell Solicitors</p>
            </div>
        </div>
    );
};

export default Comment;