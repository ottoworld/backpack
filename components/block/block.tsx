import styles from "./block.module.css";
import clsx from "clsx";
import { ReactNode, useCallback, useMemo, useState } from "react";

export interface PocketComponentProps {
  cssColor: string;
  children?: ReactNode;
  onClick: (pocketX: number, pocketY: number) => void;
  pocketX: number;
  pocketY: number;
}

export default function BlockComponent({
  children,
  onClick,
  cssColor,
  pocketX,
  pocketY,
}: PocketComponentProps) {
  const handleClick = useCallback(() => {
    onClick(pocketX, pocketY);
  }, [onClick]);

  return (
    <button
      className={styles.block}
      onClick={handleClick}
      style={{ background: cssColor }}
    >
      {children}
    </button>
  );
}
