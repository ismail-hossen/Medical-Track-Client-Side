import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../authContext/AuthContext";
import Swal from "sweetalert2";

const AddACamp = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    setLoading(true);
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
        const formData = {
          author: { name: user.displayName, email: user.email },
          campName: data.campName,
          campFees: data.campFees,
          participants: 0,
          dateTime: data.date,
          description: data.description,
          image: image,
          professionals: data.professionals,
          services: data.services,
          targetAudience: data.targetAudience,
          location: data.venue,
        };
        if (res.status == 200) {
          axiosSecure
            .post("/create-camp", formData)
            .then((res) => {
              if (res.status == 201) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your created camp saved",
                  showConfirmButton: false,
                  timer: 2000,
                });
                reset();
              }
            })
            .catch(() => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            });
          setLoading(false);
        }
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
    <>
      <Helmet>
        <title>Medical Track | Add a Camp</title>
      </Helmet>
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="campName" className="block text-gray-600">
                  Camp Name
                </label>
                <input
                  {...register("campName", { required: true })}
                  className="w-full px-4 py-3 text-gray-800 border rounded-md "
                  name="campName"
                  id="campName"
                  type="text"
                  placeholder="Camp Name"
                />
                {errors.campName && (
                  <span className="text-red-600">Camp Name is required</span>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="campFees" className="block text-gray-600">
                  Camp Fees
                </label>
                <input
                  {...register("campFees", { required: true })}
                  className="w-full px-4 py-3 text-gray-800 border rounded-md "
                  name="campFees"
                  id="campFees"
                  type="number"
                  placeholder="Camp Fees"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="services" className="block text-gray-600">
                  Specialized Services Provided
                </label>
                <input
                  {...register("services", { required: true })}
                  className="w-full px-4 py-3 text-gray-800 border rounded-md "
                  name="services"
                  id="services"
                  type="text"
                  placeholder="Services Provided"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="venue" className="block text-gray-600">
                  Venue Location
                </label>
                <input
                  {...register("venue", { required: true })}
                  className="w-full px-4 py-3 text-gray-800 border rounded-md "
                  name="venue"
                  id="venue"
                  type="text"
                  placeholder="Location"
                  required
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="date" className="block text-gray-600">
                  Schedule Date and Time
                </label>
                <input
                  {...register("date", { required: true })}
                  className="w-full px-4 py-3 text-gray-800 border rounded-md "
                  name="date"
                  id="date"
                  type="datetime-local"
                  placeholder="Date and Time"
                  required
                />
              </div>

              <div className="p-4 bg-white w-full m-auto rounded-lg">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        {...register("image", { required: true })}
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        hidden
                      />
                      <div className="bg-blue-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-300">
                        Upload Image
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="professionals"
                    className="block text-gray-600"
                  >
                    Health Care Professionals
                  </label>
                  <input
                    {...register("professionals", { required: true })}
                    className="w-full px-4 py-3 text-gray-800 border rounded-md "
                    name="professionals"
                    id="professionals"
                    type="text"
                    placeholder="Health Care Professionals"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="targetAudience"
                    className="block text-gray-600"
                  >
                    Target Audience
                  </label>
                  <input
                    {...register("targetAudience", { required: true })}
                    className="w-full px-4 py-3 text-gray-800 border rounded-md "
                    name="targetAudience"
                    id="targetAudience"
                    type="text"
                    placeholder="Target Audience"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>

                <textarea
                  {...register("description", { required: true })}
                  id="description"
                  className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border"
                  name="description"
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default AddACamp;
