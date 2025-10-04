"use client";

import styles from "./backpack.module.css";
import { MouseEventHandler, ReactNode, useMemo, useState } from "react";
import PocketComponent from "../../components/pocket/pocket";
import BlockComponent from "../../components/block/block";

export type Project = {
  name: string;
  color: "red" | "green" | "blue";
  class: string;
};

export type Pocket = {
  project?: Project;
};

export default function BackpackPage() {
  const projectOne: Project = {
    name: "Project one",
    color: "red",
    class: "project--one",
  };
  const projectTwo: Project = {
    name: "Project two",
    color: "green",
    class: "project--two",
  };
  const projectThree: Project = {
    name: "Project three",
    color: "blue",
    class: "project--three",
  };
  const projectIdMap: Map<number, Project> = new Map();
  projectIdMap.set(1, projectOne);
  projectIdMap.set(2, projectTwo);
  projectIdMap.set(3, projectThree);
  const currentProject = 2;
  const backpackGridX = 3;
  const backpackGridY = 3;
  const [pocketMatrix, setPocketMatrix] = useState<Pocket[][]>([
    [{ project: projectOne }, { project: projectOne }, {}],
    [{}, {}, {}],
    [{}, {}, { project: projectThree }],
  ]);

  const handleClickBlock = (x: number, y: number) => {
    setPocketMatrix((prevState) => {
      const newState = prevState.map((row) => [...row]);
      newState[y][x].project = undefined;
      return newState;
    });
  };

  return (
    <>
      <h2>Backpack app</h2>
      <div className={styles["p-backpack__body"]}>
        <div className={styles["p-backpack__projects"]}>
          <h3>Projects</h3>
          <ul title="Projects">
            <li>
              <button
                className={styles[projectOne.class]}
                name="project"
                value={1}
              >
                {projectOne.name}
              </button>
            </li>
            <li>
              <button
                className={styles[projectTwo.class]}
                name="project"
                value={2}
              >
                {projectTwo.name}
              </button>
            </li>
            <li>
              <button
                className={styles[projectThree.class]}
                name="project"
                value={3}
              >
                {projectThree.name}
              </button>
            </li>
          </ul>
          <p>Current project: {currentProject}</p>
        </div>
        <div className={styles["p-backpack__backpack"]}>
          <h3>Backpack</h3>
          <div className={styles["backpack__grid"]}>
            {pocketMatrix.map((row, y) => {
              return row.map((pocket, x) => (
                <PocketComponent key={`${x},${y}`}>
                  {pocket.project && (
                    <BlockComponent
                      key={`${x},${y}`}
                      onClick={handleClickBlock}
                      cssColor={pocket.project.color}
                      pocketX={x}
                      pocketY={y}
                    ></BlockComponent>
                  )}
                </PocketComponent>
              ));
            })}
          </div>
        </div>
      </div>
    </>
  );
}
