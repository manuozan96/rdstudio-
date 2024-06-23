import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImagesCard";
import Navbar from "@/components/Navbar";
import Imagen from "../../public/imagen.png";
import Habanera from "../../public/Habanera.png";
import Brera from "../../public/Brera.png";
import Button from "@/components/Button";
import text from "../styles/Nosotros.module.css";
import rdstudio from "../../public/rdstudio.png";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <Layout background="var(--bgcolor)">
      <div className={styles.container}>
        <Navbar backgroundColor="#000000" />
        <div className={styles.homebackground}></div>
        <Image src={rdstudio} className={styles.logo} alt="home" />
        <div className={styles.imageContainer}>
          <div>
            <p className={styles.title}>
              Somos un estudio creativo que{" "}
              <strong>
                transforma espacios
                <br />
              </strong>{" "}
              a través de diseño interior,{" "}
              <strong>
                <br />
                arquitectura,
                <br />
              </strong>
              construcción y mobiliario
            </p>
            <ImageCard
              imageData={[
                {
                  src: Brera,
                },
                {
                  src: Imagen,
                },
                {
                  src: Habanera,
                },
              ]}
            />
            <Button>Cargar más</Button>
          </div>
        </div>
        <div>
          <div className={styles.homebackground}>
            <div className={styles.containertext}>
              <p className={styles.textone}>Nuestro</p>
              <p className={styles.texttwo}>impacto</p>
            </div>
          </div>
        </div>
        <div className={text.container}>
          <p className={text.nuestro}>Nuestros</p>
          <p className={text.equipo}>Clientes.</p>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
