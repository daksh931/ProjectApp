import { forwardRef } from "react"

const Input = forwardRef( function Input({label, textarea, ...props}, ref){

    return (
        <p className="flex">
            <label className=" mx-2 mt-2"> {label} </label>
            {textarea ? <textarea ref={ref} className="border-2 border-blue-900 rounded-xl px-4 py-[2px] my-2"{...props}/>: <input ref={ref} className="border-2 border-blue-900 rounded-xl px-4 py-[2px] my-2" {...props}/>}

        </p>
    )
})

export default Input;