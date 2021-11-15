import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

// when two component needed the same data (movies)->put the data in same parent component (that is app)-->HOC(higher order components)
export function EditMovies({ movies, setmovie }) {
    const history = useHistory();
    const { id } = useParams();
    const movie = movies[id];


  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const editMovie = () => {
    // console.log("...adding",name,poster,rating,summary);
    const updatedMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer
    };
    // console.log(newMovie);
    // copy the movie list then add it to the newMovie
    // setmovie([...movies, updatedMovie]);
    const copyMovieList = [...movies];
    copyMovieList[id]= updatedMovie;
    setmovie(copyMovieList);
    history.push("/movies");
  };

  return (
    <div className="add-movie-form">
      {/* <input
             value={name}
             onChange = {(event)=>setName(event.target.value)}
            placeholder="Name" /> */}

      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="standard-basic" label="Name" variant="standard" />

      {/* <input
             value={poster}
             onChange = {(event)=>setPoster(event.target.value)}
            placeholder="poster URL" /> */}

      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        id="standard-basic" label="Poster URL" variant="standard" />

      {/* <input
             value={rating}
             onChange = {(event)=>setRating(event.target.value)}
            placeholder="Rating" /> */}

      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        id="standard-basic" label="Rating" variant="standard" />

      {/* <input
             value={summary}
             onChange = {(event)=>setSummary(event.target.value)}
            placeholder="Summary" /> */}

      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        id="standard-basic" label="Summary" variant="standard" />

      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        id="standard-basic" label="Trailer" variant="standard" />

      {/* <button onClick={addMovie}>Add Movie</button> */}

      <Button onClick={editMovie} variant="outlined">Save</Button>

    </div>
  );
}
