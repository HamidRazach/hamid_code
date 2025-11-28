import React from "react";
import { Link } from "react-scroll";
import styles from "./Footer.module.scss";


export default function Landing_Footer() {
  return (
    <div className={styles.footer_bottom}>
      <div className="container d-md-flex align-items-md-center justify-content-center">
        <p className={styles.copyright_text}>
          Copyright © 2025 <Link to="home" smooth={true} duration={600}>Digital Minds On</Link> , All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
