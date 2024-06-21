import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImagesCard";
import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
  return (
    <Layout background="var(--bgcolor)">
      <div className={styles.container}>
      <Navbar backgroundColor="#000000"/>
        <div className={styles.homebackground}></div>
        <div className={styles.imageContainer}>
          <div>
            <p className="title">
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
                  src: "/Brera.png",
                  styles: { width: 374, height: 450 },
                },
                {
                  src: "/imagen.png",
                  styles: { width: 500, height: 600 },
                },
                {
                  src: "/Habanera.png",
                  styles: { width: 300, height: 400 },
                },
              ]}
              buttonText="Cargar más"
            />
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
