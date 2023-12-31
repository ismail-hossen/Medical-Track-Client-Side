import { useContext, useState } from "react";
import { ThemeContext } from "../authContext/AuthContext";
import Modal from "../components/modals/Modal";
import JoinCampForm from "../components/dashboard/participant/JoinCampForm";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const CampDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { campId } = useParams();
  const { data } = useQuery({
    queryKey: ["campById"],
    queryFn: () => {
      const res = axiosPublic.get(`/camp-by-id/${campId}`);
      return res;
    },
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    campName,
    image,
    campFees,
    dateTime,
    location,
    services,
    professionals,
    targetAudience,
    participants,
  } = data?.data || {};
  const { userRole } = useContext(ThemeContext);

  return (
    <div className="container border border-b-0 border-base-200 mx-auto bg-white p-8 flex flex-col gap-3">
      <img
        src={image}
        alt={campName}
        className="w-full h-96 object-cover mb-4 rounded-md"
      />

      <h2 className="text-3xl font-semibold">{campName}</h2>

      <p>
        <span className="font-semibold">Camp Fees:</span> {campFees}
      </p>
      <p>
        <span className="font-semibold">Scheduled Date and Time:</span>{" "}
        {dateTime}
      </p>
      <p>
        <span className="font-semibold">Venue Location:</span> {location}
      </p>
      <p>
        <span className="font-semibold">Specialized Services Provided:</span>{" "}
        {services}
      </p>
      <p>
        <span className="font-semibold">
          Healthcare Professionals in Attendance:
        </span>{" "}
        {professionals}
      </p>
      <p>
        <span className="font-semibold">Target Audience:</span> {targetAudience}
      </p>
      <p>
        <span className="font-semibold">Participants:</span> {participants}
      </p>
      <button
        onClick={openModal}
        className="btn"
        disabled={userRole == "organizer" || userRole == "professional"}
      >
        Join Camp
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} modalTitle="Join Camp">
        <JoinCampForm onClose={closeModal} camp={data?.data} />
      </Modal>
    </div>
  );
};

export default CampDetails;
