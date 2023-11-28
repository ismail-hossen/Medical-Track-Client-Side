import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Button from "../button/Button";
import TBodyCol from "./TBodyCol";
import { useState } from "react";
import Modal from "../modals/Modal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../form/PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);
const RegCampTRow = ({ data, fetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to found the camp!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-reg-camp/${id}`).then((res) => {
          console.log(res);
          if (res.status == 204) {
            fetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your camp has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const { campName, dateTime, location, campFees } = data.camp || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <tr>
        <TBodyCol data={campName} />
        <TBodyCol data={dateTime} />
        <TBodyCol data={location} />
        <TBodyCol data={campFees} />
        <TBodyCol data={data.confirmationStatus} />
        {data?.paymentStatus ? (
          <TBodyCol data="Paid" />
        ) : (
          <TBodyCol>
            <Button
              onClick={openModal}
              label="Pay"
              className="btn btn-outline btn-sm"
            />
          </TBodyCol>
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
      <Modal isOpen={isModalOpen} modalTitle="Payment">
        <Elements stripe={stripePromise}>
          <PaymentForm onClose={closeModal} regCampInfo={data} fetch={fetch} />
        </Elements>
      </Modal>
    </>
  );
};

export default RegCampTRow;
