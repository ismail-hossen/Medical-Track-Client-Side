import { FaHouseMedicalCircleCheck } from "react-icons/fa6";
import MenuItem from "../MenuItem";

const ProfessionalMenu = () => {
  return (
    <MenuItem
      icon={FaHouseMedicalCircleCheck}
      label="Accepted Camps"
      address="/dashboard/accepted-camps"
    />
  );
};

export default ProfessionalMenu;
