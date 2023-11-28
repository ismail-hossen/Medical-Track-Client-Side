import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { ThemeContext } from "../../authContext/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PaymentForm = ({ regCampInfo, onClose, fetch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(ThemeContext);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const axiosSecure = useAxiosSecure();

  // Create Payment Intent
  useEffect(() => {
    if (regCampInfo?.camp?.campFees) {
      axiosSecure
        .post("/create-payment-intent", { price: regCampInfo.camp.campFees })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [regCampInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    console.log("payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        camp: {
          campId: regCampInfo.camp.id,
          campName: regCampInfo.camp.campName,
          campFees: regCampInfo.camp.campFees,
        },
        email: user.email,
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      try {
        await axiosSecure.post("/reg-camp-payment", paymentInfo);
        await axiosSecure.patch(`/confirm-payment-status/${regCampInfo._id}`, {
          paymentStatus: true,
        });
        onClose();
        fetch();
        Swal.fire(
          `Payment success for joining in the camp. Please wait for approval. Your TrxId: ${paymentIntent.id}`
        );
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      } finally {
        setProcessing(false);
      }

      setProcessing(false);
    }
  };

  return (
    <>
      <form className="my-2" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex mt-2 justify-around">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {processing ? (
              <ImSpinner9 className="m-auto animate-spin" size={24} />
            ) : (
              `Pay ${regCampInfo?.camp?.campFees}$`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default PaymentForm;
