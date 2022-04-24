import Link from "next/link";
import styles from "../assets/styles/Header.module.scss";
import ThemeDarkIcon from "../assets/images/icon/theme-dark-icon.svg";
import ThemeLightIcon from "../assets/images/icon/theme-light-icon.svg";

function Header() {
  return (
    <header>
      <nav className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">
              <a>Giriş</a>
            </Link>
          </li>
          <li>
            <Link href="/photograph">
              <a>Fotoğraf</a>
            </Link>
          </li>
          <li>
            <Link href="/notes">
              <a>Notlar</a>
            </Link>
          </li>
        </ul>
        <div className={styles.themeIcons}>
          <ThemeDarkIcon />
          <ThemeLightIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
