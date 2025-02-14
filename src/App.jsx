import { useState } from 'react';
import { Tab, Search, countOccurrences } from './Ecmascript/fonction';
import CounterC from './CounterC';
import './App.css';
import CounterF from './CounterF';
import Pokemon from './Pokemon';
import Header from './Header';
import Footer from './Footer';
import ListManager from './ListManager';
import ColorBox from './Couleur';
import NotesManager from './Notes';
import TodoList from './ToDo';
import Events from './components/Events';

function App() {

  const [searchResult, setSearchResult] = useState(null);
  const [occurrencesResult, setOccurrencesResult] = useState(null);
  const [totalGrades, setTotalGrades] = useState(null);

  // Exemple d'utilisation de la fonction Search
  const handleSearch = () => {
    const result = Search(2, Tab); // Rechercher l'objet avec l'ID 2
    setSearchResult(result);
  };

  const handleCountOccurrences = () => {
    const inputArray = [
      ['pomme', 'banane'],
      ['banane', 'orange'],
      ['pomme', 'orange', 'kiwi'],
      ['banane', 'kiwi']
    ];
    const result = countOccurrences(inputArray);
    setOccurrencesResult(result);
  };

  const students = [
    { name: "Alice", grade: 45 },
    { name: "Bob", grade: 60 },
    { name: "Charlie", grade: 30 },
    { name: "David", grade: 55 },
    { name: "Eve", grade: 70 }
  ];

  const calculateTotalGrades = () => {
    const updatedStudents = students.map(student => {
      if (student.grade < 50) {
        return { ...student, grade: student.grade + 15 };
      }
      return student;
    });

    const filteredStudents = updatedStudents.filter(student => student.grade > 50);
    const total = filteredStudents.reduce((acc, student) => acc + student.grade, 0);

    setTotalGrades(total);
  };
  return (
    <div>
      <Header/>
      <Events/>
      
      
      {/* <h1>Recherche d'objets par ID</h1>
      <button onClick={handleSearch}>Rechercher l'objet avec l'ID 2</button>

      {searchResult && (
        <div>
          <h2>Résultat de la recherche :</h2>
          <p>Nom : {searchResult.name}</p>
          <p>Âge : {searchResult.age}</p>
          <p>ID : {searchResult.id}</p>
        </div>
      )}
      
      <h1>Compteur d'occurrences</h1>
      <button onClick={handleCountOccurrences}>Compter les occurrences</button>

      {occurrencesResult && (
        <div>
          <h2>Résultat :</h2>
          <pre>{JSON.stringify(occurrencesResult, null, 2)}</pre>
        </div>
      )}

    <h1>Calcul du total des notes</h1>
      <button onClick={calculateTotalGrades}>Calculer le total des notes</button>

      {totalGrades !== null && (
        <div>
          <h2>Total des notes : {totalGrades}</h2>
        </div>
      )}
            <CounterC />
            <CounterF />
            <Pokemon />
            <div>
      <h1>Gestion de liste dynamique</h1>
      <ListManager initialItems={["React", "Angular", "VueJs"]} />

      <h2>Changement de Couleur</h2>
      <ColorBox initialColor="#ff0000" colorOptions={["#ff0000", "#00ff00", "#0000ff", "#ffff00"]} />

      <h2>Gestionnaire de Notes</h2>
      <NotesManager initialNotes={[12, 15, 18]} />

      <h2>Todo List</h2>
      <TodoList initialTasks={[{ name: "Réviser React", priority: "Haute", completed: false }]} />
    </div> */}
            <Footer/>
    </div>
  );
}

export default App;