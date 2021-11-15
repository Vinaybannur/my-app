import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


export function MovieDetails({ movies }) {
    const history = useHistory();
  const { id } = useParams();
  const movie = movies[id];
  const styles = {
    color: movie.rating < 4.6 ? "crimson" : "green",
    fontWeight: "bold",
  };

  // console.log(movie);
  return (
    <div className="newContainer">
      <iframe
        width="100%"
        height="500"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <div className="details">
        <h2 className="name">{movie.name}</h2>
        <h3 className="rating" style={styles}>Rating: {movie.rating}</h3>
        <p className="summary">{movie.summary}</p>
        <Button 
        onClick={()=>history.goBack()}
         variant="outlined" 
         startIcon={<KeyboardBackspaceIcon />}>
        Back
      </Button>
      </div>
    </div>
  );
}
