import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("About/about.png")}
          alt="about image"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/cursoricon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>iOS</h3>
              <p>I have an extensive experience in iOS development.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/servericon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>React Native</h3>
              <p>
                I have experience with React Native, enabling me to build robust
                and efficient cross-platform mobile applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/dummy.png")} alt="dummy icon" />
            <div className={styles.aboutItemText}>
              <h3>Front End</h3>
              <p>
                I have experience in developing front-end applications, where I
                focus on creating intuitive and visually appealing user
                interfaces.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
