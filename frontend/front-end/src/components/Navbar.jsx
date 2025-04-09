import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/Header.module.css";
import logo from "../assets/logoavif.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container1}>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.logo}>
          <img src={logo} alt="LunaFitness Logo" />
          <span>LunaFitness</span>
        </div>

        <nav className={styles.nav}>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className={styles.navLink}
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className={styles.navLink}
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className={styles.navLink}
          >
            About
          </ScrollLink>

          {/* <ScrollLink
            to="workout"
            smooth={true}
            duration={500}
            offset={-80}
            className={styles.navLink}
          >
            Workouts
          </ScrollLink> */}

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className={styles.navLink}
          >
            Contact
          </ScrollLink>

          <ScrollLink
            to="workout"
            smooth={true}
            duration={500}
            offset={-80}
            className={`${styles.navLink} ${styles.ctaButton}`}
          >
            <button className={styles.btn}> Get Started</button>
          </ScrollLink>
        </nav>
      </header>
    </div>
  );
}
