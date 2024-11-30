import React, { useState, useEffect } from "react";
import ContactItem from "./contactItem";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loadContacts = async () => {
      const contactList = await fetch("../public/users.json");

      const dataFile = await contactList.json();

      setContacts(dataFile);
    };

    loadContacts();
  }, []);

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
