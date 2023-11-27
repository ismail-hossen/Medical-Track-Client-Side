import THeadCol from "./THeadCol";

const THeadCols = ({ tHeadData }) => {
  return (
    <>
      {tHeadData.map((data, index) => (
        <THeadCol key={index} data={data} />
      ))}
    </>
  );
};

export default THeadCols;
