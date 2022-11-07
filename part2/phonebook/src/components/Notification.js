import React from "react";

const Notification = ({ message, errorMessage }) => {
  if (message) {
    return <div className="success">{message}</div>;
  } else if (errorMessage) {
    return <div className="error">{errorMessage}</div>;
  }
};

export default Notification;
