import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Vikas Ahuja</h1>
        <p className={styles.description}>
          I am Front end developer with 11 years of experience, reach out if you
          would like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto: ervikas837@gmail.com">
          Contact Me
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl("Hero/heroimage.jpg")}
          alt="Hero image"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
