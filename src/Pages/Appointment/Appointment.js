import React, { useState } from 'react';
import AppointmentBAnner from './AppointmentBAnner';
import AvailabableAppointments from './AvailabableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    // const [date, setDate] = React.useState(new Date());
    // const [selected, setSelected] = React.useState<Date>();
    return (
        <div>
            <AppointmentBAnner date={date} setDate={setDate}></AppointmentBAnner>
            <AvailabableAppointments date={date}></AvailabableAppointments>
        </div>
    );
};

export default Appointment;