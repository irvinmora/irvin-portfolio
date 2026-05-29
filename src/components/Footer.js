import styles from "./Footer.module.css";
import { portfolioData } from "../models/data";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <a href="#inicio" className={styles.footerLogo}>
              <i className="fas fa-code"></i>
              <span>{personal.name}</span>
            </a>
            <p className={styles.footerTagline}>{personal.role}</p>
          </div>
          
          <div className={styles.footerSocial}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className="fab fa-github"></i>
            </a>
            <a href={personal.huggingFace} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className="fas fa-brain"></i>
            </a>
            <a href={personal.whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href={`mailto:${personal.email}`} className={styles.socialLink}>
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} {personal.name}</p>
          <p className={styles.footerNote}>Desarrollado con pasión por la tecnología</p>
        </div>
      </div>
    </footer>
  );
}
