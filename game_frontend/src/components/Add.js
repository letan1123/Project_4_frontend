import {useState} from 'react'

const Add = (props) => {
    let emptyAnimal = {commonName: '',species: '',order: '',genus: '',habitat: '',diet: '', image: '',level: '',}

    const [animal, setAnimal] = useState(emptyAnimal)

    const handleChange = (event) => {
        setAnimal({...animal, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(animal)
        props.handleCreate(animal)
        setAnimal({commonName: '',species: '',order: '',genus: '',habitat: '',diet: '', image: '',level: '',})
    }
    return (
        <>
            <details>
            <summary>Add Animal</summary>
                <form onSubmit={handleSubmit}>
                    {/* htmlFor creates a loop */}
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
                    <label htmlFor="genus">Genus: </label><br/>
                    <input type="text" name="genus" value={animal.genus}
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
            </details>
        </>
    )
}

export default Add
