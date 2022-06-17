import './App.css';
import {useState, useEffect} from'react'
import axios from 'axios'
import Fuse from 'fuse.js'
import Edit from './components/Edit'
import NavBar from './components/NavBar'
import Delete from './components/Delete'



function App() {
  const [animals, setAnimals] = useState([])
  const [query, setQuery] = useState('')
  const [showAnimals, setShowAnimals] = useState(true)
  const [showAnimal, setShowAnimal] = useState(false)

  const googleURL = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}&q=`

  // const APIBaseURL = 'https://rocky-hollows-96922.herokuapp.com/api/species'
  const APIBaseURL = 'http://localhost:8000/api/species'

{/* ============================= SEARCH BAR ============================= */}

    const fuse = new Fuse(animals, {
      keys: [
        'commonName',
        'species',
        'habitat',
        'diet'
      ],
      includeScore: true
  })

  const results = fuse.search(query)
  const animalResults = query ? results.map(result => result.item) : animals

  function handleOnSearch({ currentTarget = {} })  {
    const { value } = currentTarget;
    setQuery(value)
  }

  {/* ========================== HANDLES CHANGES =========================== */}

  const getAnimals = () => {
    axios
        .get(APIBaseURL)
        .then(response => setAnimals(response.data),
        (err)=> console.error(err)
        )
        .catch((error)=> console.error(error))
  }
  const handleCreate = (addAnimal) => {
    axios
      .post(APIBaseURL, addAnimal)
      .then((response) => {
        // takes the existing state and spreads it, adds new object to the end
        setAnimals([...animals, response.data])
        // pulls all data and loads on the page
        // getAnimals()
      })
  }
  const handleUpdate =(editAnimal) => {
    axios   
    // id updates ID in DB, editAnimal brings the info from that function
      .put(APIBaseURL + '/' + editAnimal.id, editAnimal)
      .then((response) => {
        setAnimals(animals.map((animal) => {
          return animal.id !== response.data.id ? animal : response.data
        }))
        // getAnimals()
    })
  }
  const handleDelete = (deletedAnimal) => {
    axios
      .delete(APIBaseURL + '/' + deletedAnimal.id)
      .then((response) => {
        setShowAnimal(false)
        setShowAnimals(true)
        // setAnimals(animals.filter(animal => animal.id !== deletedAnimal.id))
        getAnimals()
    })
  }
  const DisplayAllSpecies = () => {
    return (
      <div class='container'>
        {animalResults.map((animal) => {
          return(
            <div class='animal' key={animal.id}>
              <h3>Name: {animal.commonName}</h3>
              <h5>Species: {animal.species}</h5>
              <h5>Habitat: {animal.habitat}</h5>
              <h5>Diet: {animal.diet}</h5>
              <img src={animal.image} alt={animal.commonName}></img>
              <h5>Level: {animal.level}</h5>
              <a href='#' onClick={() => {showPage(animal)}} class="btn btn-link" role="button">Expand Species</a>
            </div> 
          )
        })}
      </div>
    )
  }
  const DisplayOneSpecies = () => {
    return (
      <div class='container'>
        {animals.map((animal) => {
          return(
            <div class='singleAnimal' key={animal.id}>
              <h3>Name: {animal.commonName}</h3>
              <h5>Species: {animal.species}</h5>
              <h5>Diet: {animal.diet}</h5>
              <img src={animal.image} alt={animal.commonName}></img>
              <h5>Level: {animal.level}</h5>
              <h5>Habitat: {animal.habitat}</h5>
              {/*============= GOOGLE MAPS API =============*/}
              <iframe
                className="map"
                width='800'
                height='550'
                loading='lazy'              
                src={`${googleURL} + ${animal.habitat}`}>
              </iframe>
              {/*============= GOOGLE MAPS API =============*/}
              <Edit handleUpdate={handleUpdate} animal={animal} key={animal.id}/>
              <Delete handleDelete={handleDelete} animal={animal} key={animal.id}/>
            </div> 
          )
        })}
      </div>
    )
  }
  const homePage = () => {
    getAnimals()
    setShowAnimals(true)
    setShowAnimal(false)
  }
  const showPage = (selectedAnimal) => {
    setShowAnimal(true)
    setShowAnimals(false)
    setAnimals(animals.filter(animal => animal.id == selectedAnimal.id))
  }



  useEffect(() => {
    getAnimals()
    setShowAnimals(true)
    setShowAnimal(false)
  }, [])

  return (
    <>
      <h1 id='title'>Endangered Species</h1>
      <NavBar 
        handleCreate={handleCreate} 
        homePage={homePage} 
        query={query} 
        handleOnSearch={handleOnSearch}
      />

      {showAnimals ? <DisplayAllSpecies/> : null}
      {showAnimal ? <DisplayOneSpecies/> : null}
    </>
  )
}

export default App;
