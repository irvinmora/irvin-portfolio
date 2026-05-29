import styles from "./Sidebar.module.css";
import { portfolioData } from "../models/data";

export default function Sidebar() {
  const { personal } = portfolioData;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.socialContainer}>
        <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href={`mailto:${personal.email}`} className={styles.socialLink} title="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      
      <div className={styles.followContainer}>
        <div className={styles.line}></div>
        <span className={styles.followText}>SÍGUEME</span>
      </div>
    </aside>
  );
}
