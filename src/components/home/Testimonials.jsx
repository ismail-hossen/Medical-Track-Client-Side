import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res;
    },
  });

  return (
    <div className="bg-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            data?.data?.map((testimonial) => (
              <div
                key={testimonial._id}
                className="bg-white rounded-md shadow-md p-6"
              >
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
