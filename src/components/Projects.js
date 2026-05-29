import styles from "./Projects.module.css";
import { portfolioData } from "../models/data";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mis <span className="text-gradient">Proyectos</span></h2>
          <p className="section-subtitle">Proyectos desarrollados en GitHub</p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={`glass-card ${styles.projectCard}`}>
              <div className={styles.projectHeader}>
                <div className={styles.projectIcon}>
                  <i className={`fas ${project.icon}`}></i>
                </div>
                <div className={styles.projectTags}>
                  {project.technologies.map(tech => (
                    <span key={tech} className={styles.projectTag}>{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              
              <div className={styles.projectFooter}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  <i className={project.github.includes("huggingface") ? "fas fa-external-link-alt" : "fab fa-github"}></i> 
                  {project.github.includes("huggingface") ? " Visitar" : " Ver en GitHub"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
