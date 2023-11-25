const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: "John Doe",
      position: "CEO, ABC Company",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      author: "Jane Smith",
      position: "Marketing Manager, XYZ Inc.",
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      author: "Jane Smith",
      position: "Marketing Manager, XYZ Inc.",
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="bg-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-md shadow-md p-6"
            >
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={`https://i.pravatar.cc/150?img=${testimonial.id}`}
                    alt={`${testimonial.author}`}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">
                    {testimonial.author}
                  </h3>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
