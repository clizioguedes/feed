import styles from "./Avatar.module.css";

export function Avatar({ src, noBorder }) {
  return (
    <img
      className={noBorder ? styles.avatarNoBorder : styles.avatar}
      src={src}
    />
  );
}
