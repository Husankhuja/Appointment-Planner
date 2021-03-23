import React from "react";

export const ContactForm = ({
  contactInfo,
  setContactInfo,
  handleSubmit
}) => {
  const handleChange = ({ target }) => {
    const key = target.name;
    setContactInfo(prev => ({
      ...prev,
      [key]: target.value
    }));
  }
  return (
    <form>
      <input type="text" required name="name" value={contactInfo.name} onChange={handleChange} placeholder="Contact Name" />
      <input type="tel" required name="phone" value={contactInfo.phone} onChange={handleChange} placeholder="Contact Phone (###-###-####)" pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" />
      <input type="email" required name="email" value={contactInfo.email} onChange={handleChange} placeholder="Contact Email" />
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
};
