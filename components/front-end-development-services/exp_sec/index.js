import React from "react";
import Image from "next/image";
import styles from "./exp_sec.module.scss";

export default function Exp_sec({ data }) {
  return (
    <section className={styles.exp_sec}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.exp_text}>
              <h3>
                {data.title} <span>{data.highlightTitle}</span>
              </h3>
              <p>{data.description}</p>
            </div>
          </div>

          <div className="col-12">
            <div className={styles.exp_img}>
              <ul>
                {data.techList.map((tech, index) => (
                  <li key={index}>
                    <Image
                      src={tech.img}
                      width={60}
                      height={60}
                      alt={tech.name}
                      className={styles.img_fluid}
                    />
                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
