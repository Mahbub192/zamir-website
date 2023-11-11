import image11 from "../../../assets/GoogleSearchAd/image11.png";

const ChooseUs = () => {
  return (
    <div className="  bg-gray-100 py-10">
      <div className="container mx-auto flex flex-wrap  mt-20 items-center">
      <div className="w-1/2 mx-auto mt-20">
        <img className="w-full" src={image11} alt="" />
        <div>
          <h1 className="text-3xl font-semibold mt-10">Best Full-Stack</h1>
          <h1 className="text-3xl font-semibold mt-5">Digital Marketing Agency</h1>
        </div>
      </div>
      <div className="w-1/2 mx-auto">
        <p className="pl-20 mb-3 text-blue-500 font-serif">Why Choose Us?</p>
        <h1 className="text-4xl font-bold w-4/5 mx-auto mb-3 font-serif">
          We Are The Trusted Partner For Businesses That Want To Stay Ahead Of
          The Curve.
        </h1>
        <ul className="w-4/5 mx-auto mb-3 font-serif list-disc mt-10">
          <li>
             We provide innovative digital solutions, market analysis, and
            customization services to help our clients achieve their goals and
            exceed their expectations.
          </li>
          <li className="mt-3">
             We are committed to providing our clients with the highest quality
            service and support. We are always looking for new ways to improve
            our offerings and help our clients succeed.
          </li>
        </ul>
        <div className="w-4/5 mx-auto bg-white shadow-2xl p-5 rounded-xl mt-10">
          <div className="collapse collapse-arrow border-2 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
            Options & Suggestions
            </div>
            <div className="collapse-content">
              <p>
              Unlock your potential and achieve your objectives with our innovative ideas and game-changing solutions. With our help, you can overcome any obstacle and achieve your wildest dreams!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-2 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              Market Analysis
            </div>
            <div className="collapse-content">
              <p>
              Stay ahead of the competition with our comprehensive market analysis. Understand consumer trends, market trends, and growth opportunities.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-2 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">Innovation</div>
            <div className="collapse-content">
              <p>
              We continuously monitor the latest trends and technologies to ensure that our clients are always at the forefront of their industry.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-2 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              Customization
            </div>
            <div className="collapse-content">
              <p>
              We tailor each project to the specific needs of our clients, because we understand that every business is unique.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-2 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">Teamwork</div>
            <div className="collapse-content">
              <p>
              We partner with our clients at every step of the project, working together to achieve their goals.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-2 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">Results</div>
            <div className="collapse-content">
              <p>
              Leveraging our deep industry expertise and proven track record, we deliver innovative solutions that exceed our clients&apos; expectations.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-2 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">Experience</div>
            <div className="collapse-content">
              <p>
                With years of experience in our field, we have the knowledge and
                ability to provide excellent solutions that satisfy your
                demands.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-64 bg-blue-500 text-white text-xl font-bold uppercase text-center py-4 rounded-lg">
        <button>See All Services</button>
      </div>
      </div>
      
    </div>
  );
};

export default ChooseUs;
