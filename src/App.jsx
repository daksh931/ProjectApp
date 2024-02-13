import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectSideBar from './ProjectSideBar'
import NewProject from './NewProject'

function App() {

  return (
    <main className='h-screen  flex gap-8'>
      <ProjectSideBar />
      <div className='flex w-full justify-center'>
        <NewProject />
        </div>
    </main>
  );
}

export default App
