import './App.css';
import {useState, useEffect} from'react'
import axios from 'axios'
// import Add from './components/Add'
import Edit from './components/Edit'
import NavBar from './components/NavBar'
import Delete from './components/Delete'



function App() {
  const [animals, setAnimals] = useState([])

  const getAnimals = () => {
    axios
        // .get('https://rocky-hollows-96922.herokuapp.com/api/species')
        .get('http://localhost:8000/api/species')
        .then(response => setAnimals(response.data),
        (err)=> console.error(err)
        )
        .catch((error)=> console.error(error))
  }
  const handleCreate = (addAnimal) => {
    axios
      // .post('https://rocky-hollows-96922.herokuapp.com/api/species', addAnimal)
      .post('http://localhost:8000/api/species', addAnimal)
      .then((response) => {
        // takes the existing state and spreads it, adds new object to the end
        setAnimals([...animals, response.data])
        // pulls all data and loads on the page
        // getAnimals()
      })
  }
  const handleUpdate =(editAnimal) => {
    axios   
    // id updates ID in DB, editComic brings the info from that function
      // .put('https://rocky-hollows-96922.herokuapp.com/api/species/' + editAnimal.id, editAnimal)
      .put('http://localhost:8000/api/species/' + editAnimal.id, editAnimal)
      .then((response) => {
        setAnimals(animals.map((animal) => {
          return animal.id !== response.data.id ? animal : response.data
        }))
        // getAnimals()
    })
  }
  const handleDelete = (deletedAnimal) => {
    axios
      // .delete('https://rocky-hollows-96922.herokuapp.com/api/species/' + deletedAnimal.id)
      .delete('http://localhost:8000/api/species/' + deletedAnimal.id)
      .then((response) => {
        setAnimals(animals.filter(animal => animal.id !== deletedAnimal.id))
        // getAnimals()
    })
  }



  useEffect(() => {
    getAnimals()
  }, [])

  return (
    <>
      <h1 id='title'>Endanged Species</h1>
      <NavBar handleCreate={handleCreate}/>
      {/* <Add handleCreate={handleCreate}/><br/> */}
      <div class='container'>
        {animals.map((animal) => {
          return(
            <div class='animal' key={animal.id}>
              <h3>Name: {animal.commonName}</h3>
              <h3>Species: {animal.species}</h3>
              <h3>Habitat: {animal.habitat}</h3>
              <h3>Diet: {animal.diet}</h3>
              <img src={animal.image} alt={animal.commonName}></img>
              <h3>Level: {animal.level}</h3>
              <Edit handleUpdate={handleUpdate} animal={animal} key={animal.id}/>
              <button onClick={() => {handleDelete(animal)}}>
              Delete
              </button>
              <Delete animal={animal} handleDelete={handleDelete} key={animal.id}/>
            </div> 
          )
        })}
      </div>
    </>
  )
}

export default App;