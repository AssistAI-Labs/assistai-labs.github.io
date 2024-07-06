import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Correct the request body format
    const requestBody = {
      data: [
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      ]
    };
  
    fetch('https://api.apispreadsheets.com/data/3VghKKQTyLZ6uUyN/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then((response) => {
      if (response.ok) {
        alert('Form Data Submitted :)');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        response.json().then((data) => {
          alert(`Error: ${data.message}`);
        });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error :(');
    });
  };
  

  return (
    <div className="contact-section">
      <div className="contact-heading">
        Let&apos;s connect and navigate <br />
        your life goals
      </div>
      <div className="contact-content">
        We are here to listen and help you achieve your dreams. <br />
        Schedule your call today.
      </div>
      <div className="contact-form-container">
        <div className="contact-form">
          <label className="form-label">Name : </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-input"
            required
          />
          <label className="form-label">Email : </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-input"
            required
          />
          <label className="form-label">Message : </label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="form-input"
            required
          />
          <button className="submit-btn" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
