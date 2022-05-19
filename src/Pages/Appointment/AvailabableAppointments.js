import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailabableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date || new Date(), 'PP');
  // useEffect(() => {
  //   fetch(`https://calm-ocean-05551.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);
  const { isLoading, error, data: services, refetch } = useQuery(['available', formattedDate], () =>
  fetch(`https://calm-ocean-05551.herokuapp.com/available?date=${formattedDate}`)
  .then(res => res.json())
);

if(isLoading){
  return <Loading></Loading>
}


  return (
    <div>
      <h4 className="text-center text-secondary text-xl my-10">
        Available Appointments: {format(date || new Date(), "PP")}{" "}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal 
            key={treatment._id}
            date={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailabableAppointments;
