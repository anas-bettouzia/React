import { useState } from "react";

const NotesManager = ({ initialNotes = [] }) => {
    const [notes, setNotes] = useState(initialNotes);
    const [newNote, setNewNote] = useState("");
  
    const addNote = () => {
      const noteValue = parseFloat(newNote);
      if (noteValue >= 0 && noteValue <= 20) {
        setNotes([...notes, noteValue]);
      }
      setNewNote("");
    };
  
    const removeNote = (index) => {
      setNotes(notes.filter((_, i) => i !== index));
    };
  
    const average = notes.length ? (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2) : "N/A";
  
    return (
      <div>
        <input type="number" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
        <button onClick={addNote}>Ajouter</button>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note} <button onClick={() => removeNote(index)}>Supprimer</button></li>
          ))}
        </ul>
        <p>Moyenne des notes : {average}</p>
      </div>
    );
  };

  export default NotesManager;