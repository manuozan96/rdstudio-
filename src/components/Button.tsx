import React from "react";
import styles from "../styles/Button.module.css";


interface ButtonProps {
  children: React.ReactNode;
  className?: string; // Añade una prop opcional para los estilos adicionales
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
  );
};
export default Button;
