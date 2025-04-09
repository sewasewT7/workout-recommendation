import styles from "../styles/Home.module.css";
import { Link as ScrollLink } from "react-scroll";
// import heroImage from "../assets/home2.jpg"; // Adjust path as needed
// import { ArrowRight } from "lucide-react"; // For the CTA button

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Get Fit the <span className={styles.highlight}>Fun</span> Way
        </h1>

        <p className={styles.heroSubtitle}>
          Ready to jump into a fitness adventure like no other? Whether you're
          diving into the deep end or just dipping your toes, we're here to make
          your journey lively and full of high-fives!
        </p>

        <div className={styles.heroButtons}>
          <ScrollLink
            to="workout"
            smooth={true}
            duration={800}
            className={styles.primaryButton}
          >
            Get Started
            {/* <ArrowRight size={18} /> */}
          </ScrollLink>

          {/* <ScrollLink
            to="services"
            smooth={true}
            duration={800}
            className={styles.secondaryButton}
          >
            Explore Services
          </ScrollLink> */}
        </div>
      </div>

      {/* <div className={styles.heroImageContainer}>
        <img
          src={heroImage}
          alt="People enjoying fitness activities"
          className={styles.heroImage}
        />
      </div> */}
    </section>
  );
}
