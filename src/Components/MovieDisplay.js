const MovieDisplay = ({movies , addSelectMovies}) => {

    return (
        
            <div className="Movies">
                {
                    movies.map((element) => (
                        <div onClick={(event)=>{addSelectMovies(element)}}>
                            <img src={element.image} alt="" />
                            <h2>{element.name}</h2>
                        </div>
                    ))
                }
            </div>
    )
}
export default MovieDisplay