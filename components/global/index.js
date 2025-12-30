"use client";
import { useState } from "react";
import styles from "./global.module.scss";

export default function Global_header() {
  const [active, setActive] = useState("panel-United-States");

  const handleActivate = (id) => {
    setActive(id);
  };

  return (
    <div className={styles.megaWrap}>
      {/* LEFT MENU */}
      <nav className={styles.menu}>
        <ul>
          {/* United States */}
          <li
            onMouseEnter={() => handleActivate("panel-United-States")}
            onClick={() => handleActivate("panel-United-States")}
            className={active === "panel-United-States" ? styles.active : ""}
          >
            United States
          </li>

          {/* United Kingdom */}
          <li
            onMouseEnter={() => handleActivate("United-Kingdom")}
            onClick={() => handleActivate("United-Kingdom")}
            className={active === "United-Kingdom" ? styles.active : ""}
          >
            United Kingdom
          </li>

          {/* Canada */}
          <li
            onMouseEnter={() => handleActivate("panel-Canada")}
            onClick={() => handleActivate("panel-Canada")}
            className={active === "panel-Canada" ? styles.active : ""}
          >
            Canada
          </li>

          {/* Germany */}
          <li
            onMouseEnter={() => handleActivate("panel-germany")}
            onClick={() => handleActivate("panel-germany")}
            className={active === "panel-germany" ? styles.active : ""}
          >
            Germany
          </li>

          {/* Australia */}
          <li
            onMouseEnter={() => handleActivate("panel-australia")}
            onClick={() => handleActivate("panel-australia")}
            className={active === "panel-australia" ? styles.active : ""}
          >
            Australia
          </li>

           {/* Bahrain */}
          <li
            onMouseEnter={() => handleActivate("panel-bahrain")}
            onClick={() => handleActivate("panel-bahrain")}
            className={active === "panel-bahrain" ? styles.active : ""}
          >
            Bahrain
          </li>

          {/* Pakistan */}
          <li
            onMouseEnter={() => handleActivate("panel-pakistan")}
            onClick={() => handleActivate("panel-pakistan")}
            className={active === "panel-pakistan" ? styles.active : ""}
          >
            Pakistan
          </li>
        </ul>
      </nav>

      {/* RIGHT CONTENT */}
      <div className={styles.content}>
        <div className={styles.inner}>
          {/* United States PANEL */}
          {active === "panel-United-States" && (
            <section className={styles.panel}>
              <h2>United States</h2>
              <p>
                Get scalable mobile apps designed for seamless experiences that
                keep your customers engaged.
              </p>
              <ul className={styles.grid}>
                <li>
                  <a href="#">Alabama</a>
                </li>
                <li>
                  <a href="#">Alaska</a>
                </li>
                <li>
                  <a href="#">Arizona</a>
                </li>
                <li>
                  <a href="#">Arkansas</a>
                </li>
                <li>
                  <a href="#">California</a>
                </li>
                <li>
                  <a href="#">Colorado</a>
                </li>
                <li>
                  <a href="#">Connecticut</a>
                </li>
                <li>
                  <a href="#">Delaware</a>
                </li>
                <li>
                  <a href="#">Florida</a>
                </li>
                <li>
                  <a href="#">Georgia</a>
                </li>
                <li>
                  <a href="#">Hawaii</a>
                </li>
                <li>
                  <a href="#">Idaho</a>
                </li>
                <li>
                  <a href="#">Illinois</a>
                </li>
                <li>
                  <a href="#">Indiana</a>
                </li>
                <li>
                  <a href="#">Iowa</a>
                </li>
                <li>
                  <a href="#">Kansas</a>
                </li>
                <li>
                  <a href="#">Kentucky</a>
                </li>
                <li>
                  <a href="#">Louisiana</a>
                </li>
                <li>
                  <a href="#">Maine</a>
                </li>
                <li>
                  <a href="#">Maryland</a>
                </li>
                <li>
                  <a href="#">Massachusetts</a>
                </li>
                <li>
                  <a href="#">Michigan</a>
                </li>
                <li>
                  <a href="#">Minnesota</a>
                </li>
                <li>
                  <a href="#">Mississippi</a>
                </li>
                <li>
                  <a href="#">Missouri</a>
                </li>
                <li>
                  <a href="#">Montana</a>
                </li>
                <li>
                  <a href="#">Nebraska</a>
                </li>
                <li>
                  <a href="#">Nevada</a>
                </li>
                <li>
                  <a href="#">New Hampshire</a>
                </li>
                <li>
                  <a href="#">New Jersey</a>
                </li>
                <li>
                  <a href="#">New Mexico</a>
                </li>
                <li>
                  <a href="#">New York</a>
                </li>
                <li>
                  <a href="#">North Carolina</a>
                </li>
                <li>
                  <a href="#">North Dakota</a>
                </li>
                <li>
                  <a href="#">Ohio</a>
                </li>
                <li>
                  <a href="#">Oklahoma</a>
                </li>
                <li>
                  <a href="#">Oregon</a>
                </li>
                <li>
                  <a href="#">Pennsylvania</a>
                </li>
                <li>
                  <a href="#">Rhode Island</a>
                </li>
                <li>
                  <a href="#">South Carolina</a>
                </li>
                <li>
                  <a href="#">South Dakota</a>
                </li>
                <li>
                  <a href="#">Tennessee</a>
                </li>
                <li>
                  <a href="#">Texas</a>
                </li>
                <li>
                  <a href="#">Utah</a>
                </li>
                <li>
                  <a href="#">Vermont</a>
                </li>
                <li>
                  <a href="#">Virginia</a>
                </li>
                <li>
                  <a href="#">Washington</a>
                </li>
                <li>
                  <a href="#">West Virginia</a>
                </li>
                <li>
                  <a href="#">Wisconsin</a>
                </li>
                <li>
                  <a href="#">Wyoming</a>
                </li>
              </ul>
            </section>
          )}

          {/* United Kingdom PANEL */}
          {active === "United-Kingdom" && (
            <section className={styles.panel}>
              <h2>United Kingdom</h2>
              <p>
                Modern websites and web applications built with fast-loading
                responsive layouts.
              </p>
              <ul className={styles.grid}>
                <li>
                  <a href="#">Northern Ireland</a>
                </li>
                <li>
                  <a href="#">Wales</a>
                </li>
                <li>
                  <a href="#">England</a>
                </li>
                <li>
                  <a href="#">Scotland</a>
                </li>
              </ul>
            </section>
          )}

          {/* Canada PANEL */}
          {active === "panel-Canada" && (
            <section className={styles.panel}>
              <h2>Canada</h2>
              <p>
                Modern websites and web applications built with fast-loading
                responsive layouts.
              </p>
              <ul className={styles.grid}>
                <li>
                  <a href="#">Northwest Territories</a>
                </li>
                <li>
                  <a href="#">Nunavut</a>
                </li>
                <li>
                  <a href="#">Yukon</a>
                </li>
                <li>
                  <a href="#">Alberta</a>
                </li>
                <li>
                  <a href="#">British Columbia</a>
                </li>
                <li>
                  <a href="#">Manitoba</a>
                </li>
                <li>
                  <a href="#">New Brunswick</a>
                </li>
                <li>
                  <a href="#">Newfoundland and Labrador</a>
                </li>
                <li>
                  <a href="#">Nova Scotia</a>
                </li>
                <li>
                  <a href="#">Ontario</a>
                </li>
                <li>
                  <a href="#">Prince Edward Island</a>
                </li>
                <li>
                  <a href="#">Quebec</a>
                </li>
                <li>
                  <a href="#">Saskatchewan</a>
                </li>
              </ul>
            </section>
          )}


          {/* Germany PANEL */}
          {active === "panel-germany" && (
            <section className={styles.panel}>
              <h2>Germany</h2>
              <p>
                Modern websites and web applications built with fast-loading
                responsive layouts.
              </p>
              <ul className={styles.grid}>
                <li>
                  <a href="#">Baden-Württemberg</a>
                </li>
                <li>
                  <a href="#">Bavaria</a>
                </li>
                <li>
                  <a href="#">Berlin</a>
                </li>
                <li>
                  <a href="#">Brandenburg</a>
                </li>
                <li>
                  <a href="#">Bremen</a>
                </li>
                <li>
                  <a href="#">Hamburg</a>
                </li>
                <li>
                  <a href="#">Hesse</a>
                </li>
                 <li>
                  <a href="#">Lower Saxony</a>
                </li>
                 <li>
                  <a href="#">Mecklenburg-Vorpommern</a>
                </li>
                 <li>
                  <a href="#">North Rhine-Westphalia</a>
                </li>
                 <li>
                  <a href="#">Rhineland-Palatinate</a>
                </li>
                 <li>
                  <a href="#">Saarland</a>
                </li>
                 <li>
                  <a href="#">Saxony</a>
                </li>
                 <li>
                  <a href="#">Saxony-Anhalt</a>
                </li>
                 <li>
                  <a href="#">Schleswig-Holstein</a>
                </li>
                 <li>
                  <a href="#">Thuringia</a>
                </li>
              </ul>
            </section>
          )}

          {/* Australia Panel */}
          {active === "panel-australia" && (
            <section className={styles.panel}>
              <h2>Australia</h2>
              <p>
                Modern websites and web applications built with fast-loading
                responsive layouts.
              </p>
              <ul className={styles.grid}>
                <li>
                  <a href="#">New South Wales</a>
                </li>
                <li>
                  <a href="#">Victoria</a>
                </li>
                <li>
                  <a href="#">Queensland</a>
                </li>
                <li>
                  <a href="#">Western Australia</a>
                </li>
                <li>
                  <a href="#">South Australia</a>
                </li>
                <li>
                  <a href="#">Tasmania</a>
                </li>
              </ul>
            </section>
          )}

           {/* Bahrain PANEL */}
          {active === "panel-bahrain" && (
            <section className={styles.panel}>
              <h2>Bahrain</h2>
              <p>
                Modern websites and web applications built with fast-loading
                responsive layouts.
              </p>
              <ul className={styles.grid}>
                <li>
                  <a href="#">Capital Governorate</a>
                </li>
                <li>
                  <a href="#">Muharraq Governorate</a>
                </li>
                <li>
                  <a href="#">Northern Governorate</a>
                </li>
                <li>
                  <a href="#">Southern Governorate</a>
                </li>
              </ul>
            </section>
          )}

          {/* Pakistan Panel */}
          {active === "panel-pakistan" && (
            <section className={styles.panel}>
              <h2>Pakistan</h2>
              <p>
                Modern websites and web applications built with fast-loading
                responsive layouts.
              </p>
              <ul className={styles.grid}>
                <li>
                  <a href="#">Punjab</a>
                </li>
                <li>
                  <a href="#">Sindh</a>
                </li>
                <li>
                  <a href="#">KPK</a>
                </li>
                <li>
                  <a href="#">Balochistan</a>
                </li>
                <li>
                  <a href="#">AJK</a>
                </li>
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
