import styles from "./Header.module.css";

import igniteLogo from "../../assets/icons/ignite-logo.svg";

export function Header(props) {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
