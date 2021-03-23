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
      <input type="text" name="name" value={contactInfo.name} onChange={handleChange} />
      <input type="text" name="phone" value={contactInfo.phone} onChange={handleChange} />
      <input type="email" name="email" value={contactInfo.email} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Add Contact</button>
    </form>
  );
};
