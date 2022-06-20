import {useState} from 'react'

const NavBar = (props) => {

<<<<<<< HEAD
    let emptyAnimal = {commonName: '',species: '',order: '',genus: '',habitat: '',diet: '', image: '',level: '',}
=======
    let emptyAnimal = {commonName: '',species: '',order: '',genus: '',habitat: '',diet: '', image: '',level: '',description:''}
>>>>>>> fbba0d76fb4cdd957ce7891a4e203446f31eed7f

    const [animal, setAnimal] = useState(emptyAnimal)


    const handleChange = (event) => {
        setAnimal({...animal, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(animal)
        props.handleCreate(animal)
<<<<<<< HEAD
        setAnimal({commonName: '',species: '',order: '',genus: '',habitat: '',diet: '', image: '',level: '',})
=======
        setAnimal({commonName: '',species: '',order: '',genus: '',habitat: '',diet: '', image: '',level: '',description:''})
>>>>>>> fbba0d76fb4cdd957ce7891a4e203446f31eed7f
    }

    return(
        <>
        {/* ======================= NAV BAR ======================= */}
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand">Endangered Species</a>
            <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
            <ul class="navbar-nav mx-auto">
                {/* ======================= HOME LINK ======================= */}
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" role='button' onClick={() => {props.homePage(props.animals)}}>Home</a>
                </li>
                {/* ==================== MODAL TRIGGER FOR ADD SPECIES ===================== */}
                <li class="nav-item">
                    <a class="nav-link" role="button" data-bs-toggle="modal" data-bs-target="#modalAdd"><i class="bi bi-plus-circle"> Add Species</i></a>
                </li>

                {/* ================== CONSERVATION DROPDOWN NAV BAR LINK ================== */}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Conservation Links</a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="https://www.movebank.org/cms/webapp?gwt_fragment=page=search_map" target='_blank' rel="noreferrer">Animal Tracking Data</a></li>
                    <li><a class="dropdown-item" href="https://awionline.org/content/list-endangered-species" target='_blank' rel="noreferrer">Endangered Animals</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="https://awionline.org/content/what-you-can-do-wildlife" target='_blank' rel="noreferrer">What you can do</a></li>
                </ul>
                </li>
            {/* ======================= ABOUT DROPDOWN NAV BAR LINK ======================= */}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="https://github.com/Lanny-MacMillan" target='_blank' rel="noreferrer"><i class="bi bi-github"> Lanny</i></a></li>
                    <li><a class="dropdown-item" href="https://github.com/hollowred" target='_blank' rel="noreferrer"><i class="bi bi-github"> Salem</i></a></li>
                    <li><a class="dropdown-item" href="https://github.com/letan1123" target='_blank' rel="noreferrer"><i class="bi bi-github"> Tan</i></a></li>
                </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" role='button' onClick={() => {props.conservationPage(props)}}>Conservation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" role='button' onClick={() => {props.sourcePage(props)}}>Sources</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">© 2022</a>
                </li>
            </ul>

            {/* ======================= NAV SEARCH BAR LINK ======================= */}

            <form class="d-flex">
                <input class="form-control me-2" type='text' placeholder="Search This Page" value={props.query} id='query' onChange={props.handleOnSearch}/>
                <button class="btn btn-outline-success" type="submit" onChange={props.handleOnSearch}>Search</button>
            </form>
            </div>
        </div>
        {/* ==================== HAMBURGER FOR SMALLER MEDIA QUERIES ==================== */}
            <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
                <h5 class="text-white h4">Collapsed content</h5>
                <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
            </div>
            <nav class="navbar  ms-auto navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            </nav>
        </nav>

        {/* ======================= MODAL WINDOW - ADD SPECIES ======================= */}
        <div class="modal fade" id="modalAdd" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Add Species to Index</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="form-group">
            <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label><br/>
                    <input type="text" class="form-control" name="commonName" value={animal.commonName}
                    onChange={handleChange}/>
                    <br/>
                    <label htmlFor="species">Species: </label><br/>
                    <input type="text" class="form-control" name="species" value={animal.species}
                    onChange={handleChange}/>
                    <br/>
                    <label htmlFor="order">Order: </label><br/>
                    <input type="text" class="form-control" name="order" value={animal.order}
                    onChange={handleChange}/>
                    <br/>
<<<<<<< HEAD
                    <label htmlFor="genus">genus: </label><br/>
=======
                    <label htmlFor="genus:">Genus: </label><br/>
>>>>>>> fbba0d76fb4cdd957ce7891a4e203446f31eed7f
                    <input type="text" class="form-control" name="genus" value={animal.genus}
                    onChange={handleChange}/>
                    <br/>
                    <label htmlFor="habitat">Habitat: </label><br/>
                    <input type="text" class="form-control" name="habitat" value={animal.habitat}
                    onChange={handleChange}/>
                    <br/>
                    <label htmlFor="diet">Diet: </label><br/>
                    <input type="text" class="form-control" name="diet" value={animal.diet}
                    onChange={handleChange}/>
                    <br/>
                    <label htmlFor="image">Image: </label><br/>
                    <input type="text" class="form-control" name="image" value={animal.image}
                    onChange={handleChange}/>
                    <br/>
                    <label htmlFor="level">Level: </label><br/>
                    <input type="number" class="form-control" name="level" value={animal.level}
                    onChange={handleChange}/>
                    <br/>
                    <label htmlFor="description">Description: </label><br/>
                    <input type="text" class="form-control" name="description" value={animal.description}
                    onChange={handleChange}/>
                    <br/>
                    <input type="submit" class="btn btn-dark" data-bs-dismiss="modal"/>
                </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default NavBar
