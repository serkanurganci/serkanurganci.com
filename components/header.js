import Link from "next/link";
import styles from "../assets/styles/Header.module.scss";
import ThemeDarkIcon from "../assets/images/icon/theme-dark-icon.svg";
import ThemeLightIcon from "../assets/images/icon/theme-light-icon.svg";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function Header() {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <ThemeLightIcon role="button" onClick={() => setTheme("light")} />;
    } else {
      return <ThemeDarkIcon role="button" onClick={() => setTheme("dark")} />;
    }
  };
  return (
    <header>
      <nav className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li className={router.pathname === "/" ? styles.active : ""}>
            <Link href="/">
              <a>Giriş</a>
            </Link>
          </li>
          <li
            className={router.pathname === "/photograph" ? styles.active : ""}
          >
            <Link href="/photograph">
              <a>Fotoğraf</a>
            </Link>
          </li>
          <li className={router.pathname === "/notes" ? styles.active : ""}>
            <Link href="/notes">
              <a>Notlar</a>
            </Link>
          </li>
        </ul>
        <div className={styles.themeIcons}>{renderThemeChanger()}</div>
      </nav>
    </header>
  );
}

export default Header;
