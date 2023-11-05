import { Link } from 'react-router-dom';
import discover1 from '../../../assets/Discover/discover1.jpeg'
import discover2 from '../../../assets/Discover/discover3.jpg'
import { FaYoutube } from 'react-icons/fa6';

const Discover = () => {
    return (
        <div className='container mx-auto  mt-20'>
            <div className='w-4/5 '>
                <h1 className='text-[60px] font-bold '>Discover Why Hundreds Of Businesses Choose Webnwell For  Their — <br /> Marketing Needs.</h1>
            </div>
            <div className='mt-36'>
                {/* <h1 className='text-5xl font-bold font-serif '>Video Testimonials</h1> */}
                <p className='text-xl text-blue-500 font-serif mt-5'>It’s more than just Business</p>
                <div className='flex items-center justify-between bg-gray-100 p-5 mt-5'>
                    <div className='w-1/3'>
                        <img src={discover1} alt="" />
                        <h1 className='text-lg text-justify font-bold font-serif'>Ross Korter spent a lot of money on his advertising before but did not get any results. He was very disappointed with his advertising and saved his business with the help of Jamir and his team. </h1>
                    </div>
                    <div className='w-2/3 pl-20 relative'>
                        <Link to={`https://www.youtube.com/watch?v=--tMDkLxSZ0&ab_channel=JamirKhan`}>
                            
                            <h1 className='text-6xl top-48 left-[550px] bg-gray-300 text-red-600 shadow-2xl border-2 px-5 absolute'> <FaYoutube /></h1>                            
                        </Link>
                        <img className='h-96 ml-auto border-4 border-red-400' src={discover2} alt="" />
                    </div>
                </div>
                {/* <div className='mt-20'>
                    <p className='font-semibold'>More Videos</p>
                    <div className="divider "></div>
                    <div className='flex gap-6 items-center justify-between'>
                    <div className=' '>
                        <Link to={`https://www.youtube.com/watch?v=--tMDkLxSZ0&ab_channel=JamirKhan`}><img className='h-52 mx-auto' src={discover2} alt="" /></Link>
                    </div>
                    <div className=' '>
                        <Link to={`https://www.youtube.com/watch?v=--tMDkLxSZ0&ab_channel=JamirKhan`}><img className='h-52 mx-auto' src={discover2} alt="" /></Link>
                    </div>
                    <div className=' '>
                        <Link to={`https://www.youtube.com/watch?v=--tMDkLxSZ0&ab_channel=JamirKhan`}><img className='h-52 mx-auto' src={discover2} alt="" /></Link>
                    </div>
                    <div className=' '>
                        <Link to={`https://www.youtube.com/watch?v=--tMDkLxSZ0&ab_channel=JamirKhan`}><img className='h-52 mx-auto' src={discover2} alt="" /></Link>
                    </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Discover;