import noProjectIMage from '../src/assets/no-projects.png';
import Button from './Button';

export default function NoProject({onStartAddProjects}){

    return(
        <>
         <div className='flex flex-col my-24 px-5 w-2/3 text-center'>
            <img  src={noProjectIMage} className='w-52 h-52 object-contain mx-auto'/>
         
            <h2 className='text-xl font-bold text-stone-500 my-4'> No Project Selected</h2>
            <p className='text-stone-400 mb-4' >Select a project or get started with a new one</p>
            <p className='mt-8 max-w-44 self-center text-sm'>
                <Button onClick={onStartAddProjects}> Create new Project</Button>
            </p>
         </div>
        </>
    )
}