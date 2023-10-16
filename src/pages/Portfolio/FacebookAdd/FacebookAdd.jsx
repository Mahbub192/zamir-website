import facebookAd from '../../../assets/FacebookAdd/facebookadd.png'
import facebookService from '../../../assets/FacebookAdd/facebookService.png'
const FacebookAdd = () => {
    return (
        <div className="container mx-auto">
            <h1 className='text-3xl font-bold  text-center mb-10'>FACEBOOK PIXEL & CONVERSION API</h1>
            <div className='flex items-center w-5/6 mx-auto'>
                <div className='w-1/2'>
                    <img className='mx-auto ' src={facebookAd} alt="" />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-3xl font-bold mb-4'>GOOGLE ADWORDS</h1>
                    <p className='leading-relaxed text-justify'>For your project&apos;s planning goals and deadlines, I provide the best Google Ads services. I’m a Google Ads certified expert who knows how to set up, optimize, and manage Google Ads campaigns to get more sales, leads, and customers.</p>
                    <p className='leading-relaxed mt-3 text-justify'>I have a wealth of experience in creating and managing Google PPC (Pay-Per-Click) ad campaigns that deliver tangible results. Here&apos;s an overview of my expertise and an example of a successful Google PPC ad campaign:</p>
                </div>
            </div>
            <div className='mt-10'>
                <img className='mx-auto border-2 border-gray-300 p-3 bg-white shadow-2xl' src={facebookService} alt="" />
            </div>
        </div>
    );
};

export default FacebookAdd;