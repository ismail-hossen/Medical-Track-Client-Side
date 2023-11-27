const TBodyCol = ({ data, children, className }) => {
  return (
    <td
      scope="col"
      className={`px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal ${
        className && className
      }`}
    >
      {data ? data : children}
    </td>
  );
};

export default TBodyCol;
