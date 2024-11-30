import React from "react";

function ContactItem({ contact }) {
  return (
    <div className="contact-item">
      <h5>{contact.name}</h5>
      <p>{contact.phoneNumber}</p>
      <p>{contact.birthday}</p>
      <p>{contact.job.title}</p>
      <p>{contact.topics}</p>
      <p>{contact.series}</p>
    </div>
  );
}

export default ContactItem;
