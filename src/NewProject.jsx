import Button from "./Button";
import Input from "./Input";
export default function NewProject() {

    return (
        <div className="flex flex-col mt-16 gap-2 " >
            <menu className="flex gap-1 self-center">
                <li><Button> Cancel </Button></li>
                <li><Button> Save  </Button></li>
            </menu>
            <div className="  text-xl font-semibold my-5">
                <Input label="Title" />
                <Input label="Description" textarea />
                <Input label="Due Date" />

            </div>
        </div>
    )
}