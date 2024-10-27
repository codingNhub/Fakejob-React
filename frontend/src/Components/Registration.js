import React, { useState } from 'react';
import './Registration.css'
function Registration() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phoneNumber: '',
    password: '',
    repeatPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      validatefname() &&
      validatelname() &&
      validateEmail() &&
      validatePhoneNumber() &&
      validatePassword() &&
      validateRepeatPassword()
    ) {
      try {
        const response = await fetch('http://localhost:8080/usersignup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // Handle successful response
          console.log('Registration successful');
          console.log(formData)
        } else {
          // Handle errors
          console.error('Registration failed');
          console.log(formData)
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  function validatefname() {
    let fname = formData.fname.trim();
    if (fname === "") {
      alert("Please enter your full name.");
      return false;
    }
    return true;
  }

  function validatelname() {
    let lname = formData.lname.trim();
    if (lname === "") {
      alert("Please enter your last name.");
      return false;
    }
    return true;
  }

  function validateEmail() {
    let email = formData.email.trim();
    if (email === "") {
      alert("Please enter your email address.");
      return false;
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validatePhoneNumber() {
    let phoneNumber = formData.phoneNumber.trim();
    if (phoneNumber === "") {
      alert("Please enter your phone number.");
      return false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return false;
    }
    return true;
  }

  function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^\d{10}$/; // Assumes 10-digit phone number
    return phonePattern.test(phoneNumber);
  }

  function validatePassword() {
    let password = formData.password;
    if (password === "") {
      alert("Please enter your password.");
      return false;
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  }

  function validateRepeatPassword() {
    let password = formData.password;
    let repeatPassword = formData.repeatPassword;
    if (repeatPassword === "") {
      alert("Please repeat your password.");
      return false;
    } else if (password !== repeatPassword) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  }

  function validateCompanyName() {
    let companyName = formData.companyName.trim();
    if (companyName === "") {
      alert("Please enter your company name.");
      return false;
    }
    return true;
  }

  function validateCompanyLocation() {
    let companyLocation = formData.companyLocation.trim();
    if (companyLocation === "") {
      alert("Please enter your company location.");
      return false;
    }
    return true;
  }

  function validateOccupation() {
    let occupation = formData.occupation;
    if (occupation === "") {
      alert("Please select your occupation.");
      return false;
    }
    return true;
  }

  function validateEducation() {
    let education = formData.education;
    if (education === "") {
      alert("Please select your education.");
      return false;
    }
    return true;
  }

  return (
    <div className="container-2">
  <div className="center">
    <div className="image-container">
      <img src="/assets/images/sign_in image.jpg" alt="desktop " />
    </div>
    <h1>Registration</h1>
    <form id="registrationForm" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-6">
          <div className="txt_field">
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
            />
            <label htmlFor="fname">First Name</label>
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="txt_field">
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required
            />
            <label htmlFor="lname">Last Name</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <div className="txt_field">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="txt_field">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNumber">Phone Number</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <div className="txt_field">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="txt_field">
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              required
            />
            <label htmlFor="repeatPassword">Repeat Password</label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-block mt-4 button">
        Submit
      </button>
    </form>
  </div>
</div>

  );
};
export default Registration;


