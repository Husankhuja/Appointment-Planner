import React, { useState, useEffect } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm"
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [appointmentInfo, setAppointmentInfo] = useState({
    title: "",
    contact: "",
    date: "",
    time: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(...Object.values(appointmentInfo));
    setAppointmentInfo({
      title: "",
      contact: "",
      date: "",
      time: ""
    });


  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm appointmentInfo={appointmentInfo} setAppointmentInfo={setAppointmentInfo} handleSubmit={handleSubmit} contacts={contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList someArray={appointments} />
      </section>
    </div>
  );
};
