import "./MovieDeleteButton.css"

const MovieDeleteButton = (props) => {
    return(
    <button onClick={props.deleteMovie}>Vymazat film</button>
    )
}

export default MovieDeleteButton