import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Button from "../button/Button";
import TBodyCol from "./TBodyCol";
import { useState } from "react";
import Modal from "../modals/Modal";
import CampUpdateForm from "../dashboard/organizer/CampUpdateForm";

const TRow = ({ data, fetch }) => {
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
        axiosSecure.delete(`/delete-camp/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
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
  const {
    campName,
    dateTime,
    location,
    services,
    professionals,
    targetAudience,
    description,
    _id,
  } = data || {};
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
        <TBodyCol data={services} />
        <TBodyCol data={professionals} />
        <TBodyCol data={targetAudience} />
        <TBodyCol data={description} />
        <TBodyCol>
          <Button
            onClick={() => handleDelete(_id)}
            label="Delete"
            className="btn btn-outline btn-sm"
          />
        </TBodyCol>
        <TBodyCol>
          <Button
            onClick={openModal}
            label="Update"
            className="btn btn-outline btn-info btn-sm"
          />
        </TBodyCol>
      </tr>
      <Modal isOpen={isModalOpen} onClose={closeModal} modalTitle="Update Camp">
        <CampUpdateForm camp={data} fetch={fetch} onClose={closeModal} />
      </Modal>
    </>
  );
};

export default TRow;
