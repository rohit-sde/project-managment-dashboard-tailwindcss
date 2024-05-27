import ProjectSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
// import { useState } from 'react'
// import './App.css'

function App() {
    return (
        <main className="h-screen my-8 pt-7 flex gap-8">
            <ProjectSidebar />
            <NewProject />
        </main>
    );
}

export default App;
