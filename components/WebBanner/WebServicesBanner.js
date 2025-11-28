"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./webservice.module.scss";
import { HiArrowLongRight } from "react-icons/hi2";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ReCAPTCHA from "react-google-recaptcha";

export default function WebServicesBanner({ data }) {
  const extraClass = data?.className ? (styles[data.className] || data.className) : "";
  const [formData, setFormData] = useState(
    data.form.fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  // ✅ Validation
  // ✅ Validation (show one error at a time)
  const validateInput = (formData) => {
    for (let field of data.form.fields) {
      const value = formData[field.name]?.trim();

      // Required
      if (field.required && !value) {
        toast.error(`${field.placeholder || field.name} is required`);
        return false;
      }

      // Email validation
      if (field.type === "email" && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          toast.error("Invalid email format");
          return false;
        }
      }

      // Phone validation
      if (field.type === "tel" && value) {
        const phoneRegex = /^[0-9+\-()\s]{6,20}$/;
        if (!phoneRegex.test(value)) {
          toast.error("Invalid phone number");
          return false;
        }
      }
    }

  

    return true;
  };


  // ✅ Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Captcha
  // const handleCaptchaChange = (token) => {
  //   setCaptchaToken(token);
  //   if (token) toast.dismiss();
  // };

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput(formData)) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://digitalmindson-backend-6pbe.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, captcha: captchaToken }),
        }
      );

      const result = await response.json();
      if (result.success) {
        toast.success(" Email sent successfully!");
        setFormData(
          data.form.fields.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
          }, {})
        );
        setCaptchaToken(null);
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.error("⚠️ An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`${styles.web_services_banner} ${extraClass}`}>
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-12 col-lg-7">
            <ul className={styles.breadcrumb}>
              {data.breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <li>
                    {item.link ? (
                      <Link href={item.link}>{item.text}</Link>
                    ) : (
                      item.text
                    )}
                  </li>
                  {index < data.breadcrumb.length - 1 && (
                    <li>
                      <HiArrowLongRight />
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
            <div className={styles.banenr_content}>
              <div className={styles.service_head}>
                <h1>{data.title}</h1>
              </div>
              <div className={styles.banner_content_txt}>
                <p>{data.description}</p>
             <div className={styles.main_btn}>
                {data.button.map((btn, index) => (
                  <Link key={index} className={styles.btn} href={btn.link}>
                    <span className={styles.btn_label} data-text={btn.text}>
                      {btn.text}
                    </span>
                    <span className={styles.btn_icon}>
                      <i className="fa-solid fa-arrow-up-right" />
                    </span>
                  </Link>
                ))}
              </div>

              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-12 col-lg-5">
            <div className={styles.banner_form}>
              <h2>
                {data.form.title} <span>{data.form.titleHighlight}</span>
              </h2>
              <form className={styles.banner_form_inner} onSubmit={handleSubmit}>
                {data.form.fields.map((field, index) => (
                  <div className={styles.from_item} key={index}>
                    {field.type === "textarea" ? (
                      <textarea
                        rows={field.rows}
                        name={field.name}
                        className={styles.form_control}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        className={styles.form_control}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                ))}

                {/* ✅ Captcha */}
                <div style={{ margin: "10px 0" }}>
                  {/* <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                    onChange={handleCaptchaChange}
                  /> */}
                </div>

                <p className={styles.small}>
                  {data.form.privacyText}{" "}
                  <Link
                    href={data.form.privacyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.form.privacyLinkText}
                  </Link>
                </p>
              <button 
                  type="submit" 
                  className={styles.btn} 
                  disabled={isLoading}
                >
                  <span
                    className={styles.btn_label}
                    data-text={isLoading ? "Sending..." : data.form.submitButtonText}
                  >
                    {isLoading ? "Sending..." : data.form.submitButtonText}
                  </span>
                  <span className={styles.btn_icon}>
                    <i className="fa-solid fa-arrow-up-right" />
                  </span>
                </button>

                {/* <button type="submit" className={styles.btn_primary} disabled={isLoading}>
                  {isLoading ? "Sending..." : data.form.submitButtonText}
                </button> */}
              </form>
            </div>
          </div>

          {/* Logos */}
          <div className="col-12">
            <div className={styles.featured_main_logo}>
              <div className={styles.featured_flex}>
                <h5>{data.featured.title}</h5>
                <span />
                <ul>
                  {data.featured.logos.map((logo, index) => (
                    <li key={index}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Toast Container */}
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
    </section>
  );
}
