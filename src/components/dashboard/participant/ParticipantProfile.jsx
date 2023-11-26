import MenuItem from "../MenuItem";
import { CgProfile } from "react-icons/cg";

const ParticipantProfile = () => {
  return (
    <MenuItem
      icon={CgProfile}
      label="Profile"
      address="/dashboard/participant-profile"
    />
  );
};

export default ParticipantProfile;
