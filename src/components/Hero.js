import styles from "./Hero.module.css";
import { portfolioData } from "../models/data";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="inicio" className={`section ${styles.hero}`}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className="space-y-4">
            <span className={styles.heroBadge}>
              Ingeniero en Sistemas De Informacion
            </span>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine}>Desarrollador</span>
              <span className={`${styles.titleLine} text-green`}>Full-Stack</span>
            </h1>
          </div>

          <p className={styles.heroDescription}>
            Desarrollador Full-Stack especializado en la creación de soluciones digitales a medida.
            Mi fuerte es <strong>PHP y MySQL</strong>, pero me apasiona el desarrollo web moderno apoyado con
            las tecnologías de hoy en día como la Inteligencia Artificial. Actualmente estoy aprendiendo
            herramientas como <strong>Next.js</strong> y <strong>Python</strong>, aplicando siempre arquitecturas
            robustas, modelos y buenas prácticas para entregar resultados de forma profesional y formal.
          </p>

          <div className={styles.heroActions}>
            <a href="#proyectos" className="btn btn-primary">
              Descargar CV
            </a>
          </div>
        </div>

        <div className={styles.heroImageWrapper}>
          <div className={styles.imageBox}>
            <img
              src="/assets/images/yuyi.jpeg"
              alt={personal.name}
              className={styles.profileImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
