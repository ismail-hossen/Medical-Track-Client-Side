import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CampCard = ({ camp }) => {
  const {
    name,
    image,
    fees,
    scheduledDateTime,
    venueLocation,
    specializedServices,
    healthcareProfessionals,
    targetAudience,
    participants,
    _id,
  } = camp;
  const navigate = useNavigate();

  return (
    <Card>
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1">Fees: {fees}</Typography>
        <Typography variant="body1">
          Date & Time: {scheduledDateTime}
        </Typography>
        <Typography variant="body1">Location: {venueLocation}</Typography>
        <Typography variant="body1">
          Specialized Services: {specializedServices}
        </Typography>
        <Typography variant="body1">
          Healthcare Professionals: {healthcareProfessionals}
        </Typography>
        <Typography variant="body1">
          Target Audience: {targetAudience}
        </Typography>
        <Typography variant="body1">Participants: {participants}</Typography>
        <Button onClick={() => navigate(`/camp-details/${_id}`)}>
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default CampCard;
