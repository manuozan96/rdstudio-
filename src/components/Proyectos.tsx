import React from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import ImageCard from "./ImagesCard";
import Button from "./Button";
import button from "../styles/Button.module.css";
import Image from "../../public/imagen.png";
import Habanera from "../../public/Habanera.png";
import Bri from "../../public/Bri.png";
const Proyectos: React.FC = () => {
  return (
    <Layout background="var(--bgcolorinv)">
      <div className="proyectos-text-container">
        <p className="proyectos-text">restaurantes y café</p>
        <p className="proyectos-text">Bares HOTELES OFICINAS</p>
        <p className="proyectos-text">COMERCIAL & RETAIL RESIDENCIAL</p>
      </div>
      <ImageCard
        imageData={[
          {
            src: Bri,
            className: "bri",
            text: "Brigada\ntraining lab",
          },
          {
            src: Image,
            className: "image2",
            text: "love\nchicharrón",
          },
          {
            src: Habanera,
            className: "habanera",
            text: "nimi's\nshawarma",
          },
        ]}
      />
      <Button className={button.button}>Cargar más</Button>
      <Footer />
    </Layout>
  );
};

export default Proyectos;
