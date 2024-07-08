import React, { useEffect, useState } from "react";
import "./style.css";

const Alert = ({ message, color, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);
  return <div className={`alertStyles ${color}`}>{message}</div>;
};

export default Alert;
