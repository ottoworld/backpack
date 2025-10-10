"use client";

import styles from "./backpack.module.css";
import { useCallback, useState } from "react";
import PocketComponent from "../../components/pocket/pocket";
import BlockComponent from "../../components/block/block";

export type Project = {
  name: string;
  color: "red" | "green" | "blue" | "white";
  class: string;
};

export type Pocket = {
  project: Project;
};

export default function BackpackPage() {
  const noProject: Project = {
    name: "No project",
    color: "white",
    class: "project--none",
  };
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
  const [currentProject, setCurrentProject] = useState<Project>(projectTwo);
  const [pocketMatrix, setPocketMatrix] = useState<Pocket[][]>([
    [{ project: projectOne }, { project: projectOne }, { project: noProject }],
    [{ project: noProject }, { project: noProject }, { project: noProject }],
    [{ project: noProject }, { project: noProject }, { project: projectThree }],
  ]);

  const handleClickProject = useCallback((project: Project) => {
    setCurrentProject(project);
  }, []);

  const handleClickBlock = (x: number, y: number) => {
    setPocketMatrix((prevState) => {
      const newState = prevState.map((row) => [...row]);
      if (newState[y][x].project === noProject) {
        newState[y][x] = { project: currentProject };
      } else if (newState[y][x].project === currentProject) {
        newState[y][x] = { project: noProject };
      } else {
        newState[y][x] = { project: currentProject };
      }
      return newState;
    });
  };

  return (
    <div className={styles["p-backpack"]}>
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
                onClick={() => handleClickProject(projectOne)}
              >
                {projectOne.name}
              </button>
            </li>
            <li>
              <button
                className={styles[projectTwo.class]}
                name="project"
                onClick={() => handleClickProject(projectTwo)}
              >
                {projectTwo.name}
              </button>
            </li>
            <li>
              <button
                className={styles[projectThree.class]}
                name="project"
                value={3}
                onClick={() => handleClickProject(projectThree)}
              >
                {projectThree.name}
              </button>
            </li>
          </ul>
          <p>Current project: {currentProject.name}</p>
        </div>
        <div className={styles["p-backpack__backpack"]}>
          <h3>Backpack</h3>
          <div className={styles["backpack__grid"]}>
            {pocketMatrix.map((row, y) => {
              return row.map((pocket, x) => (
                <PocketComponent key={`${x},${y}`}>
                  <BlockComponent
                    key={`${x},${y}`}
                    onClick={handleClickBlock}
                    project={pocket.project}
                    x={x}
                    y={y}
                  >
                    {pocket.project.name}
                  </BlockComponent>
                </PocketComponent>
              ));
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
