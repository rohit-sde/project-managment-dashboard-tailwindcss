import Button from "./Button.jsx";
import { map } from "react";
export default function ProjectSidebar({
    onStartAddProject,
    projects,
    onSelectProject,
    selectedProjectId,
}) {
    return (
        <aside className="w-1/3 px-8 py16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 pt-20 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul>
                {projects.map((project) => {
                    let cssclasses =
                        "w=full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ";
                    if (project.id === selectedProjectId) {
                        cssclasses += "bg-stone-800 text-stone-200 ";
                    } else {
                        cssclasses += "text-stone-400 ";
                    }
                    return (
                        <li key={project.id}>
                            <button
                                className={cssclasses}
                                onClick={() => {
                                    onSelectProject(project.id);
                                }}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
