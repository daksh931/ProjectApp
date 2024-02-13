export default function Button({children}){

    
    return(
        <>
        <div className="self-center font-semibold text-[17px] border-[2px] text-sky-950 border-blue-800 px-2 py-1 rounded-md bg-purple-400 hover:bg-violet-600">
                <button >
                   {children}
                </button>
            </div>
        </>
    )
}