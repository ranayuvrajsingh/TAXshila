import React from "react";

const EmailLink = ({ email }) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <a href={`mailto:${email}`} onClick={handleClick}>
      {email}
    </a>
  );
};

export default EmailLink;
