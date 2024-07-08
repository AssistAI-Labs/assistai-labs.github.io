import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import Alert from "../../components/Alert";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('success');

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

    // const url = 'https://tally.so/widgets/embed.js'
    const url = 'https://api.apispreadsheets.com/data/3VghKKQTyLZ6uUyN/'
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then((response) => {
      if (response.ok) {
        // alert('Form Data Submitted :)');
        setAlertMessage('Your message has been successfully submitted, and we will get back to you shortly')
        setAlertColor('success')
        setFormData({
          name: '',
          email: '',
          message: ''
        });

        setTimeout(() => {
          setAlertMessage('');
          setAlertColor('');
      }, 10000);
      } else {
        response.json().then((data) => {
          // alert(`Error: ${data.message}`);
        setAlertMessage('Server Error')
        setAlertColor('error')
        setTimeout(() => {
          setAlertMessage('');
          setAlertColor('');
      }, 5000);

        });
      }
    })
    .catch((error) => {
      // console.error('Error:', error);
      // alert('There was an error :(');
      setAlertMessage('Server Error')
      setAlertColor('error')
      setTimeout(() => {
        setAlertMessage('');
        setAlertColor('');
    }, 5000);
    });
  };

//   const closeAlert = () => {
//     setAlertMessage('');
// };
  

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
          {alertMessage && 
                <Alert 
                    message={alertMessage} 
                    color={alertColor}
                    onClose={() => {
                      setAlertMessage('');
                      setAlertColor('');
                  }}
                />
            }
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
