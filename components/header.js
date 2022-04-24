import Link from "next/link";

function Header() {
  return (
    <ul>
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
  );
}

export default Header;
