import { useForm } from "react-hook-form";
import MyImage from "../../../assets/AboutMySelf/AboutMy.png";

const MyInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto mt-36">
      <div className="flex flex-wrap ">
        <div className="w-1/2 p-5">
          <h1 className="text-4xl font-bold font-serif  mb-2 mx-auto tracking-wide leading-relaxed">
            NEED A MARKETING PLAN?
          </h1>
          <h1 className="text-3xl font-bold font-serif  mb-5 mx-auto tracking-wide leading-relaxed text-blue-500 ">
            LET’S DISCUSS YOUR DIGITAL SUCCESS
          </h1>
          <p className="font-serif text-lg  mx-auto">
            🦋 Share your business story, vision, and goals, and we&apos;ll
            create a custom Digital Marketing plan to help you achieve them.
          </p>
          <div className="bg-gray-200 shadow-2xl rounded-lg mt-8 mr-5">
            <form className="px-20 py-10" onSubmit={handleSubmit(onSubmit)}>
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
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  {...register("phone", { required: true })}
                  placeholder="+880 15******"
                  className="input input-bordered"
                />
                {errors.phone && (
                  <span className="text-red-600">Phone Number is required</span>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Website URL </span>
                </label>
                <input
                  type="url"
                  {...register("url", { required: true })}
                  placeholder="Website URL "
                  className="input input-bordered"
                />
                {errors.url && (
                  <span className="text-red-600">Website URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Required</span>
                </label>
                <select {...register("service")} className="input input-bordered">
                <option value="Ongoning Expert Management">Ongoning Expert Management</option>
                  <option value="Deep One-Time Audit">Deep One-Time Audit</option>
                </select>
                {errors.service && (
                  <span className="text-red-600">Service is required</span>
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
                  placeholder="Type your Message here"
                ></textarea>
                {errors.message && (
                  <span className="text-red-600">Message is required</span>
                )}
              </div>
              <div className="mt-5">
                <p className="text-center text-gray-500">Your information is 100% secure.</p>
              </div>

              <button
                className={`w-full mt-5 mx-auto border-2 px-10 py-2 text-lg md:text-xl font-bold bg-blue-500 hover:bg-blue-800 text-white `}
                type="submit"
              >
                Submit
              </button>
              <p className=" text-center py-4">Please do your very best to answer the questions, or if you don’t know or can’t answer the questions, you are welcome to leave them blank.</p>
            </form>
            
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
              <li>8x Google Ads Certified.</li>
              <li>10x Meta Blueprint Certified.</li>
              <li>Conversion Rate Optimization Professional.</li>
              <li>Google Analytics & Google Tag Manager Certified</li>
              <li>A professional communicator [in English]</li>
              <li>4 Years of Job Experience as a Google Adwords Manager.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
