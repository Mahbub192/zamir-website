import { useForm } from "react-hook-form";
import MyImage from "../../../assets/AboutMySelf/AboutMy.png";
import { useEffect } from "react";
import Aos from "aos";

const AboutFrom = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
    
      useEffect(() => {
        Aos.init({
          duration: 1500, // animation duration
          easing: 'ease-in-out', // easing for animation
          once: true, // whether animation should happen only once while scrolling down
        });
      }, []);
    return (
        <div className="container mx-auto pt-20">
        <div className="flex flex-wrap">
          <div className="w-1/2 bg-white shadow-2xl p-5">
            <h1 className="text-3xl font-bold font-serif w-4/5 mb-5 mx-auto">
              Refreshing Your Brand And Paving The Way For New Business Ventures
            </h1>
            <p className="font-serif text-lg w-4/5 mx-auto">
              Get your digital marketing plan, tailored made for your business.
              Share your story, vision and goals and let us do the rest.
            </p>

            <div data-aos="fade-up" className="mt-10 mb-10 w-4/5 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email@gmail.com"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control   mt-4">
                  <label className="label ">
                    <span className="label-text flex items-center">
                      {" "}
                      <span className="pl-2">Message</span>
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered textarea-lg w-full "
                    type="text"
                    {...register("message", { required: true })}
                    placeholder="Message"
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-600">Message is required</span>
                  )}
                </div>

                <button
                  className={`mt-10 mx-auto border-2 px-10 py-2 text-lg md:text-xl font-bold bg-blue-500 hover:bg-blue-800 text-white `}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="w-1/2">
            <div className="w-2/3 mx-auto">
              <img className="h-[500px] mx-auto" src={MyImage} alt="" />
            </div>
            <div>
              <h1 className="text-4xl font-bold w-2/3 mx-auto text-center"> Jamir Khan</h1>
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
      </div>
    );
};

export default AboutFrom;