import styles from "./Skills.module.css";
import { portfolioData } from "../models/data";

export default function Skills() {
  const { skills, tools } = portfolioData;

  // Mapa de colores e íconos para cada categoría (adaptado al estilo)
  const categoryStyles = {
    "Frontend": { borderColor: "border-blue-400", bgAccent: "rgba(59, 130, 246, 0.1)" },
    "Backend & DB": { borderColor: "border-green-500", bgAccent: "rgba(34, 197, 94, 0.1)" }
  };

  const getIcon = (name) => {
    const iconMap = {
      "HTML5": { type: "class", value: "devicon-html5-plain colored" },
      "CSS3": { type: "class", value: "devicon-css3-plain colored" },
      "JavaScript": { type: "class", value: "devicon-javascript-plain colored" },
      "React / Next.js": { type: "class", value: "devicon-react-original colored" },
      "PHP": { type: "class", value: "devicon-php-plain colored" },
      "MySQL": { type: "class", value: "devicon-mysql-plain colored" },
      "PostgreSQL": { type: "class", value: "devicon-postgresql-plain colored" },
      "Python": { type: "class", value: "devicon-python-plain colored" },
      "phpMyAdmin": { type: "class", value: "devicon-mysql-plain colored" },
      "Git & GitHub": { type: "class", value: "devicon-github-original" },
      "VS Code": { type: "class", value: "devicon-vscode-plain colored" },
      "Figma": { type: "class", value: "devicon-figma-plain colored" },
      "Antigravity": { type: "img", value: "https://antigravity.google/assets/image/antigravity-logo.png" },
      "ChatGPT": { type: "img", value: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
      "DeepSeek": { type: "img", value: "https://upload.wikimedia.org/wikipedia/commons/9/95/DeepSeek-icon.svg" }
    };
    return iconMap[name] || { type: "class", value: "fas fa-code" };
  };

  const renderIcon = (name, iconClass) => {
    const icon = getIcon(name);
    if (icon.type === "img") {
      return <img src={icon.value} alt={name} className={iconClass} style={{ width: "1.8rem", height: "1.8rem", objectFit: "contain" }} />;
    }
    return <i className={`${icon.value} ${iconClass}`}></i>;
  };

  return (
    <section id="habilidades" className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{ } Habilidades</h2>
        </div>

        <div className={styles.skillsContainer}>
          {skills.map((category) => (
            <div
              key={category.category}
              className={`glass-card ${styles.skillCategory} ${styles[categoryStyles[category.category]?.borderColor || "border-gray"]}`}
            >
              <div className={styles.categoryHeader}>
                <h4 className={styles.categoryTitle}>{category.category.toUpperCase()}</h4>
              </div>
              <div className={styles.skillsGrid}>
                {category.items.map((skill) => (
                  <div key={skill.name} className={styles.skillItem} title={`${skill.name}: ${skill.percentage}%`}>
                    <div className={styles.skillIconWrapper} style={{ backgroundColor: categoryStyles[category.category]?.bgAccent }}>
                      {renderIcon(skill.name, styles.skillIcon)}
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={`${styles.skillPercentage} ${category.category === "Frontend" ? styles.frontendBadge : styles.backendBadge}`}>
                      {skill.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Tools Stack */}
          <div className={`glass-card ${styles.skillCategory} ${styles["border-red-500"]}`}>
            <div className={styles.categoryHeader}>
              <h4 className={styles.categoryTitle}>TOOLS</h4>
            </div>
            <div className={styles.skillsGrid}>
              {tools.map((tool) => (
                <div key={tool.name} className={styles.skillItem} title={`${tool.name}: ${tool.percentage}%`}>
                  <div className={styles.skillIconWrapper} style={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}>
                    {renderIcon(tool.name, styles.skillIcon)}
                  </div>
                  <span className={styles.skillName}>{tool.name}</span>
                  <span className={`${styles.skillPercentage} ${styles.toolsBadge}`}>
                    {tool.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
