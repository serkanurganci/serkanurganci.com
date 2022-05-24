import Link from "next/link";
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
      return (
        <ThemeLightIcon
          role="button"
          className={"fill-current cursor-pointer"}
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <ThemeDarkIcon
          role="button"
          className={"fill-current cursor-pointer"}
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <header>
      <nav
        className="flex justify-between items-center antialiased max-w-screen-md mx-auto  border-b border-gray-200;
"
      >
        <ul className="flex justify-start items-center">
          <li
            className={
              router.pathname === "/"
                ? "py-3 px-4 sm:px-6 duration-200 -mb-0.5 active-nav-item"
                : "py-3 px-4 sm:px-6 duration-200 -mb-0.5 "
            }
          >
            <Link href="/">
              <a>Giriş</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/skills"
                ? "py-3 px-4 sm:px-6 duration-200 -mb-0.5 active-nav-item"
                : "py-3 px-4 sm:px-6 duration-200 -mb-0.5 "
            }
          >
            <Link href="/skills">
              <a>Yetenekler</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/projects"
                ? "py-3 px-4 sm:px-6 duration-200 -mb-0.5 active-nav-item"
                : "py-3 px-4 sm:px-6 duration-200 -mb-0.5 "
            }
          >
            <Link href="/projects">
              <a>Projeler</a>
            </Link>
          </li>
          {/*<li*/}
          {/*  className={*/}
          {/*    router.pathname === "/photograph"*/}
          {/*      ? "py-3 px-6 duration-200 -mb-0.5 active-nav-item"*/}
          {/*      : "py-3 px-6 duration-200 -mb-0.5 "*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Link href="/photograph">*/}
          {/*    <a>Fotoğraf</a>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*<li*/}
          {/*  className={*/}
          {/*    router.pathname === "/notes"*/}
          {/*      ? "py-3 px-6 duration-200 -mb-0.5 active-nav-item"*/}
          {/*      : "py-3 px-6 duration-200 -mb-0.5 "*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Link href="/notes">*/}
          {/*    <a>Notlar</a>*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
        <div className="flex items-center justify-center pr-4 sm:pr-6">
          {renderThemeChanger()}
        </div>
      </nav>
    </header>
  );
}

export default Header;
