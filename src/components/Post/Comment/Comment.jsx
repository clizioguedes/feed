import { Link, ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../../Avatar/Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLinkCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLinkComment() {
    setLinkCount(likeCount + 1);
  }

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
            <button onClick={handleDeleteComment} title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLinkComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
