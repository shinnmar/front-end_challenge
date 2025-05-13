import styles from "./Header.module.scss";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header__wrapper"]}>
          <a href="/" className={styles["header__logo-link"]}>
            <img
              src="https://www.rimac.com/salud-digital/assets/rebrand/logo-rimac.svg"
              alt="Logo Rimac"
              className={styles["header__logo"]}
            />
          </a>

          <article className={styles["header__contact"]}>
            <span className={styles["header__text"]}>
              ¡Compra por este medio!
            </span>
            <a href="tel:014116001" className={styles["header__phone"]}>
              <FaPhoneAlt />
              <strong>(01) 411 6001</strong>
            </a>
          </article>
        </div>
      </div>
    </header>
  );
}

export default Header;
