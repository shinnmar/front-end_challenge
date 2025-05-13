import { type MouseEventHandler, type ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const Card = ({ children, className = "", onClick }: CardProps) => {
  return (
    <div onClick={onClick}
      className={`${styles.card} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
