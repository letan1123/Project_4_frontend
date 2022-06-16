import {useState} from 'react'

const NavBar = (props) => {

    let emptyAnimal = {commonName: '',species: '',order: '',suborder: '',habitat: '',diet: '', image: '',level: '',}

    const [animal, setAnimal] = useState(emptyAnimal)

    const handleChange = (event) => {
        setAnimal({...animal, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(animal)
        props.handleCreate(animal)
        setAnimal({commonName: '',species: '',order: '',suborder: '',habitat: '',diet: '', image: '',level: '',})
    }

    return(
        <>
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Endangered Species</a>
            <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
        {/* ======================= MODAL WINDOW FOR ADD SPECIES ======================= */}
                <a class="nav-link" href="#" role="button" data-bs-toggle="modal" data-bs-target="#modalAdd">Add Species</a>
                </li>
                <li class="nav-item dropdown">
                    
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Conservation Links</a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="https://www.movebank.org/cms/webapp?gwt_fragment=page=search_map">Animal Tracker</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
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
        {/* ======================= MODAL WINDOW FOR ADD SPECIES ======================= */}
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
                    <label htmlFor="suborder">Suborder: </label><br/>
                    <input type="text" class="form-control" name="suborder" value={animal.suborder}
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
                    onChange={handleChange}/><br/>
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