import ProjectSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";
// import './App.css'

function App() {
    const [projectsState, setprojectstate] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    function HandleStartAddProject() {
        setprojectstate((prevState) => {
            return { ...prevState, selectedProjectId: null };
        });
    }

    function handleAddProject(projectData) {
        setprojectstate((prevState) => {
            const newProject = {
                ...projectData,
                id: Math.random(),
            };
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    let content;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = (
            <NoProjectSelected onStartAddProject={HandleStartAddProject} />
        );
    }

    return (
        <main className="h-screen my-8 pt-7 flex gap-8">
            <ProjectSidebar
                projects={projectsState.projects}
                onStartAddProject={HandleStartAddProject}
            />
            {content}
        </main>
    );
}

export default App;
