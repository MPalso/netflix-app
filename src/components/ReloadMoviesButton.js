import "./ReloadMoviesButton.css"

const RealoadMoviesButton = (props) => {
    return (
         <button className="reload-movies-button" onClick={props.reloadAllMovies}>Nahraj filmy</button>
    )

}

export default RealoadMoviesButton