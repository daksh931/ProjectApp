import Button from "./Button"
export default function ProjectSideBar() {

    return (
        <>
            <aside className="flex flex-col bg-black px-10" >
                <h2 className="self-center text-3xl px-2 py-5 font-mono font-bold text-purple-700">Your Projects</h2>
                <Button > + Add Project </Button>

            </aside>
        </>
    )
}