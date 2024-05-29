import { useRef } from "react";
import Input from "./input.jsx";
import Modal from "./Modal.jsx";
export default function NewProject({ onAdd }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const duedate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = duedate.current.value;

        if (
            enteredTitle.trim() === "" ||
            enteredDescription.trim() === "" ||
            enteredDueDate.trim() === ""
        ) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            duedate: enteredDueDate,
        });
    }
    return (
        <>
            <Modal ref={modal} buttoncaption="close">
                <h2>Invalid Input</h2>
                <p>oops ... looks like you forgot to enter a value.</p>
                <p>
                    Please make sure you provide a valid value for every input
                    field.{" "}
                </p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4   ">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950">
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input ref={duedate} label="Due Date" />
                </div>
            </div>
        </>
    );
}
