import styles from "./pocket.module.css";
import { ReactNode } from "react";

export interface PocketComponentProps {
  children?: ReactNode;
}

export default function PocketComponent({ children }: PocketComponentProps) {
  return <div className={styles.pocket}>{children}</div>;
}
