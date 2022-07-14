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
        className=" antialiased fixed top-0 inset-x-0 z-10 w-full bg-gray-50 dark:bg-black  mx-auto border-b border-gray-200 shadow-sm;
"
      >
        <div className="container-small flex items-center justify-between w-full shadow md:shadow-none h-12 py-1">
          <div className="flex justify-start items-center">
            <Link href="/">
              <a
                className={`rounded-md py-0.5 px-4 sm:px-6 duration-200 -mb-0.5 ${
                  router.pathname === "/" ? "active-nav-item" : ""
                }`}
              >
                Giriş
              </a>
            </Link>
            <Link href="/skills">
              <a
                className={`rounded-md py-0.5 px-4 sm:px-6 duration-200 -mb-0.5 ${
                  router.pathname === "/skills" ? "active-nav-item" : ""
                }`}
              >
                Yetenekler
              </a>
            </Link>

            <Link href="/projects">
              <a
                className={`rounded-md py-0.5 px-4 sm:px-6 duration-200 -mb-0.5 ${
                  router.pathname === "/projects" ? "active-nav-item" : ""
                }`}
              >
                Projeler
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-center pr-4 sm:pr-6 ml-8 sm:ml-14">
            <a
              href="https://drive.google.com/file/d/1ydVH-V1f5dvuBRqsbRMT8EP6N4MId7kE/view"
              className="cursor-pointer font-bold font-mono text-lg pr-4 sm:pr-6"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>

            {renderThemeChanger()}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
