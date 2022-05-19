import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl mx-auto my-12">
        <div class="card-body">
            <p className="text-success font-bold">Hello, {appointment.patientName} </p>
          <h3 class="card-title">Pay for {appointment.treatment}</h3>
          <p>Your appointment on <span className="text-orange-700">{appointment.date}</span> at <span className="text-orange-700"> {appointment.slot} </span> </p>
          <p>Please pay: ${appointment.price} </p>
          {/* <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl mx-auto bg-base-100">
        <div class="card-body"></div>
      </div>
    </div>
  );
};

export default Payment;
