import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../../Avatar/Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        noBorder
        src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Clizio+Guedes"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Clizio Guedes</strong>
              <time title="06 de junho de 2023" dateTime="2023-06-10 09:00:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
