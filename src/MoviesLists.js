import { Movie } from './Movie';
// import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";

export function MoviesLists({ movies1 ,setmovie }) {
  const history = useHistory();
  return (
    <div className="Allmovies">
      {movies1.map(({ name, rating, summary, poster },index) => 

      <Movie movieName={name} 
      poster={poster} 
      rating={rating} 
      summary={summary} 
      id={index} 
      deleteButton={ <IconButton onClick={()=>{ 
        console.log("deleting...",index)
        const deleteIdx = index;
        const remainingMovies = movies1.filter((mv,idx)=>{
          return idx !== deleteIdx;
        })
        setmovie(remainingMovies);
      }}
        className="movie-show-button"
        color="error"
        aria-label="more-info">
             < DeleteIcon/>
   </IconButton>}

      editButton={<IconButton 
        style={{marginLeft:"auto"}}
        onClick={()=>history.push("/movies/edit/"+index)}
         className="movie-show-button"
         color="primary"
         aria-label="more-info">
           < EditIcon/>
       </IconButton>}

      />
      )}
    </div>

  );
}
