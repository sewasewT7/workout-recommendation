// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react"
// import "../styles/Home.css";

// const Home = () => {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <div className={`home-container ${isScrolled ? "scrolled" : ""}`}>
//       <header className="hero-section">
//         <h1>Welcome to Your Personalized Workout Planner</h1>
//         <p>Achieve your fitness goals with customized workout plans</p>
//         <Link to="/workout" className="cta-button">
//           Get Started
//         </Link>
//       </header>

//       <section className="features">
//         <div className="feature-card">
//           <h2>Personalized Plans</h2>
//           <p>Workouts tailored to your fitness level and goals.</p>
//         </div>
//         <div className="feature-card">
//           <h2>Health Tracking</h2>
//           <p>Monitor BMI, hypertension, diabetes, and more.</p>
//         </div>
//         <div className="feature-card">
//           <h2>Flexible Routines</h2>
//           <p>Choose workouts based on available equipment and time.</p>
//         </div>
//       </section>

//       <section className="cta-section">
//         <h2>Start Your Fitness Journey Today</h2>
//         <Link to="/signup" className="cta-button">
//           Sign Up Now
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default Home;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Use React Router for navigation
import styles from "../styles/Home.module.css";
import logo from "../assets/logoavif.png";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.webp";
// Assuming you're using a CSS module for styling

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.logo}>
          <img src={logo} alt="Workout Planner Logo" />
          <span>LunaFitness</span>
        </div>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/workout">Get Started</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to Your Personal Workout Planner
          </h1>
          <p className={styles.description}>
            Achieve your fitness goals with customized workout plans tailored
            just for you.
          </p>
          <Link to="/workout" className={styles.ctaButton}>
            Start Your Fitness Journey
          </Link>
        </section>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <img src={card1} alt="Personalized Plans" />
            <h2>Workout Recommendation</h2>
            <p>
              Personalized workout routines based on your fitness level, goals,
              and available equipment.
            </p>
          </div>
          <div className={styles.featureCard}>
            <img src={card2} alt="Progress Tracking" />
            <h2>Progress Tracking</h2>
            <p>
              AI-driven suggestions for exercises, equipment, and diet to
              maximize results.
            </p>
          </div>
          <div className={styles.featureCard}>
            <img src={card3} alt="Expert Guidance" />
            <h2>Workout Planner: Smarter Fitness Planse</h2>
            <p>
              Plan, track, and achieve your fitness goals effortlessly with
              tailored routines designed just for you.
            </p>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>What Our Users Say</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p>
                LunaFitness has completely transformed my workout routine. Ive
                never felt better!
              </p>
              <span>- Sena M.</span>
            </div>
            <div className={styles.testimonial}>
              <p>
                The personalized plans are fantastic. Its like having a personal
                trainer in my pocket.
              </p>
              <span>- Leul G.</span>
            </div>
            <div className={styles.testimonial}>
              <p>
                Ive achieved my fitness goals faster than I ever thought
                possible. Thank you, LunaFitness!
              </p>
              <span>- Luna T.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 FitPlan. All rights reserved.</p>
        <nav>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </nav>
      </footer>
    </div>
  );
}
