import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { ThemeContext } from "../../authContext/AuthContext";

const ProfileForm = ({ onClose }) => {
  const axiosSecure = useAxiosSecure();
  const { updateUserProfile, user, setLoading } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const imageData = new FormData();
    imageData.append("image", data?.image[0]);
    axiosSecure
      .post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_imageBB_api_key
        }`,
        imageData
      )
      .then((res) => {
        const image = res?.data?.data?.display_url;
        if (res.status == 200) {
          updateUserProfile({
            photoURL: image,
          })
            .then(() => {
              const userInfo = {
                image: image,
              };
              axiosSecure
                .patch(`/users/${user.email}`, userInfo)
                .then((res) => {
                  if (res.status == 201) {
                    onClose();
                    setLoading(true);
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Profile updated successfully.",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                });
            })
            .catch((error) => console.log(error));
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            type="file"
            id="image"
            accept="image/*"
            className={`w-full border rounded-md py-2 px-3 focus:outline-none ${
              errors.image ? "border-red-500" : "border-gray-300"
            }`}
            {...register("image", {
              required: "Profile image is required",
            })}
          />
          {errors.image && (
            <span className="text-red-500 text-sm mt-1">
              {errors.image.message}
            </span>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
