import { useContext } from "react";
import { ThemeContext } from "../authContext/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import MedicalCamp from "../components/home/MedicalCamp";

const AvailableCamps = () => {
  const { loading } = useContext(ThemeContext);
  const axiosSecure = useAxiosSecure();
  const { data, isLoading } = useQuery({
    queryKey: ["popular-camps"],
    queryFn: () => {
      const res = axiosSecure.get("/camps");
      return res;
    },
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">All Medical Camps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading || loading ? (
          <h4>Loading...</h4>
        ) : (
          data?.data?.map((camp) => <MedicalCamp key={camp._id} camp={camp} />)
        )}
      </div>
    </div>
  );
};

export default AvailableCamps;
