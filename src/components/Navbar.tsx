import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

interface NavbarProps {
  backgroundColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ backgroundColor = "transparent" }) => {
  return (
    <div className={styles.navbar} style={{ backgroundColor }}>
      <Image
        className={styles.logo}
        src="/Logo.svg"
        alt="Logo"
        width={43.58}
        height={23}
      />
      <button className={styles.button}>
        <Image src="/Boton-rayas.svg" alt="Menu" width={50} height={50} />
      </button>
    </div>
  );
};

export default Navbar;
