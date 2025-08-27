import { useState } from "react";
import TextInput from "./inputs/TextInput";
import Select from "./inputs/Select";
import TextArea from "./inputs/TextArea";

const NoteForm = ({notes, setNotes}) => {
    const [dataForm, setDataForm] = useState({
        title:"",
        priority:"Medium",
        category:"Personal",
        description:""
    });

    const [isFormVisible, setFormVisible] = useState(false);

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        // Validation
        if(!dataForm.title || !dataForm.description) return;
        // Create new note
        const noteNews = {id: Date.now(), ...dataForm};
        // Add note to state
        setNotes([noteNews, ...notes]);
        // Reset form
        setDataForm({
            title:"",
            priority:"Medium",
            category:"Personal",
            description:""
        });
    };

    return ( 
       <>
       <button onClick={()=>setFormVisible(!isFormVisible)} className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4">
        {isFormVisible ? "Close Form ➖" : "Add New Note ➕ "}
       </button>
        {isFormVisible && (
            <form className="mb-6" onSubmit={handleSubmit}>
            
            <TextInput 
            label={"Title"}
            name={"title"} 
            value={dataForm.title} 
            onChange={handleChange}
            required
            />

            <Select 
            label={'Priority'}
            name={'priority'}
            value={dataForm.priority}
            options={[{
                label:"Low 📗",
                value:"Low"
            },
            {
                label:"Medium 📙",
                value:"Medium"
            },
            {
                label:"High 📕",
                value:"High"
            },]} 

            onChange={handleChange}
            />

             <Select 
            label={'Category'}
            name={'category'}
            value={dataForm.category}
            options={[{
                label:"Work 👷🏼‍♂️",
                value:"work"
            },
            {
                label:"Personal 🙎🏼‍♂️",
                value:"personal"
            },
            {
                label:"Ideas 🕵🏻‍♂️",
                value:"ideas"
            },]} 

            onChange={handleChange}
            />


            <TextArea 
            name={'description'}
            label={'Description'} 
            value={dataForm.description}
            onChange={handleChange}
            required
            />

            <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
                Add Note 📖
            </button>
        </form>
        )}
       </>
     );
}
 
export default NoteForm;