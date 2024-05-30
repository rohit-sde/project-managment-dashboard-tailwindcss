import ProjectSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import { useState } from "react";
// import './App.css'

function App() {
    const [projectsState, setprojectstate] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
    });
    console.log(projectsState.tasks);
    function handleDeleteProject() {
        setprojectstate((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    (project) => project.id != prevState.selectedProjectId
                ),
            };
        });
    }

    function handleAddTask(text) {
        setprojectstate((prevState) => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                projectId: prevState.selectedProjectId,
                id: taskId,
            };
            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks],
            };
        });
    }

    function handleDeleteTask(id) {
        setprojectstate((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== id),
            };
        });
    }

    function handleSelectProject(id) {
        setprojectstate((prevState) => {
            return { ...prevState, selectedProjectId: id };
        });
    }
    function HandleStartAddProject() {
        setprojectstate((prevState) => {
            return { ...prevState, selectedProjectId: null };
        });
    }
    function handleCancelProject() {
        setprojectstate((prevState) => {
            return { ...prevState, selectedProjectId: undefined };
        });
    }
    function handleAddProject(projectData) {
        setprojectstate((prevState) => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId,
            };
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }
    const selectedProject = projectsState.projects.find(
        (projects) => projects.id === projectsState.selectedProjectId
    );
    let content = (
        <SelectedProject
            onDelete={handleDeleteProject}
            projects={selectedProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            tasks={projectsState.tasks}
        />
    );

    if (projectsState.selectedProjectId === null) {
        content = (
            <NewProject
                onAdd={handleAddProject}
                onCancel={handleCancelProject}
            />
        );
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
                onSelectProject={handleSelectProject}
            />
            {content}
        </main>
    );
}

export default App;
