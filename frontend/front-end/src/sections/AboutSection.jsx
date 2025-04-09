import styles from "../styles/About.module.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <>
      <section id="about" className={styles.aboutSection}>
        <div className={styles.imageContainer}>
          <img
            src="src\assets\about.png?height=800&width=800"
            alt="Yoga mat and water bottle in natural light"
            className={styles.aboutImage}
          />
        </div>

        <div className={styles.contentContainer}>
          <h2 className={styles.aboutTitle}>Get to know us</h2>

          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              Welcome to our world of fitness where each step is a new
              adventure!
            </p>

            <p className={styles.paragraph}>
              The Workout Recommendation System is an AI-powered platform
              designed to provide personalized workout plans based on users
              fitness goals, health conditions, and physical attributes.
            </p>
          </div>

          {/* <Link href="/about" className={styles.learnMoreButton}>
          Learn more
        </Link> */}
        </div>
      </section>
      <section className={styles.socialSection}>
        <h2 className={styles.sectionTitle}>Stay in the loop</h2>

        <div className={styles.socialContainer}>
          <a
            href="https://twitter.com/lunafitness"
            className={styles.socialLink}
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://twitter.com/lunafitness"
            className={styles.socialLink}
            aria-label="Linkedin"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://facebook.com/lunafitness"
            className={styles.socialLink}
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com/lunafitness"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          {/* <div className={styles.infoIcon}>
         <Info size={16} />
       </div> */}
        </div>

        <div className={styles.imageGrid}>
          <div className={`${styles.imageSquare} ${styles.image1}`}>
            <img
              src="src\assets\social.jpg?height=400&width=400"
              alt="Yoga mats and water bottle"
            />
          </div>
          <div className={`${styles.imageCircle} ${styles.image2}`}>
            <img
              src="src\assets\social2.png?height=400&width=400"
              alt="Dumbbell close-up"
            />
          </div>
          <div className={`${styles.imageSquare} ${styles.image3}`}>
            <img
              src="src\assets\home.png?height=400&width=400"
              alt="Gym interior"
            />
          </div>
          <div className={`${styles.imageCircle} ${styles.image4}`}>
            <img
              src="src\assets\service2.png?height=400&width=400"
              alt="Fitness equipment"
            />
          </div>
        </div>
      </section>
    </>
  );
}
