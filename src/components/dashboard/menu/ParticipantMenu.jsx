import MenuItem from "../MenuItem";
import { SiBasecamp } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";

const ParticipantMenu = () => {
  return (
    <>
      <MenuItem
        icon={SiBasecamp}
        label="Registered Camps"
        address="/dashboard/registered-camps"
      />
      <MenuItem
        icon={MdPayments}
        label="Payment History"
        address="/dashboard/payment-history"
      />
      <MenuItem
        icon={MdOutlineFeedback}
        label="Feedback And Ratings"
        address="/dashboard/feedback-and-ratings"
      />
    </>
  );
};

export default ParticipantMenu;
