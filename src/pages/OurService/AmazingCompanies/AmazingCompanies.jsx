import company from '../../../assets/OurService/company.png'

const AmazingCompanies = () => {
    return (
        <div className='container mx-auto'>
            <h1 className="mt-20 text-4xl font-bold">We’ve Had The Privilege Of Working With Amazing Companies.</h1>
            <img className='mt-10 mx-auto w-full' src={company} alt="" />
        </div>
    );
};

export default AmazingCompanies;