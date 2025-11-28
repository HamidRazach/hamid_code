"use client";
import React, { useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.scss";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConnectExpert() {
  const [formData, setFormData] = useState({
    footer_name: "",
    footer_email: "",
    footer_phone: "",
    footer_description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Validation (one error at a time)
  const validateInput = () => {
    if (!formData.footer_name.trim()) {
      toast.error("Full Name is required");
      return false;
    }
    if (!formData.footer_email.trim()) {
      toast.error("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.footer_email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!formData.footer_phone.trim()) {
      toast.error("Phone Number is required");
      return false;
    }
    const phoneRegex = /^[0-9+\-()\s]{6,20}$/;
    if (!phoneRegex.test(formData.footer_phone)) {
      toast.error("Invalid phone number");
      return false;
    }
    if (!formData.footer_description.trim()) {
      toast.error("Project description is required");
      return false;
    }
    return true;
  };

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    setIsLoading(true);
    const payload = {
      name: formData.footer_name,
      phone: formData.footer_phone,
      email: formData.footer_email,
      description: formData.footer_description,
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
        setFormData({
          footer_name: "",
          footer_email: "",
          footer_phone: "",
          footer_description: "",
        });
      } else {
        toast.error(" Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("⚠️ An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.gettouch}>
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-xs-12 col-md-12 col-lg-6 col-xl-5 col-xxl-5">
            <div className={styles.example} data-text="Connect">
              <h2>Let's Connect With Our Experts</h2>
            </div>
            <p>
              Get valuable consultation from our professionals to discuss your
              website project. We are here to help you with all of your queries.
            </p>
            <h5>Revolutionize Your Business</h5>
            <p>
              Collaborate with us and become a trendsetter through our
              innovative approach.
            </p>

            {/* Awards */}
            <div className={styles.connect_awards_main}>
              <div className={styles.connect_item_awards}>
                <div className={styles.connect_awards_img}>
                  <Link
                    href="https://www.goodfirms.co/company/digital-minds-on"
                    target="_blank"
                  >
                    <Image
                      src="/images/google_icon/goodfrims.webp"
                      alt="digitalmindson_web"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
                <div className={styles.connect_awards_content}>
                  <h6>5.0</h6>
                  <h6>Goodfirms</h6>
                </div>
              </div>
              <div className={styles.connect_item_awards}>
                <div className={styles.connect_awards_img}>
                  <Link
                    href="https://www.rightfirms.co/company/"
                    target="_blank"
                  >
                    <Image
                      src="/images/google_icon/rightfirms.webp"
                      alt="digitalmindson_web"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
                <div className={styles.connect_awards_content}>
                  <h6>4.8</h6>
                  <h6>Rightfirms</h6>
                </div>
              </div>
              <div className={styles.connect_item_awards}>
                <div className={styles.connect_awards_img}>
                  <Link
                    href="https://clutch.co/"
                    target="_blank"
                  >
                    <Image
                      src="/images/google_icon/clutch_rating.webp"
                      alt="digitalmindson_web"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
                <div className={styles.connect_awards_content}>
                  <h6>4.8</h6>
                  <h6>Clutch</h6>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className={styles.contact_info_web}>
              <h5>Contact Info:</h5>
              <div className={styles.contact_info_item}>
                <div className={styles.contact_info_img}>
                  <MdOutlineMarkEmailUnread size={25} />
                </div>
                <div className={styles.contact_info_profile}>
                  <Link
                    href="mailto:info@digitalmindson.com"
                    aria-label="Digitalmindson Contact"
                  >
                    info@digitalmindson.com
                  </Link>
                </div>
              </div>
              <div className={styles.contact_info_item}>
                <div className={styles.contact_info_img}>
                 <Image src="/images/icons/United-kingdom.png" width={25} height={25} alt="icons"/>
                </div>
                <div className={styles.contact_info_profile}>
                  <Link href="tel:+44 7426 472765" aria-label="digitalmindson Contact">
                    +44 7426 472765
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-xs-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 my-auto offset-lg-1">
            <div className={styles.content_form}>
              <form
                className={styles.content_form_inner}
                onSubmit={handleSubmit}
              >
                <h3>Get in Touch Now!</h3>

                <div className={styles.form_item}>
                  <input
                    placeholder="Full Name"
                    name="footer_name"
                    className={styles.form_control}
                    type="text"
                    value={formData.footer_name}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.form_item}>
                  <input
                    type="email"
                    className={styles.form_control}
                    name="footer_email"
                    placeholder="Email"
                    value={formData.footer_email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.form_item}>
                  <input
                    type="tel"
                    className={styles.form_control}
                    name="footer_phone"
                    placeholder="Number"
                    value={formData.footer_phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.form_item}>
                  <textarea
                    className={styles.form_control}
                    rows={4}
                    name="footer_description"
                    placeholder="Describe Your Project Need."
                    value={formData.footer_description}
                    onChange={handleChange}
                  />
                </div>

                <p>
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Link>
                </p>

                {/* <button
                  type="submit"
                  className={styles.btn_submit}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Get In Touch"}
                </button> */}
                
                <button
                    type="submit"
                    className={`${styles.btn} ${styles.btn_submit}`}
                    disabled={isLoading}
                  >
                    <span className={styles.btn_label} data-text={isLoading ? "Sending..." : "Get In Touch"}>
                      {isLoading ? "Sending..." : "Get In Touch"}
                    </span>
                    <span className={styles.btn_icon}>
                      <i className="fa-solid fa-arrow-up-right" />
                    </span>
                  </button>
              </form>
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
    </div>
  );
}
