import { useState } from "react";
import CampCard from "./CampCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "4px",
    margin: "1rem 0",
  },
  button: {
    padding: "0.5rem 1rem",
  },
});

const MedicalSection = () => {
  const classes = useStyles();
  const medicalCamps = [
    {
      _id: 1,
      name: "Camp 1",
      image: "camp1.jpg",
      fees: "$50",
      scheduledDateTime: "January 10, 2024 - 9:00 AM",
      venueLocation: "123 Main Street, City, Country",
      specializedServices: "Dental check-up, Eye care",
      healthcareProfessionals: "Dentists, Ophthalmologists",
      targetAudience: "All ages",
      participants: 50,
    },
    {
      _id: 2,
      name: "Camp 2",
      image: "camp1.jpg",
      fees: "$50",
      scheduledDateTime: "January 10, 2024 - 9:00 AM",
      venueLocation: "123 Main Street, City, Country",
      specializedServices: "Dental check-up, Eye care",
      healthcareProfessionals: "Dentists, Ophthalmologists",
      targetAudience: "All ages",
      participants: 45,
    },
    {
      _id: 3,
      name: "Camp 3",
      image: "camp1.jpg",
      fees: "$50",
      scheduledDateTime: "January 10, 2024 - 9:00 AM",
      venueLocation: "123 Main Street, City, Country",
      specializedServices: "Dental check-up, Eye care",
      healthcareProfessionals: "Dentists, Ophthalmologists",
      targetAudience: "All ages",
      participants: 43,
    },
    {
      _id: 4,
      name: "Camp 4",
      image: "camp1.jpg",
      fees: "$50",
      scheduledDateTime: "January 10, 2024 - 9:00 AM",
      venueLocation: "123 Main Street, City, Country",
      specializedServices: "Dental check-up, Eye care",
      healthcareProfessionals: "Dentists, Ophthalmologists",
      targetAudience: "All ages",
      participants: 40,
    },
    {
      _id: 5,
      name: "Camp 5",
      image: "camp1.jpg",
      fees: "$50",
      scheduledDateTime: "January 10, 2024 - 9:00 AM",
      venueLocation: "123 Main Street, City, Country",
      specializedServices: "Dental check-up, Eye care",
      healthcareProfessionals: "Dentists, Ophthalmologists",
      targetAudience: "All ages",
      participants: 30,
    },
    {
      _id: 6,
      name: "Camp 6",
      image: "camp1.jpg",
      fees: "$50",
      scheduledDateTime: "January 10, 2024 - 9:00 AM",
      venueLocation: "123 Main Street, City, Country",
      specializedServices: "Dental check-up, Eye care",
      healthcareProfessionals: "Dentists, Ophthalmologists",
      targetAudience: "All ages",
      participants: 50,
    },
  ];
  const [camps, setCamps] = useState(medicalCamps);
  const navigate = useNavigate();

  const sortByEngagement = () => {
    const sortedCamps = [...camps].sort(
      (a, b) => a.participants - b.participants
    );
    setCamps(sortedCamps);
  };

  const resetSort = () => {
    setCamps(medicalCamps);
  };

  return (
    <div>
      <div className={classes.buttonsContainer}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={sortByEngagement}
        >
          Sort by Engagement
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={resetSort}
        >
          Reset Sort
        </Button>
      </div>
      <Box sx={{ flexGrow: 1 }} marginTop={5} marginBottom={5}>
        <Grid container spacing={2}>
          {camps.map((camp, index) => (
            <Grid item key={index} xs={6}>
              <CampCard camp={camp} />
            </Grid>
          ))}
        </Grid>
        <Button
          onClick={() => navigate("/available-camps")}
          sx={{ marginTop: "20px" }}
          variant="contained"
        >
          See All Camps
        </Button>
      </Box>
    </div>
  );
};

export default MedicalSection;
