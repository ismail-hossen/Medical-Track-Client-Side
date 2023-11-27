import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../authContext/AuthContext";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import THeadCols from "../../../components/table/THeadCols";
import ManageRegCampTRow from "../../../components/table/ManageRegCampTRow";

const ManageRegisteredCamps = () => {
  const axiosSecure = useAxiosSecure();
  const tHeadData = [
    "Camp Name",
    "Date and Time",
    "Location",
    "Camp Fees",
    "Payment Status",
    "Confirmation Status",
    "Action",
  ];
  const { user } = useContext(ThemeContext);
  const [camps, setCamps] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/reg-camps-by-organizer/${user.email}`)
        .then((data) => setCamps(data.data));
    }
  }, [user, reFetch]);

  return (
    <>
      <Helmet>
        <title>Medical Track | Manage Registered Camps</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <THeadCols tHeadData={tHeadData} />
                  </tr>
                </thead>
                <tbody>
                  {camps?.length > 0
                    ? camps.map((camp) => (
                        <ManageRegCampTRow
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

export default ManageRegisteredCamps;
