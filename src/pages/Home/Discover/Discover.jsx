import { Link } from 'react-router-dom';
import discover from '../../../assets/Discover/discover.png'
import discover1 from '../../../assets/Discover/discover1.jpeg'
import discover2 from '../../../assets/Discover/discover2.jpeg'

const Discover = () => {
    return (
        <div className='container mx-auto  mt-20'>
            <div className='w-4/5 '>
                <h1 className='text-[60px] font-bold '>Discover Why Hundreds Of Businesses Choose Webnwell For  Their — <br /> Marketing Needs.</h1>
            </div>
            <div className="mt-20">
                <img className='mx-auto rounded-xl ' src={discover} alt="" />
            </div>
            <div className='mt-36'>
                <h1 className='text-5xl font-bold font-serif '>Video Testimonials</h1>
                <p className='text-xl text-blue-500 font-serif mt-5'>It’s more than just Business</p>
                <div className='flex items-center justify-between bg-gray-100 p-5 mt-5'>
                    <div className='w-1/3'>
                        <img src={discover1} alt="" />
                        <h1 className='text-xl font-bold mt-5'>Mitchells Solicitors is a leading law firm with offices in Brisbane City, Moorooka, Aspley, and Sunshine Coast.</h1>
                    </div>
                    <div className='w-2/3 pl-20 '>
                        <Link to={`https://www.youtube.com/watch?v=--tMDkLxSZ0&ab_channel=JamirKhan`}><img className='h-96 ml-auto' src={discover2} alt="" /></Link>
                    </div>
                </div>
                <div className='mt-20'>
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
                </div>
            </div>
        </div>
    );
};

export default Discover;