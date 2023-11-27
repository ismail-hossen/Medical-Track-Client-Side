import { Helmet } from "react-helmet";
import THeadCol from "../../../components/table/THeadCol";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../authContext/AuthContext";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TRow from "../../../components/table/TRow";

const ManageCamps = () => {
  const axiosSecure = useAxiosSecure();
  const tHeadData = [
    "Camp Name",
    "Date and Time",
    "Location",
    "Services Provided",
    "Professionals",
    "Target Audience",
    "Description",
  ];
  const { user } = useContext(ThemeContext);
  const [camps, setCamps] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/camps-by-organizer/${user.email}`)
        .then((data) => setCamps(data.data));
    }
  }, [user, reFetch]);

  return (
    <>
      <Helmet>
        <title>Medical Track | Manage Camps</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    {tHeadData.map((data, index) => (
                      <THeadCol key={index} data={data} />
                    ))}
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Delete
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {camps?.length > 0
                    ? camps.map((camp) => (
                        <TRow
                          key={camp._id}
                          fetch={() => setReFetch((f) => !f)}
                          data={camp}
                        />
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageCamps;
