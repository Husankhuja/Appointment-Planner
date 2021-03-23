import React, { useState, useEffect } from "react";
import { ContactForm, contactForm } from '../../components/contactForm/ContactForm';
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ addContact, contacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const [isDublicate, setIsDublicate] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDublicate) {
      addContact(contactInfo.name, contactInfo.phone, contactInfo.email);
      setContactInfo({
        name: "",
        phone: "",
        email: ""
      });
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setIsDublicate(contacts.some(contact => contact.name == contactInfo.name));
  }, [contactInfo.name])

  return (
    <div>
      <section>
        <h2>
          {isDublicate ? "Add Contact - Name Already Exists" : "Add Contact"}
        </h2>
        <ContactForm contactInfo={contactInfo} setContactInfo={setContactInfo} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList someArray={contacts} />
      </section>
    </div>
  );
};
