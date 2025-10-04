import styles from "./pocket.module.css";
import clsx from "clsx";
import { ReactNode, useCallback, useMemo, useState } from "react";

export interface PocketComponentProps {
  children?: ReactNode;
}

export default function PocketComponent({ children }: PocketComponentProps) {
  const [project, setProject] = useState();

  const classesPocket = useMemo(() => {
    return clsx(styles.pocket, project !== 0 && styles["pocket--full"]);
  }, [project]);

  return <div className={classesPocket}>{children}</div>;
}
