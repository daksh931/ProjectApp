
import './App.css'
import ProjectSideBar from './ProjectSideBar'
import NewProject from './NewProject'
import NoProject from './Noproject'
import { useState } from 'react'

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId : undefined, 
    //' undefined' means nothing we want to this at this current stage -- change to null when start adding projects
    projects : []
  
  })

  function handleStartAddProjects (){
    setProjectState( prevState => {
      return{
        ...prevState,
        selectedProjectId:null,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const newProject =  {
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects,newProject]
      }
    })
  }

  console.log(projectState);
  let content;

  if(projectState.selectedProjectId === null){
    content = <NewProject onAddProp={handleAddProject}/>
  }
  else if(projectState.selectedProjectId === undefined){
    content = <NoProject onStartAddProjects={handleStartAddProjects}/>
  }

  return (
    <main className='h-screen  flex gap-8'>
      <ProjectSideBar onStartAddProjects={handleStartAddProjects} projects={projectState.projects} />
      <div className='flex w-full justify-center'>
          {content}
        
        </div>

    </main>
  );
}

export default App
