import { useContext } from "react";
import MedicalCamp from "./MedicalCamp";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ThemeContext } from "../../authContext/AuthContext";
import { useQuery } from "@tanstack/react-query";

const MedicalSection = () => {
  const { loading } = useContext(ThemeContext);
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["popular-camps"],
    queryFn: () => {
      const res = axiosPublic.get("/popular-camps");
      return res;
    },
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Popular Medical Camps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading || loading ? (
          <h4>Loading...</h4>
        ) : (
          data?.data?.map((camp) => <MedicalCamp key={camp._id} camp={camp} />)
        )}
      </div>
      <Link to="/available-camps" className="btn">
        See All Camps
      </Link>
    </div>
  );
};

export default MedicalSection;
