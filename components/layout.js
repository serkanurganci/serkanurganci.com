import Header from "./header";
import LayoutStyles from "../assets/styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={LayoutStyles.layoutWrapper}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
