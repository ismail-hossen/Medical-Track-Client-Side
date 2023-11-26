import MenuItem from "../MenuItem";
import { CgProfile } from "react-icons/cg";

const OrganizerProfile = () => {
  return (
    <MenuItem
      icon={CgProfile}
      label="Profile"
      address="/dashboard/organizer-profile"
    />
  );
};

export default OrganizerProfile;
