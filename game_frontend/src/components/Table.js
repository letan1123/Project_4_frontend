
const Table = (props) => {

    return (
        <>
        <h4 id='showCommonName'>{props.animal.commonName}</h4>
        <table class="table">
            <tbody>
                <tr class="table-dark">
                    <th scope="row">Common Name:</th>
                    <td>{props.animal.commonName}</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">Species</th>
                    <td>{props.animal.species}</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">Order: </th>
                    <td>{props.animal.order}</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">Genus: </th>
                    <td>{props.animal.genus}</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">Diet:</th>
                    <td>{props.animal.diet}</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">Endangered Level:</th>
                    <td>{props.animal.level}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}      

export default Table