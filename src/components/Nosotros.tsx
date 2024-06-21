import Image from "next/image";
import Footer from "./Footer";
import Layout from "./Layout";
import Navbar from "./Navbar";
import styles from "../styles/Nosotros.module.css";

const Nosotros: React.FC = () => {
  const people = [
    {
      name: "Santiago Hernándex",
      profession: "Pacticante",
      image: "/Santi.png",
    },
    {
      name: "Santiago Hernándex",
      profession: "Pacticante",
      image: "/Santi.png",
    },
    {
      name: "Santiago Hernándex",
      profession: "Pacticante",
      image: "/Santi.png",
    },
    {
      name: "Santiago Hernándex",
      profession: "Pacticante",
      image: "/Santi.png",
    },
    {
      name: "Santiago Hernándex",
      profession: "Pacticante",
      image: "/Santi.png",
    },
    {
      name: "Santiago Hernándex",
      profession: "Pacticante",
      image: "/Santi.png",
    },
    {
      name: "Santiago Hernándex",
      profession: "Pacticante",
      image: "/Santi.png",
    },
    {
      name: "Santiago Hernándex",
      profession: "Pacticante",
      image: "/Santi.png",
    },
  ];
  return (
    <Layout background="var(--bgcolorinv)">
      <Navbar />
      <div className={styles.container}>
        <p className={styles.nuestro}>Nuestro</p>
        <p className={styles.equipo}>Equipo</p>
        <p className={styles.meet}>
          Meet the team who dares to create <br />
          differently.
        </p>
        <div className={styles.imageContainer}>
          {people.map((person, index) => (
            <div key={index}>
              <Image
                className={styles.image}
                src={person.image}
                alt={person.name}
                width={178}
                height={249}
              />
              <p className={styles.imageText}>
                {person.name} <br /> {person.profession}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Nosotros;
