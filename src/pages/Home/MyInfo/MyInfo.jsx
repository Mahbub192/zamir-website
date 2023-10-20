import MyImage from "../../../assets/AboutMySelf/AboutMy.png";

const MyInfo = () => {
  return (
    <div className="container mx-auto mt-36">
      <div className="flex flex-wrap ">
        <div className="w-1/2 p-5">
          <h1 className="text-5xl font-bold font-serif w-4/5 mb-5 mx-auto tracking-wide leading-relaxed">
            LET’S TALK <br /> ABOUT YOUR <br />
            <span className="text-blue-500 ">DIGITAL SUCCESS</span>
          </h1>
          <p className="font-serif text-lg w-4/5 mx-auto">
            🦋 Get your digital marketing plan, tailored made for your business.
            Share your story, vision and goals and let us do the rest.
          </p>

          <div className="pl-16 mt-5">
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="text-xl font-semibold bg-blue-500 px-8 py-3 rounded-xl text-white"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-1/2">
          <div className="w-2/3 mx-auto">
            <img className="h-[500px] mx-auto" src={MyImage} alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-bold w-2/3 mx-auto text-center">
              {" "}
              Jamir Khan
            </h1>
            <h1 className="text-2xl font-bold text-gray-400 my-5 w-2/3 text-center mx-auto">
              Marketing Team Leader
            </h1>
            <ul className="list-disc leading-loose w-2/3 mx-auto pl-20">
              <li>10x Meta Blueprint Certified.</li>
              <li>HubSpot Certified Inbound Marketer</li>
              <li>8x Google Ads & Microsoft Ads Certified</li>
              <li>Conversion Rate Optimization Professional</li>
              <li>Google Analytics & Google Tag Manager Certified.</li>
            </ul>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default MyInfo;
