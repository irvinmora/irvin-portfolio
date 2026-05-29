"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navLinks = [
    { name: "Inicio",      href: "#inicio",      icon: "fa-home" },
    { name: "Sobre Mí",    href: "#sobre-mi",    icon: "fa-user" },
    { name: "Habilidades", href: "#habilidades",  icon: "fa-code" },
    { name: "Proyectos",   href: "#proyectos",    icon: "fa-project-diagram" },
    { name: "Contacto",    href: "#contacto",     icon: "fa-envelope" },
  ];

  return (
    <>
      {/* Overlay — closes the drawer when clicked */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          {/* Hamburger — LEFT side on mobile */}
          <button
            className={styles.menuBtn}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`} />
          </button>

          {/* Logo */}
          <a href="#inicio" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoIcon}>
              <i className="fas fa-code" />
            </span>
            <span className={styles.logoText}>Irvin Adonis Mora Paredes</span>
          </a>

          {/* Nav links — desktop: flex row | mobile: left drawer */}
          <div className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={styles.navLink}
                onClick={closeMenu}
              >
                <i className={`fas ${link.icon}`} />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
