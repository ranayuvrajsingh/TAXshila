import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppLink = () => {
  const phoneNumber = "9258497676"; // Replace with your phone number

  return (
    <a
      className="whatsapp-icon"
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={70} style={{ color: "green" }} />{" "}
      {/* Adjust the size of the icon */}
    </a>
  );
};

export default WhatsAppLink;
