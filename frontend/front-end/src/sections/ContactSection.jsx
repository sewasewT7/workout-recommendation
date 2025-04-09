import styles from "../styles/Contact.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactcontainer}>
        <h2 className={styles.contactTitle}>Contact Us</h2>

        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Name <span className={styles.required}>(required)</span>
            </label>
            <div className={styles.nameInputs}>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="First Name"
                  required
                />
                <span className={styles.inputLabel}>First Name</span>
              </div>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Last Name"
                  required
                />
                <span className={styles.inputLabel}>Last Name</span>
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              Email <span className={styles.required}>(required)</span>
            </label>
            <div className={styles.inputWrapper}>
              <input type="email" className={styles.input} required />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              Message <span className={styles.required}>(required)</span>
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                className={styles.textarea}
                rows="5"
                required
              ></textarea>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>

        <p className={styles.formNote}>
          Interested in working together? Fill out some info and we will be in
          touch shortly. We cant wait to hear from you!
        </p>
      </div>
    </section>
  );
}
