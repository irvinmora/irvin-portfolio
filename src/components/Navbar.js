"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio", icon: "fa-home" },
    { name: "Sobre Mí", href: "#sobre-mi", icon: "fa-user" },
    { name: "Habilidades", href: "#habilidades", icon: "fa-code" },
    { name: "Proyectos", href: "#proyectos", icon: "fa-project-diagram" },
    { name: "Contacto", href: "#contacto", icon: "fa-envelope" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#inicio" className={styles.logo}>
          <span className={styles.logoIcon}><i className="fas fa-code"></i></span>
          <span className={styles.logoText}>ING: Irvin Adonis Mora Paredes</span>
        </a>

        <div className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.navLink}
              onClick={() => setIsOpen(false)}
            >
              <i className={`fas ${link.icon}`}></i>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  );
}
