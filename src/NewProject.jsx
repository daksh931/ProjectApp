import Button from "./Button";
import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({onAddProp}) {
    const modal = useRef();

    const title = useRef();
    const dsecription = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDsecription = dsecription.current.value;
        const enteredDuedate = dueDate.current.value;
        
        if(enteredTitle.trim() === '' || enteredDsecription.trim() === '' || enteredDuedate.trim() === ''){
            modal.current.open();
            return; // return from here if any error 
        }
        onAddProp({
            title: enteredTitle,
            dsecription : enteredDsecription,
            dueDate: enteredDuedate, 
        })
    }

   

    return (
        <>
        <Modal ref={modal} buttonCaption={"Okay"}> 
            <h2>Invalid Input</h2>
            <p>looks like you forgot to enter a value.</p>
            <p>Please provide a valid value for every input field.</p>
        </Modal>
        <div className="flex flex-col mt-16 gap-2 " >
            <menu className="flex gap-1 self-center">
                <li><Button> Cancel </Button></li>
                <li><Button onClick={handleSave}> Save  </Button></li>
            </menu>
            <div className="  text-xl font-semibold my-5">
                <Input type="text" ref={title} label="Title" />
                <Input type="text" ref={dsecription} label="Description" textarea />
                <Input type="date" ref={dueDate} label="Due Date" />

            </div>
        </div>
        </>
    )
}