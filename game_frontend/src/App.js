import './App.css';
import {useState, useEffect} from'react'
import axios from 'axios'
import Fuse from 'fuse.js'
import Edit from './components/Edit'
import NavBar from './components/NavBar'
import Delete from './components/Delete'
import Table from './components/Table'
import Conservation from './components/Conservation'
import Sources from './components/Sources'



function App() {
  const [animals, setAnimals] = useState([])
  const [query, setQuery] = useState('')
  const [showAnimals, setShowAnimals] = useState(true)
  const [showAnimal, setShowAnimal] = useState(false)
  const [showSources, setShowSources] = useState(false)
  const [showConservation, setShowConservation] = useState(false)

  const googleURL = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_API_KEY}&q=`

  const APIBaseURL = 'https://rocky-hollows-96922.herokuapp.com/api/species'
  // const APIBaseURL = 'http://localhost:8000/api/species'

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
        <div class="showContainer">
          <div class="showImg">
            <img src={animal.image} alt={animal.commonName} id='showImg'></img>
          </div>
          <div class="description">
            <h1 class='showHeader'>Species Description: </h1>
            <h5>{animal.description}</h5>
          </div>
          <div class="stats">
            <Table animal={animal}/>
          </div>
          <div class="mapsApi">
        {/*============= GOOGLE MAPS API =============*/}
              <iframe
                className="map"
                width='100%'
                height='100%'
                loading='lazy'              
                src={`${googleURL} + ${animal.habitat}`}>
              </iframe>
        {/*============= GOOGLE MAPS API =============*/}
          </div>
          <Edit handleUpdate={handleUpdate} animal={animal} key={animal.id}/>
          <Delete handleDelete={handleDelete} animal={animal} key={animal.id}/>
          <a id='showBtn' type="button" class="btn btn-dark" href={`https://en.wikipedia.org/wiki/Special:Search/% + ${animal.commonName}`}  target='_blank' rel="noreferrer">Wikipedia {animal.commonName}</a>
        </div>
          )
        })}
      </div>
    )
  }
  const DisplaySources = () => {
    return(
      <>
        <Sources sourcePage={sourcePage}/>
      </>
    )
  }

  const DisplayConservation = () => {
    return (
      <>
          <Conservation conservationPage={conservationPage}/>
      </>
    )
  }
  const homePage = () => {
    getAnimals()
    setShowAnimals(true)
    setShowAnimal(false)
    setShowSources(false)
    setShowConservation(false)
  }
  const showPage = (selectedAnimal) => {
    setShowAnimal(true)
    setShowAnimals(false)
    setShowSources(false)
    setShowConservation(false)
    setAnimals(animals.filter(animal => animal.id == selectedAnimal.id))
  }

  const sourcePage = () => {
    setShowAnimals(false)
    setShowAnimal(false)
    setShowConservation(false)
    setShowSources(true)
  }
  const conservationPage = () => {
    setShowAnimals(false)
    setShowAnimal(false)
    setShowSources(false)
    setShowConservation(true)
  }

  useEffect(() => {
    getAnimals()
    setShowAnimals(true)
    setShowAnimal(false)
    setShowSources(false)
    setShowConservation(false)
  }, [])

  return (
    <>
      <h1 id='title'>Endangered Species</h1>
      <NavBar 
        handleCreate={handleCreate} 
        homePage={homePage} 
        query={query} 
        handleOnSearch={handleOnSearch}
        sourcePage={sourcePage}
        conservationPage={conservationPage}
      />

      {showAnimals ? <DisplayAllSpecies/> : null}
      {showAnimal ? <DisplayOneSpecies/> : null}
      {showSources ? <DisplaySources/> : null}
      {showConservation ? <DisplayConservation/> : null}
    </>
  )
}

export default App;
