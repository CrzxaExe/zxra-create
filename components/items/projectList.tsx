import React from "react";
import { Card } from "./card";

const project = [
  { name: "Test", href: "ahok" },
  { name: "Test", href: "ahok" },
  { name: "Test", href: "ahok" },
  { name: "Test", href: "ahok" },
];

const ProjectList = () => {
  return (
    <div className={`block`}>
      <ul
        className={`grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-2.5`}
      >
        {project.map((e, i) => {
          return (
            <li className="aspect-square]" key={i}>
              <Card nm={e.name} href={e.href}></Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
