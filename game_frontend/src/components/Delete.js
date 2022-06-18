import {useState} from 'react'

const Delete = (props) => {

    const [animal, setAnimal] = useState({...props.animal})


return (
    <>
    
 {/* ======================= MODAL WINDOW TO DELETE SPECIES ======================= */}
 <a class="nav-link" role="button" data-bs-toggle="modal" data-bs-target="#modalDelete">Delete Species</a>

{/* ======================= MODAL WINDOW TO DELETE SPECIES ======================= */}
<div class="modal fade" id="modalDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
    <h5 class="modal-title" id="staticBackdropLabel">Delete Species -- {animal.commonName}, {animal.species}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
Deleting this Species will permanantly delete the Animal from the database. Do you want to continue?
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
    <button type="button" onClick={() => {props.handleDelete(props.animal)}} class="btn btn-secondary" data-bs-dismiss="modal">Delete</button>
</div>
</div>
</div>
</div>

    </>
)
}

export default Delete
