import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../authContext/AuthContext";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import THeadCols from "../../../components/table/THeadCols";
import PayHistoryTRow from "../../../components/table/PayHistoryTRow";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const tHeadData = ["Camp Name", "Camp Fees", "TrxId", "Date"];
  const { user } = useContext(ThemeContext);
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/all-payment-history/${user.email}`)
        .then((data) => setCamps(data.data));
    }
  }, [user]);

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
                    <THeadCols tHeadData={tHeadData} />
                  </tr>
                </thead>
                <tbody>
                  {camps?.length > 0
                    ? camps.map((camp) => (
                        <PayHistoryTRow key={camp._id} data={camp} />
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

export default PaymentHistory;
