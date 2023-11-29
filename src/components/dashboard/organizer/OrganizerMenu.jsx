import { LiaClinicMedicalSolid } from "react-icons/lia";
import { CiMedicalCross } from "react-icons/ci";
import { SiManageiq } from "react-icons/si";
import MenuItem from "../MenuItem";
import { CiMedicalClipboard } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";

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
      <MenuItem
        icon={IoAddSharp}
        label="Add Upcoming Camps"
        address="/dashboard/add-upcoming-camp"
      />
      <MenuItem
        icon={CiMedicalClipboard}
        label="Manage Upcoming Camps"
        address="/dashboard/manage-upcoming-camps"
      />
    </>
  );
};

export default OrganizerMenu;
