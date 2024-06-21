import React from "react";
import Proyectos from "../components/Proyectos";
import ImageCard from "@/components/ImagesCard";
import Navbar from "@/components/Navbar";

const ProyectosPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Proyectos />
    </div>
  );
};

export default ProyectosPage;
