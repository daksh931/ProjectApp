import Button from "./Button"
export default function ProjectSideBar({onStartAddProjects,projects}) {

    return (
        <>
            <aside className="flex flex-col bg-black px-10" >
                <h2 className="self-center text-3xl px-2 py-5 font-mono font-bold text-purple-700">Your Projects</h2>
                <Button onClick={onStartAddProjects}> 
                    + Add Project </Button>

            <ul className="mt-7">
                {projects.map(project=> <li key={project.id}>
                    <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
                </li>)}
            </ul>
            </aside>
        </>
    )
}