import Button from "../button/Button";
import TBodyCol from "./TBodyCol";

const TRow = ({ data }) => {
  const {
    campName,
    dateTime,
    location,
    services,
    professionals,
    targetAudience,
    description,
  } = data || {};
  return (
    <tr>
      <TBodyCol data={campName} />
      <TBodyCol data={dateTime} />
      <TBodyCol data={location} />
      <TBodyCol data={services} />
      <TBodyCol data={professionals} />
      <TBodyCol data={targetAudience} />
      <TBodyCol data={description} />
      <td>
        <Button label="Delete" className="btn btn-outline btn-sm" />
      </td>
      <td>
        <Button label="Update" className="btn btn-outline btn-info btn-sm" />
      </td>
    </tr>
  );
};

export default TRow;
