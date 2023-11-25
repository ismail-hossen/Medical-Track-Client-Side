import { Link } from "react-router-dom";

const MedicalCamp = ({ camp }) => {
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
    _id,
  } = camp || {};

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
      <Link to={`/camp-details/${_id}`} className="btn">
        Details
      </Link>
    </div>
  );
};

export default MedicalCamp;
