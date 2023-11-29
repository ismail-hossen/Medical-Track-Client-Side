import { useState } from "react";
import Button from "../../button/Button";
import TBodyCol from "../../table/TBodyCol";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { ThemeContext } from "../../../authContext/AuthContext";
import Swal from "sweetalert2";

const FeedbackTRow = ({ data }) => {
  const [reviewField, setReviewField] = useState(false);
  const [review, setReview] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(ThemeContext);
  const { campName, dateTime, location, campFees } = data.camp || {};

  const handleCreateReview = () => {
    const reviewData = {
      comment: review,
      campName: campName,
      name: user.displayName,
      photo: user.photoURL,
    };
    if (review) {
      axiosSecure.post("/create-review", reviewData).then(() => {
        setReviewField(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your review has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  };

  return (
    <>
      <tr>
        <TBodyCol data={campName} />
        <TBodyCol data={dateTime} />
        <TBodyCol data={location} />
        <TBodyCol data={campFees} />
        <TBodyCol data={data.paymentStatus && "Paid"} />
        <TBodyCol data={data.confirmationStatus} />
        <TBodyCol>
          {reviewField ? (
            <div className="flex items-center justify-center">
              <textarea
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write Your Feedback"
                className="textarea textarea-bordered textarea-xs w-full max-w-xs"
              ></textarea>
              <div>
                <Button
                  onClick={() => handleCreateReview()}
                  label="save"
                  className="btn btn-outline btn-sm ml-1"
                />
                <Button
                  onClick={() => setReviewField(false)}
                  label="Cancel"
                  className="btn btn-outline btn-sm ml-1"
                />
              </div>
            </div>
          ) : (
            <Button
              onClick={() => setReviewField(true)}
              label="Review"
              className="btn btn-outline btn-sm"
            />
          )}
        </TBodyCol>
      </tr>
    </>
  );
};

export default FeedbackTRow;
