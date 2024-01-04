/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUpdateRegisterStudentMutation } from "../../redux/features/studentRegistration/studentRegistrationApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function PaymentComponent({ coursePrice, paid, id }) {
  const [updateStudentRegistration] = useUpdateRegisterStudentMutation();
  const [paymentAmount, setPaymentAmount] = useState("");

  const navigate = useNavigate();

  const paidAmount = Number(paid);
  const currentPaymentAmount = Number(paymentAmount);
  const totalCoursePrice = Number(coursePrice);
  const handlePayment = async () => {
    const data = {
      paid: paidAmount + currentPaymentAmount,
      due: totalCoursePrice - (paidAmount + currentPaymentAmount),
      registrationStatus:
        paidAmount + currentPaymentAmount === totalCoursePrice
          ? "completed"
          : "continues",
    };
    const res = await updateStudentRegistration({
      studentId: id,
      registerStudentData: data,
    }).unwrap();
    if (res.statusCode === 200) {
      toast.success("Payment updated successfully");
      navigate("/student");
    }
  };

  return (
    <>
      <input type="checkbox" id="payment_modal" className="modal-toggle" />
      <div className="modal z-50">
        <div className="modal-box">
          <div className="modal-action block">
            <label
              htmlFor="payment_modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer"
            >
              X
            </label>
            <div className="">
              {paidAmount === totalCoursePrice ? (
                <div className="">
                  <span className="font-bold text-green-500">
                    Congratulations
                  </span>{" "}
                  on completing your payment! We extend our heartfelt thanks for
                  your unwavering support and trust in us. Your commitment is
                  invaluable, and we&apos;re excited about the journey ahead.
                  Your partnership fuels our dedication to delivering
                  exceptional experiences. Thank you for being a part of our
                  community. We look forward to continuing to provide you with
                  outstanding service and more exciting opportunities in the
                  future!
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl mb-5">Make a payment</h1>
                  <input
                    type="number"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    placeholder="Enter payment amount"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <p className="text-red-500 ml-1">
                    Due amount {totalCoursePrice - paidAmount}
                  </p>
                  <button
                    onClick={handlePayment}
                    className="mt-4 px-4 py-2 bg-cyan-400 text-white rounded-md hover:bg-cyan-500 focus:outline-none"
                  >
                    Submit Payment
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentComponent;
