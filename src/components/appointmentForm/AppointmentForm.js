import React from "react";
import { ContactPicker, contactPicker } from "../../components/contactPicker/ContactPicker";

export const AppointmentForm = ({
  appointmentInfo,
  setAppointmentInfo,
  handleSubmit,
  contacts
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = ({ target }) => {
    const key = target.name;
    setAppointmentInfo(prev => ({
      ...prev,
      [key]: target.value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" required name="title" value={appointmentInfo.title} onChange={handleChange} placeholder="Appointment Title" />
      <ContactPicker required contacts={contacts} onChange={handleChange} />
      <input type="date" required name="date" value={appointmentInfo.date} onChange={handleChange} />
      <input type="time" required name="time" value={appointmentInfo.time} onChange={handleChange} />
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
};
