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
  const [countStart, setCountStart] = useState(0)
  const [countEnd, setCountEnd] = useState(2)

  const googleURL = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}&q=`

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

  const nextCount = () => {

    setCountEnd(countEnd + 2)
    setCountStart(countStart + 2)

  }

  const prevCount = () => {
    if (countStart <= 0 || countEnd < 0) {
      setCountStart(0)
      setCountEnd(2)
    } else {

    setCountEnd(countEnd - 2)
    setCountStart(countStart - 2)
  }
  }

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
      <>
        <div>
          <table className="top-table">
            <tr className="top-tr">
              <th className="top-th">1</th>
              <th className="top-th">2</th>
              <th className="top-th">3</th>
              <th className="top-th">4</th>
              <th className="top-th">5</th>
              <th className="top-th">6</th>
              <th className="top-th">7</th>
            </tr>
            <tr className="top-tr">
              <th className="top-th">LC</th>
              <th className="top-th">NT</th>
              <th className="top-th">VU</th>
              <th className="top-th">EN</th>
              <th className="top-th">CR</th>
              <th className="top-th">EW</th>
              <th className="top-th">EX</th>
            </tr>
            <tr className="top-tr">
              <th className="top-th">Least Concerned</th>
              <th className="top-th">Near Threatened</th>
              <th className="top-th">Vulnerable</th>
              <th className="top-th">Endangered</th>
              <th className="top-th">Critically Endangered</th>
              <th className="top-th">Extinct in the Wild</th>
              <th className="top-th">Extinct</th>
            </tr>
          </table>
        </div>
        <div className="button-container-top">
          <button className="button-prev button-top" onClick={prevCount}>Previous</button>
          <button className="button-next button-top" onClick={nextCount}>Next</button>
        </div>
      <div className='container'>
        {animalResults.slice(countStart,countEnd).map((animal) => {
          return(
            <div className='animal' key={animal.id}>
            <table className="main-table">
              <tr className="main-tr">
                <th className="main-th">Name</th>
                <th className="main-th">{animal.commonName}</th>
              </tr>
              <tr className="main-tr">
                <th className="main-th">Species</th>
                <th className="main-th">{animal.species}</th>
              </tr>
              <tr className="main-tr">
                <th className="main-th">Hatitat</th>
                <th className="main-th">{animal.habitat}</th>
              </tr>
              <tr className="main-tr">
                <th className="main-th">Diet</th>
                <th className="main-th">{animal.diet}</th>
              </tr>
            </table>
              <img className="show-page-images" src={animal.image} alt={animal.commonName}></img>
              {animal.level == 1 ? <img src="https://a-z-animals.com/media/lc.jpg"></img> : null}
              {animal.level == 2 ? <img src="https://a-z-animals.com/media/nt.jpg"></img> : null}
              {animal.level == 3 ? <img src="https://a-z-animals.com/media/vu.jpg"></img> : null}
              {animal.level == 4 ? <img src="https://a-z-animals.com/media/en.jpg"></img> : null}
              {animal.level == 5 ? <img src="https://a-z-animals.com/media/cr.jpg"></img> : null }
              {animal.level == 6 ? <img src="https://a-z-animals.com/media/ew.jpg"></img> : null}
              {animal.level == 7 ? <img src="https://a-z-animals.com/media/ex.jpg"></img> : null}
              {animal.level > 7 ? null : null}
              <a href='#' onClick={() => {showPage(animal)}} class="btn btn-link" role="button">Expand</a>
            </div>
          )
        })}
      </div>
      </>
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
