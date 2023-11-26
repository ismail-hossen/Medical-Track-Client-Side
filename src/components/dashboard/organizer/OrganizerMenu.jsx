import { LiaClinicMedicalSolid } from "react-icons/lia";
import { CiMedicalCross } from "react-icons/ci";
import { SiManageiq } from "react-icons/si";
import MenuItem from "../MenuItem";

const OrganizerMenu = () => {
  return (
    <>
      <MenuItem
        icon={LiaClinicMedicalSolid}
        label="Manage Camps"
        address="/dashboard/manage-camps"
      />
      <MenuItem
        icon={CiMedicalCross}
        label="Add A Camp"
        address="/dashboard/add-a-camp"
      />
      <MenuItem
        icon={SiManageiq}
        label="Manage Registered Camps"
        address="/dashboard/manage-registered-camps"
      />
    </>
  );
};

export default OrganizerMenu;
