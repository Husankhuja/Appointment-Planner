import React, { useState } from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select name="contact" onChange={onChange}>
      <option value="" selected>
        No Contact Selected
      </option>
      {
        contacts.map((contact, key) => <option value={contact.name} key={key}>{contact.name}</option>)
      }
    </select >
  );
};
