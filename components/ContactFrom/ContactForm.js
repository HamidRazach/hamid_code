'use client'
import React, { useState } from 'react'
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ReCAPTCHA from "react-google-recaptcha"
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })

    };

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
        if (!forms.message.trim()) {
            toast.error("Project description is required");
            return false;
        }
        return true;
    };

    // ✅ Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateInput()) return;

        // setIsLoading(true);
        const payload = {
            name: forms.name,
            phone: forms.phone,
            email: forms.email,
            description: forms.message,
        }
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
                toast.success(" Thank you for your message. It has been sent.");
                setForms({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: ''
                });
            } else {
                toast.error(" Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("⚠️ An error occurred. Please try again later.");
        } finally {
            // setIsLoading(false);
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_name">Full Name
                        </label>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Enter your Name" />
                        {/* {validator.message('name', forms.name, 'required|alpha_space')} */}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_email">Your Email
                        </label>
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Enter your Email" />
                        {/* {validator.message('email', forms.email, 'required|email')} */}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_phone">Your Phone</label>
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="+8250-3560 6565" />
                        {/* {validator.message('phone', forms.phone, 'required|phone')} */}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_textarea">Message</label>
                        <textarea
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.message}
                            type="text"
                            name="message"
                            className="form-control"
                            placeholder="How can we help you?">
                        </textarea>
                        {/* {validator.message('message', forms.message, 'required')} */}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        <span className="btn_label" data-text="Send Message">Send Message</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </button>
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000}
            
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Zoom} />
        </form>
    )
}

export default ContactForm;