import React from "react";
import EmailLink from "../../components/Email/Email";

const Emaildirect = (props) => {
  const myEmail = "taxshila1@gmail.com";

  return (
    <div>
      <EmailLink email={myEmail} />
    </div>
  );
};

export default Emaildirect;
