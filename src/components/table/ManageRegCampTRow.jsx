import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Button from "../button/Button";
import TBodyCol from "./TBodyCol";

const ManageRegCampTRow = ({ data, fetch }) => {
  const axiosSecure = useAxiosSecure();
  const { campName, dateTime, location, campFees } = data.camp || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to cancel?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-reg-camp/${id}`).then((res) => {
          if (res.status == 204) {
            fetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your registered camp has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const payConUpdate = (id) => {
    Swal.fire({
      title: "Are you sure to confirmed the participant has paid?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/confirm-payment-status/${id}`, {
            confirmationStatus: "Confirm",
          })
          .then((res) => {
            if (res.status == 200) {
              fetch();
              Swal.fire({
                title: "Updated!",
                text: "The participant is confirmed.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <tr>
      <TBodyCol data={campName} />
      <TBodyCol data={dateTime} />
      <TBodyCol data={location} />
      <TBodyCol data={campFees} />
      <TBodyCol>
        <Button
          onClick={() => payConUpdate(data._id)}
          label={data.confirmationStatus}
          disabled={data?.confirmationStatus == "Confirm"}
          className="btn btn-outline btn-sm"
        />
      </TBodyCol>
      {data?.paymentStatus ? (
        <TBodyCol data="Paid" className="text-green-600" />
      ) : (
        <TBodyCol data="Yet to pay." className="text-rose-600" />
      )}
      <TBodyCol>
        <Button
          onClick={() => handleDelete(data._id)}
          label="Cancel"
          disabled={data?.paymentStatus}
          className="btn btn-outline btn-sm"
        />
      </TBodyCol>
    </tr>
  );
};

export default ManageRegCampTRow;
