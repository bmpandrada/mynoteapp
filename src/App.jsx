import { useState } from "react";
import NoteForm from "./components/NoteForms";
import NoteList from "./components/NoteList";
import { useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState(()=>{
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes || [];
  });

  useEffect(()=> {
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes])

  const deleteNote = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if(confirmDelete) {
      setNotes(notes.filter((note)=> note.id !== id))
    }
  }
  return <div className="max-w-lg mx-auto mt-10 p-6 rounded-lg bg-gray-100 shadow-lg">
    <h2 className="text-2xl font-bold mb-4 text-center">
      {console.log(notes)}
      📚 My Note App
      <NoteForm notes={notes} setNotes={setNotes}/>
      <NoteList notes={notes} deleteNote={deleteNote}/>
    </h2>
  </div>
}
 
export default App;