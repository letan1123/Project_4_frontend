import {useState} from 'react'

const Edit = (props) => {
    const [animal, setAnimal] = useState({...props.animal})

    const handleChange = (event) => {
        setAnimal({...animal, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(animal)
        props.handleUpdate(animal)
    }
    return(
        <>
            {/* ======================= MODAL WINDOW TO EDIT SPECIES ======================= */}
        <a id='showBtn' type="button" class="btn btn-dark" role="button" data-bs-toggle="modal" data-bs-target="#modalEdit">Edit Species</a>

            {/* ======================= MODAL WINDOW TO EDIT SPECIES ======================= */}
        <div class="modal fade" id="modalEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Edit Species -- {animal.commonName} {animal.species}</h5>
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
                    <label htmlFor="genus:">Genus: </label><br/>
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

        {/* <details>
            <summary>Edit Animal</summary>
                <form onSubmit={handleSubmit}>
                    htmlFor creates a loop
                    <label htmlFor="name">Name: </label><br/>
                    <input type="text" name="commonName" value={animal.commonName}
                    onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="species">Species: </label><br/>
                    <input type="text" name="species" value={animal.species}
                    onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="order">Order: </label><br/>
                    <input type="text" name="order" value={animal.order}
                    onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="suborder">Suborder: </label><br/>
                    <input type="text" name="suborder" value={animal.suborder}
                    onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="habitat">Habitat: </label><br/>
                    <input type="text" name="habitat" value={animal.habitat}
                    onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="diet">Diet: </label><br/>
                    <input type="text" name="diet" value={animal.diet}
                    onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="image">Image: </label><br/>
                    <input type="text" name="image" value={animal.image}
                    onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="level">Level: </label><br/>
                    <input type="number" name="level" value={animal.level}
                    onChange={handleChange}/>
                    <input type="submit"/>
                </form>
            </details> */}
        </>
    )
}
export default Edit