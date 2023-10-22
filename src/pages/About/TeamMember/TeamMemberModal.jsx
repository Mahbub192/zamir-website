/* eslint-disable react/prop-types */
import { useState } from "react";
import "./TeamMember.css";
import { FaArrowRightLong } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const TeamMemberModal = ({  image, imageName, name, designation, info }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      
        <div className="w-1/4">
          {/* <img
                className="h-72 w-64 object-cover mx-auto"
                src={singleMember.image}
                alt={singleMember.name}
              /> */}
          <div
            className="zoomable-image"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              className="h-72 w-64 object-cover mx-auto"
              src={isHovered ? image : image}
              alt={imageName}
            />
          </div>
          <div>
            <h1 className="text-center mt-5 text-2xl font-bold">{name}</h1>
            <p className="text-center mt-2 font-semibold text-violet-700">
              {designation}
            </p>
            <p className="text-center mt-3">
              {info.length > 50 ? info.slice(0, 100) : info}
              ...
            </p>
            <div className="text-center mt-5">
              <button
                onClick={showModal}
                className="text-xl text-orange-500 hover:text-2xl"
              >
                <FaArrowRightLong></FaArrowRightLong>
              </button>
            </div>
          </div>
        </div>
      
      {modalVisible && (
        <dialog className="modal" open>
          <div className="modal-box w-9/12 max-w-5xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <img className="h-72 mx-auto" src={image} alt="" />
            <div>
              <h1 className="text-center mt-5 text-2xl font-bold">{name}</h1>
              <p className="text-center mt-2 font-semibold text-violet-700">
                {designation}
              </p>
              <p className="text-justify mt-3">{info} </p>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={closeModal}>Close</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default TeamMemberModal;
