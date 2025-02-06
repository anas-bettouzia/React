import { useState } from 'react';
import { Tab, Search, countOccurrences } from './Ecmascript/fonction';
import './App.css';

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
      <h1>Recherche d'objets par ID</h1>
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
    </div>
  );
}

export default App;