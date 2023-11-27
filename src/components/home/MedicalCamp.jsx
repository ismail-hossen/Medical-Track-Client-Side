import { Link } from "react-router-dom";

const MedicalCamp = ({ camp }) => {
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
    _id,
  } = camp || {};

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-6">
      <img
        src={image}
        alt={campName}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />

      <h2 className="text-lg font-semibold mb-2">{campName}</h2>

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
      <Link to={`/camp-details/${_id}`} className="btn">
        Details
      </Link>
    </div>
  );
};

export default MedicalCamp;
