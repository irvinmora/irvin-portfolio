import styles from "./About.module.css";
import { portfolioData } from "../models/data";

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre <span className="text-gradient">Mí</span></h2>
          <p className="section-subtitle">Ingeniero en Sistemas de Información</p>
        </div>
        
        <div className={styles.aboutGrid}>
          <div className={`glass-card ${styles.aboutCard}`}>
            <div className={styles.cardIcon}>
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Formación</h3>
            <p>Ingeniero en Sistemas de Información con enfoque en desarrollo web y tecnologías emergentes.</p>
          </div>
          
          <div className={`glass-card ${styles.aboutCard}`}>
            <div className={styles.cardIcon}>
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Enfoque</h3>
            <p>Combino conocimientos técnicos con herramientas modernas para crear soluciones eficientes.</p>
          </div>
          
          <div className={`glass-card ${styles.aboutCard}`}>
            <div className={styles.cardIcon}>
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Objetivo</h3>
            <p>Desarrollar aplicaciones web escalables que resuelvan problemas reales de forma efectiva.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
