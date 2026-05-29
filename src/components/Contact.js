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
            <a href={personal.whatsappLink} target="_blank" rel="noopener noreferrer" className={`glass-card ${styles.contactCard} ${styles.whatsappCard}`}>
              <div className={`${styles.contactIcon} ${styles.whatsappIcon}`}>
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className={styles.contactInfo}>
                <h3>WhatsApp</h3>
                <p>{personal.phone}</p>
                <span className={`${styles.contactStatus} ${styles.whatsappStatus}`}>Respuesta inmediata</span>
              </div>
            </a>
            
            <a href={`mailto:${personal.email}`} className={`glass-card ${styles.contactCard} ${styles.emailCard}`}>
              <div className={`${styles.contactIcon} ${styles.emailIcon}`}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className={styles.contactInfo}>
                <h3>Email</h3>
                <p>{personal.email}</p>
                <span className={`${styles.contactStatus} ${styles.emailStatus}`}>Respuesta en 24h</span>
              </div>
            </a>
            
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className={`glass-card ${styles.contactCard} ${styles.githubCard}`}>
              <div className={`${styles.contactIcon} ${styles.githubIcon}`}>
                <i className="fab fa-github"></i>
              </div>
              <div className={styles.contactInfo}>
                <h3>GitHub</h3>
                <p>github.com/irvinmora</p>
                <span className={`${styles.contactStatus} ${styles.githubStatus}`}>Ver proyectos</span>
              </div>
            </a>
            
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={`glass-card ${styles.contactCard} ${styles.linkedinCard}`}>
              <div className={`${styles.contactIcon} ${styles.linkedinIcon}`}>
                <i className="fab fa-linkedin"></i>
              </div>
              <div className={styles.contactInfo}>
                <h3>LinkedIn</h3>
                <p>Irvin Mora</p>
                <span className={`${styles.contactStatus} ${styles.linkedinStatus}`}>Perfil profesional</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
