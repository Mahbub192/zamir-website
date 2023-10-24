import image11 from "../../../assets/GoogleSearchAd/image11.png";

const ChooseUs = () => {
    return (
        <div className="flex flex-wrap  mt-20 items-center bg-gray-100 py-20">
        <div className="w-1/2 mx-auto">
          <p className="pl-32 mb-3 text-blue-500 font-serif">Why Choose Us?</p>
          <h1 className="text-4xl font-bold w-2/3 mx-auto mb-3 font-serif">
            We Provide Solutions To Make Our Clients&apos; Lives Easier
          </h1>
          <p className="w-2/3 mx-auto mb-3 font-serif">
            Choose us for exceptional quality, unmatched service, and unbeatable
            value. Experience the difference with our trusted and reliable
            teamPixel Perfect
          </p>
          <div className="w-2/3 mx-auto bg-white shadow-2xl p-5 rounded-xl">
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">
                Options & Suggestions
              </div>
              <div className="collapse-content">
                <p>
                  Develop innovative ideas and game-changing solutions for
                  yourself. With our help, overcome obstacles, realize your
                  potential, and accomplish your objectives!
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
                  With the help of our thorough market analysis, stay one step
                  ahead of the competition. Learn about consumer trends, market
                  trends, and expansion prospects.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">
                Innovation
              </div>
              <div className="collapse-content">
                <p>
                  We keep abreast of the most recent developments in trends and
                  technology to keep our clients one step ahead of the
                  competition.
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
                  We approach each project we work on specifically because we
                  recognize that every business is different.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">Teamwork</div>
              <div className="collapse-content">
                <p>
                  Every step of the way, we work directly with our customers to
                  meet their needs and accomplish their objectives.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">Results</div>
              <div className="collapse-content">
                <p>
                Our track record speaks for itself; we have a history of exceeding our clients’ expectations with our outcomes.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-2 mt-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-medium">Experience</div>
              <div className="collapse-content">
                <p>
                With years of experience in our field, we have the knowledge and ability to provide excellent solutions that satisfy your demands.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <img className="w-full" src={image11} alt="" />
        </div>
      </div>
    );
};

export default ChooseUs;