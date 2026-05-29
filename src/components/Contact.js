import styles from "./Contact.module.css";
import { portfolioData } from "../models/data";

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contácta<span className="text-gradient">me</span></h2>
          <p className="section-subtitle">Disponible para proyectos y colaboraciones</p>
        </div>
        
        <div className={styles.contactContent}>
          <div className={styles.contactMethods}>
            <a href={personal.whatsappLink} target="_blank" rel="noopener noreferrer" className={`glass-card ${styles.contactCard}`}>
              <div className={styles.contactIcon}>
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className={styles.contactInfo}>
                <h3>WhatsApp</h3>
                <p>{personal.phone}</p>
                <span className={styles.contactStatus}>Respuesta inmediata</span>
              </div>
            </a>
            
            <a href={`mailto:${personal.email}`} className={`glass-card ${styles.contactCard}`}>
              <div className={styles.contactIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className={styles.contactInfo}>
                <h3>Email</h3>
                <p>{personal.email}</p>
                <span className={styles.contactStatus}>Respuesta en 24h</span>
              </div>
            </a>
            
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className={`glass-card ${styles.contactCard}`}>
              <div className={styles.contactIcon}>
                <i className="fab fa-github"></i>
              </div>
              <div className={styles.contactInfo}>
                <h3>GitHub</h3>
                <p>github.com/irvinmora</p>
                <span className={styles.contactStatus}>Ver proyectos</span>
              </div>
            </a>
            
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={`glass-card ${styles.contactCard}`}>
              <div className={styles.contactIcon}>
                <i className="fab fa-linkedin"></i>
              </div>
              <div className={styles.contactInfo}>
                <h3>LinkedIn</h3>
                <p>Irvin Mora</p>
                <span className={styles.contactStatus}>Perfil profesional</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
