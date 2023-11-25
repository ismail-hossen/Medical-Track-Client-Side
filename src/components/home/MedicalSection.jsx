import { useState } from "react";
import MedicalCamp from "./MedicalCamp";
import { Link } from "react-router-dom";

const MedicalSection = () => {
  // Sample data for medical camps
  const campsData = [
    {
      _id: 1,
      name: "Health & Wellness Check-up Camp",
      image: "camp1.jpg",
      fees: "$20",
      dateAndTime: "December 10, 2023 - 9:00 AM to 4:00 PM",
      venue: "Community Center, 123 Main Street",
      services: "General health check-up, vaccinations, nutrition counseling",
      healthcareProfessionals: "Doctors, nurses, nutritionists",
      targetAudience: "All ages",
      participants: 51,
    },
    {
      _id: 2,
      name: "Dental Care Awareness Camp",
      image: "camp2.jpg",
      fees: "Free",
      dateAndTime: "January 5, 2024 - 10:00 AM to 2:00 PM",
      venue: "Local School Auditorium, 456 Elm Street",
      services: "Dental check-ups, oral hygiene education",
      healthcareProfessionals: "Dentists, dental hygienists",
      targetAudience: "Children and adults",
      participants: 20,
    },
    {
      _id: 3,
      name: "Heart Health Screening Camp",
      image: "camp3.jpg",
      fees: "$15",
      dateAndTime: "February 20, 2024 - 8:30 AM to 3:30 PM",
      venue: "City Hospital, 789 Oak Avenue",
      services: "Cardiac screenings, cholesterol tests, consultation",
      healthcareProfessionals: "Cardiologists, nurses",
      targetAudience: "Adults over 30",
      participants: 49,
    },
    {
      _id: 4,
      name: "Mental Health Awareness Workshop",
      image: "camp4.jpg",
      fees: "Free",
      dateAndTime: "March 15, 2024 - 1:00 PM to 4:00 PM",
      venue: "Community Center, 321 Pine Street",
      services: "Educational sessions, counseling information",
      healthcareProfessionals: "Psychiatrists, psychologists, counselors",
      targetAudience: "Teens and adults",
      participants: 50,
    },
    {
      _id: 5,
      name: "Diabetes Management Seminar",
      image: "camp5.jpg",
      fees: "$25",
      dateAndTime: "April 8, 2024 - 9:30 AM to 5:00 PM",
      venue: "Convention Center, 567 Maple Avenue",
      services: "Diabetes screenings, diet planning, exercise tips",
      healthcareProfessionals: "Endocrinologists, dietitians",
      targetAudience: "Individuals with diabetes",
      participants: 55,
    },
    {
      _id: 6,
      name: "Women's Health Check-up Camp",
      image: "camp6.jpg",
      fees: "$10",
      dateAndTime: "May 12, 2024 - 8:00 AM to 12:00 PM",
      venue: "Women's Health Clinic, 890 Walnut Street",
      services: "Women's health screenings, reproductive health consultations",
      healthcareProfessionals: "Gynecologists, nurses",
      targetAudience: "Women of all ages",
      participants: 43,
    },
    {
      _id: 7,
      name: "Vision Care and Eye Check-up Camp",
      image: "camp7.jpg",
      fees: "Free",
      dateAndTime: "June 25, 2024 - 11:00 AM to 3:00 PM",
      venue: "Local Community Center, 101 Cherry Lane",
      services: "Eye examinations, vision tests, eyeglass prescriptions",
      healthcareProfessionals: "Optometrists, ophthalmologists",
      targetAudience: "All ages",
      participants: 97,
    },
    {
      _id: 8,
      name: "Senior Citizens Health Seminar",
      image: "camp8.jpg",
      fees: "Free",
      dateAndTime: "July 18, 2024 - 10:30 AM to 1:30 PM",
      venue: "Senior Center, 222 Elderly Avenue",
      services: "Geriatric health discussions, wellness tips for seniors",
      healthcareProfessionals: "Geriatricians, social workers",
      targetAudience: "Senior citizens",
      participants: 100,
    },
  ];
  const [camps, setCamps] = useState(campsData);

  const sortCampsByParticipant = () => {
    const sortedCamps = [...camps].sort((campA, campB) => {
      return campB.participants - campA.participants;
    });

    setCamps(sortedCamps);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Popular Medical Camps</h1>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Sort by Participant:</h2>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={sortCampsByParticipant}
        >
          Sort
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {camps.map((camp, index) => (
          <MedicalCamp key={index} camp={camp} />
        ))}
      </div>
      <Link to="/available-camps" className="btn">
        See All Camps
      </Link>
    </div>
  );
};

export default MedicalSection;
