import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {
    return (
        <button className="main-delete-button" onClick={props.deleteMovies}>Vymazat vsetko</button>
    )
}

export default AllDeleteButton