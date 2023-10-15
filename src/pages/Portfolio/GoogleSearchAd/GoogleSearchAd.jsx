import googleAd from '../../../assets/GoogleSearchAd/googlead.png'
import adding from '../../../assets/GoogleSearchAd/adding.png'
import quickly from '../../../assets/GoogleSearchAd/quickly.png'

const GoogleSearchAd = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex items-center w-5/6 mx-auto'>
                <div className='w-1/2'>
                    <img className='mx-auto ' src={googleAd} alt="" />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-3xl font-bold mb-4'>GOOGLE ADWORDS</h1>
                    <p className='leading-relaxed text-justify'>For your project&apos;s planning goals and deadlines, I provide the best Google Ads services. I’m a Google Ads certified expert who knows how to set up, optimize, and manage Google Ads campaigns to get more sales, leads, and customers.</p>
                    <p className='leading-relaxed mt-3 text-justify'>I have a wealth of experience in creating and managing Google PPC (Pay-Per-Click) ad campaigns that deliver tangible results. Here&apos;s an overview of my expertise and an example of a successful Google PPC ad campaign:</p>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='text-xl font-bold bg-gray-300 text-center py-2'>Here are some completed projects of Google Search Ads. </h1>
            </div>
            <div className='h-[600px]'>
                <h1>This part is image section add more then 1 image related by google ads.</h1>
            </div>
            {/* this is image footer section where some text are related by image section */}
            <div>
                <p className='text-lg w-5/6 mx-auto my-4'>My core strength is generating leads for local businesses And e-commerce Businesses. I have worked as a Google Adwords manager Google,  Analytics 4, and FB CAPI  for a data-driven digital marketing agency in Bangladesh for a long time.</p>
                <p className='text-lg w-5/6 mx-auto my-4'>I know what I am doing. I am honest, an excellent communicator, and easy to work with, and I try to take ownership of a project.</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold text-red-400 text-center my-10'>Don&apos;t wait! Order now and start growing your online business today.</h1>
                <div className='mx-auto w-48'>
                    <button className='bg-blue-500 text-white px-5 py-3 text-lg font-bold rounded-lg '>
                        ORDER NOW
                    </button>
                </div>
            </div>
            <div className='my-20'>
                <div className='flex flex-wrap items-center justify-around gap-2'>
                    <div className='w-1/3 bg-white shadow-2xl p-6'>
                        <img src={adding} alt="" />
                        <div className='mt-6'>
                            <h1 className='my-3 text-xl font-bold '>AUDIT AND OPTIMAZATION</h1>
                            <p className='text-justify'>It was a project of the Google Search Ads Audit and Optimization Project. Good results came after about six to seven days, and many clients were happy. </p>

                        </div>
                    </div>
                    <div className='w-1/3 bg-white shadow-2xl p-6'>
                        <img src={quickly} alt="" />
                        <div className='mt-6'>
                            <h1 className='my-3 text-xl font-bold '>QUICKLY CAMPAIGN SETUP</h1>
                            <p className='text-justify'>It was a project of the Google Search Ads Audit and Optimization Project. Good results came after about six to seven days, and many clients were happy. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleSearchAd;