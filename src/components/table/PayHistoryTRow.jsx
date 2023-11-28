import TBodyCol from "./TBodyCol";

const PayHistoryTRow = ({ data }) => {
  const { transactionId, date } = data || {};
  const { campName, campFees } = data.camp || {};

  return (
    <tr>
      <TBodyCol data={campName} />
      <TBodyCol data={campFees} />
      <TBodyCol className="text-green-600" data={transactionId} />
      <TBodyCol data={date} />
    </tr>
  );
};

export default PayHistoryTRow;
