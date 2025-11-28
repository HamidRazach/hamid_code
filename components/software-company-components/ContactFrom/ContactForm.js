"use client";
import React, { useState } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Handle Input Change
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  // ✅ Validation (basic like ConnectExpert)
  const validateInput = () => {
    if (!forms.name.trim()) {
      toast.error("Full Name is required");
      return false;
    }
    if (!forms.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(forms.email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!forms.phone.trim()) {
      toast.error("Phone Number is required");
      return false;
    }
    const phoneRegex = /^[0-9+\-()\s]{6,20}$/;
    if (!phoneRegex.test(forms.phone)) {
      toast.error("Invalid phone number");
      return false;
    }
    if (!forms.company.trim()) {
      toast.error("Company name is required");
      return false;
    }
    if (!forms.message.trim()) {
      toast.error("Message is required");
      return false;
    }
    return true;
  };

  // ✅ Submit Form
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    setIsLoading(true);

    const payload = {
      name: forms.name,
      email: forms.email,
      phone: forms.phone,
      company: forms.company,
      description: forms.message,
    };

    try {
      const response = await fetch(
        "https://digitalmindson-backend-6pbe.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      if (result.success) {
        toast.success("Thank you for your message. It has been sent.");
        setForms({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("⚠️ An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        className="xb-item--form contact-from"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_name">
                <i className="fa-regular fa-user"></i>
              </label>
              <input
                value={forms.name}
                type="text"
                name="name"
                className="form-control"
                onChange={changeHandler}
                placeholder="Your Name"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_email">
                <i className="fa-regular fa-envelope"></i>
              </label>
              <input
                value={forms.email}
                type="email"
                name="email"
                className="form-control"
                onChange={changeHandler}
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_phone">
                <i className="fa-regular fa-phone-volume"></i>
              </label>
              <input
                value={forms.phone}
                type="tel"
                name="phone"
                className="form-control"
                onChange={changeHandler}
                placeholder="Your Phone No."
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_company">
                <i className="fa-regular fa-globe"></i>
              </label>
              <input
                value={forms.company}
                type="text"
                name="company"
                className="form-control"
                onChange={changeHandler}
                placeholder="Your Company Name"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <label className="input_title" htmlFor="input_textarea">
                <i className="fa-regular fa-comments"></i>
              </label>
              <textarea
                onChange={changeHandler}
                value={forms.message}
                name="message"
                className="form-control"
                placeholder="How can we help you?"
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              <span className="btn_label" data-text="Send Request">
                {isLoading ? "Sending..." : "Send Request"}
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </button>
          </div>
        </div>
      </form>

      {/* ✅ Toast Notification */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover
        draggable
        theme="light"
        transition={Zoom}
      />
    </>
  );
};

export default ContactForm;