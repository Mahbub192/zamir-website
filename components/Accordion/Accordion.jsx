const Accordion = () => {
  return (
    <>
      <div className="collapse collapse-arrow border-2 mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Options & Suggestions
        </div>
        <div className="collapse-content">
          <p>
          Develop innovative ideas and game-changing solutions for yourself.
            With our help, overcome obstacles, realize your potential, and
            accomplish your objectives!
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Market Analysis
        </div>
        <div className="collapse-content">
          <p>
            With the help of our thorough market analysis, stay one step ahead
            of the competition. Learn about consumer trends, market trends, and
            expansion prospects.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Innovation</div>
        <div className="collapse-content">
          <p>
            We keep abreast of the most recent developments in trends and
            technology to keep our clients one step ahead of the competition.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Customization</div>
        <div className="collapse-content">
          <p>
            We approach each project we work on specifically because we
            recognize that every business is different.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Teamwork</div>
        <div className="collapse-content">
          <p>
            Every step of the way, we work directly with our customers to meet
            their needs and accomplish their objectives.
          </p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
