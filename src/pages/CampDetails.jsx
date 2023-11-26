import { useContext } from "react";
import JoinCampModal from "../components/modals/JoinCampModal";
import { ThemeContext } from "../authContext/AuthContext";

const CampDetails = ({ camp }) => {
  const {
    name,
    image,
    fees,
    dateAndTime,
    venue,
    services,
    healthcareProfessionals,
    targetAudience,
    participants,
  } = camp || {};
  const { userRole } = useContext(ThemeContext);

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-6">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />

      <h2 className="text-lg font-semibold mb-2">{name}</h2>

      <p>
        <span className="font-semibold">Camp Fees:</span> {fees}
      </p>
      <p>
        <span className="font-semibold">Scheduled Date and Time:</span>{" "}
        {dateAndTime}
      </p>
      <p>
        <span className="font-semibold">Venue Location:</span> {venue}
      </p>
      <p>
        <span className="font-semibold">Specialized Services Provided:</span>{" "}
        {services}
      </p>
      <p>
        <span className="font-semibold">
          Healthcare Professionals in Attendance:
        </span>{" "}
        {healthcareProfessionals}
      </p>
      <p>
        <span className="font-semibold">Target Audience:</span> {targetAudience}
      </p>
      <p>
        <span className="font-semibold">Participants:</span> {participants}
      </p>
      <button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        className="btn"
        disabled={userRole == "organizer" || userRole == "professional"}
      >
        Join Camp
      </button>
      <JoinCampModal />
    </div>
  );
};

export default CampDetails;
