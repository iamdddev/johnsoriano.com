import React from "react";
import styles from "styles/youtube.module.css";
import { YoutubeProps } from ".";

export const Youtube: React.FC<YoutubeProps> = ({ id }): React.ReactElement => {
  return (
    <div className={styles.container}>
      <iframe src={`https://www.youtube.com/embed/${id}`} allow="autoplay; encrypted-media" title="Embedded YouTube video" className={styles.frame} />
    </div>
  );
};

export default Youtube;
