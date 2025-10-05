import styles from "./block.module.css";
import { ReactNode, useCallback } from "react";
import { Project } from "../../app/backpack/page";

export interface PocketComponentProps {
  children?: ReactNode;
  onClick: (pocketX: number, pocketY: number) => void;
  x: number;
  y: number;
  project: Project;
}

export default function BlockComponent({
  children,
  onClick,
  x,
  y,
  project,
}: PocketComponentProps) {
  const handleClick = useCallback(() => {
    onClick(x, y);
  }, [onClick, x, y]);

  return (
    <button
      className={styles.block}
      onClick={handleClick}
      style={{ background: project.color }}
    >
      {children}
    </button>
  );
}
