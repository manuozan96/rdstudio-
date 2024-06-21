import Layout from "@/components/Layout";
import styles from "../styles/Contacto.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contacto: React.FC = () => {
  return (
    <Layout background="#EDEDED">
      <Navbar />
      <div className={styles.contbackground}>
        <h2>Contacto</h2>
        <div>
          <p className={styles.title}>
            Somos un estudio creativo que
            <br />
            transforma espacios
          </p>
        </div>

        <div>
          <p className={styles.contactInfo}>
            Oficina México <br />
            (+57) (1)  813 48 36 <br /> info@reinharddienes.com <br />
            CARRERA 7 #73-55{" "}
          </p>
          <br />
          <p className={styles.contactInfo2}>
            Oficina México <br />
            (+57) (1)  813 48 36 <br /> info@reinharddienes.com <br />
            CARRERA 7 #73-55{" "}
          </p>
        </div>
      </div>
      <div className={styles.newSection}>
        <h2 className={styles.newSectionTitle}>
          <span className={styles.part1}>Transformamos</span>
          <br />
          <span className={styles.part2}>tu espacio</span>
        </h2>
        <form className={styles.form}>
          <label className={styles.labels}>
            Nombre completo
            <input type="text" className={styles.input} />
          </label>
          <label className={styles.labels}>
            Número de contacto
            <input type="text" className={styles.input} />
          </label>
          <label className={styles.labels}>
            Email
            <input type="email" className={styles.input} />
          </label>
          <label className={styles.labels}>
            Descripción
            <input type="text" className={styles.input} />
          </label>
        </form>
        <button className={styles.button}>Enviar</button>
      </div>
      <Footer />
    </Layout>
  );
};

export default Contacto;
