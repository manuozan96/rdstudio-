import React from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import ImageCard from "./ImagesCard";

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
            src: "/Brera.png",
            text: "Brigada\ntraining lab",
            styles: { width: 374, height: 450 },
          },
          {
            src: "/imagen.png",
            text: "love\nchicharrón",

            styles: { width: 500, height: 600 },
          },
          {
            src: "/Habanera.png",
            text: "nimi's\nshawarma",

            styles: { width: 300, height: 400 },
          },
        ]}
        buttonText="Cargar más"
      />
      <Footer />
    </Layout>
  );
};

export default Proyectos;
