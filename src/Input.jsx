export default function Input({label, textarea, ...props}){

    return (
        <p className="flex">
            <label className=" mx-2 mt-2"> {label} </label>
            {textarea ? <textarea className="border-2 border-blue-900 rounded-xl px-4 py-[2px] my-2"{...props}/>: <input  className="border-2 border-blue-900 rounded-xl px-4 py-[2px] my-2" {...props}/>}

        </p>
    )
}