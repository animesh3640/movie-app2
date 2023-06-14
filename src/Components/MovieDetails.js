
const MovieDetails = ({ selectedMovie }) => {

    return (
        <div className="movieDetails-containers">
            {
                selectedMovie && (
                    <div className="movieDetails">
                        <h2 style={{ backgroundColor: "gray", padding: "10px", color: "White" }}>Movie Details</h2>
                        <div style={{ backgroundColor: "black", color: 'white', padding: "80px 20px" }}>
                            <h2 style={{ backgroundColor: "lightgray", color: "black" ,marginBottom:"20px" }}>Title : {selectedMovie.name}</h2>
                            <h3 style={{marginBottom:"10px"}}>Genere : {selectedMovie.genere}</h3>
                            <h3>Ratings : {selectedMovie.rating}</h3>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default MovieDetails