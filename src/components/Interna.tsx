import React from "react";
import Layout from "./Layout";
import Navbar from "./Navbar";
import styles from "../styles/Interna.module.css";
import ImageCard from "./ImagesCard";
import Footer from "./Footer";
import One from "../../public/One.png"
import Two from "../../public/Two.png"
import Three from "../../public/One.png"
import Four from "../../public/Four.png"
import Button from "./Button";


const Interna: React.FC = () => {
  return (
    <Layout background="#EDEDED">
      <div className={styles.container}>
        <Navbar backgroundColor="transparent" />
        <div className={styles.intbackground}></div>
        <div className={styles.imageContainer}></div>
        <div>
          <div className={styles.newSection}>
            <div className={styles.line}>
              <p className={`${styles.text} ${styles.año}`}>año</p>
              <p className={styles.textRight}>2023</p>
            </div>
            <div className={styles.line}>
              <p className={`${styles.text} ${styles.locacion}`}>Locación</p>
              <p className={`${styles.text} ${styles.colombia}`}>
                bogotá, colombia
              </p>
            </div>
            <div className={styles.line}>
              <p className={`${styles.text} ${styles.tamaño}`}>tamaño</p>
              <p className={styles.textRight}>340 m2</p>
            </div>
            <div className={styles.line}>
              <p className={`${styles.text} ${styles.entregable}`}>
                entregable
              </p>
              <p className={styles.textRight}>diseño interior / arquitectura</p>
            </div>
          </div>
        </div>
        <div className={styles.proyectoDescripcion}>
          Aquí una descripción del proyecto{" "}
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </strong>{" "}
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
          <strong>ex ea commodo consequat.</strong>
          <br />
          <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris
          <strong>
            nisi
            <br />
            ut aliquip{" "}
          </strong>
          ex ea commodo consequat.
        </div>
        <div>
          <ImageCard
            imageData={[
              {
                src: One,
              },
              {
                src: Two,
              },
              {
                src: Three,
              },
              {
                src: Four,
              },
            ]}
          />
          <Button>Siguiente proyecto</Button>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Interna;
