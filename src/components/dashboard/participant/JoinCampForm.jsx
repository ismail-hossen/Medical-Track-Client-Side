import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { ThemeContext } from "../../../authContext/AuthContext";
import Modal from "../../modals/Modal";

const JoinCampForm = ({ camp, onClose }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(ThemeContext);
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const { campName, location, campFees, professionals, _id, dateTime, author } =
    camp || {};

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    setLoading(true);
    const formData = {
      camp: {
        id: _id,
        organizer: {
          name: author.name,
          email: author.email,
        },
        campName: data.campName,
        dateTime: dateTime,
        campFees: data.campFees,
        location: location,
      },
      name: data.name,
      email: data.email,
    };

    axiosSecure
      .post("/join-camp", formData)
      .then((res) => {
        if (res.status == 201) {
          onClose();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You join in the camp successfully. Now you have to pay",
            showConfirmButton: false,
            timer: 2900,
          });
        }
        setLoading(false);
        openModal();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Your Name
              </label>
              <input
                {...register("name")}
                className="w-full px-4 py-3 text-gray-800 border rounded-md"
                defaultValue={user?.displayName}
                name="name"
                id="name"
                type="text"
                readOnly
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="campName" className="block text-gray-600">
                Camp Name
              </label>
              <input
                {...register("campName")}
                className="w-full px-4 py-3 text-gray-800 border rounded-md"
                defaultValue={campName}
                name="campName"
                id="campName"
                type="text"
                readOnly
                placeholder="Camp Name"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="campFees" className="block text-gray-600">
                Camp Fees
              </label>
              <input
                {...register("campFees")}
                className="w-full px-4 py-3 text-gray-800 border rounded-md"
                defaultValue={campFees}
                name="campFees"
                id="campFees"
                type="number"
                readOnly
                placeholder="Camp Fees"
                required
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                {...register("email")}
                className="w-full px-4 py-3 text-gray-800 border rounded-md"
                defaultValue={user?.email}
                name="email"
                id="email"
                type="text"
                readOnly
                placeholder="Email"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="venue" className="block text-gray-600">
                Venue Location
              </label>
              <input
                {...register("venue")}
                className="w-full px-4 py-3 text-gray-800 border rounded-md"
                defaultValue={location}
                name="venue"
                id="venue"
                readOnly
                type="text"
                placeholder="Location"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="professionals" className="block text-gray-600">
                Health Care Professionals
              </label>
              <input
                {...register("professionals")}
                className="w-full px-4 py-3 text-gray-800 border rounded-md"
                defaultValue={professionals}
                name="professionals"
                id="professionals"
                readOnly
                type="text"
                placeholder="Health Care Professionals"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="modal-backdrop w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
          disabled={loading}
        >
          Join Camp & Continue
        </button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalTitle="Payment"
      ></Modal>
    </div>
  );
};

export default JoinCampForm;
