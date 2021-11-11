import { Movie } from './Movie';
// import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function MoviesLists({ movies1 ,setmovie }) {
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
        const remainingMovies = movies1.filter((mv,idx)=>idx != deleteIdx)
        setmovie(remainingMovies);
      }}
        className="movie-show-button"
        color="error"
        aria-label="more-info">
             < DeleteIcon/>
   </IconButton>}
      editButton={<IconButton onClick={()=>{ }}
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
