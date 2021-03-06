import { Movie } from './Movie';
// import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
import { useState,useEffect } from 'react';
import { API_URL } from './global-constants';



export function MoviesLists() {

  const [movies,setmovie] = useState([]);

  const getMovies =()=>{
    fetch(`${API_URL}/movies`)
    .then((data)=>data.json())
    .then((mvs)=>setmovie(mvs));
  }

  useEffect(getMovies,[])

  const deleteMovie = (id)=>{
    fetch(`${API_URL}/movies/${id}`, 
    {method:"DELETE"})
    .then(()=>getMovies())
  }

  const history = useHistory();
  return (
    <div className="Allmovies">
      {movies.map(({ name, rating, summary, poster,id,_id },index) => 

      <Movie 
      key={_id}
      movieName={name} 
      poster={poster} 
      rating={rating} 
      summary={summary} 
      id={_id} 
      deleteButton={ <IconButton onClick={()=>{ 
        deleteMovie(_id)
        // console.log("deleting...",index)
        // const deleteIdx = index;
        // const remainingMovies = movies1.filter((mv,idx)=>{
        //   return idx !== deleteIdx;
        // })
        // setmovie(remainingMovies);
      }}
        className="movie-show-button"
        color="error"
        aria-label="more-info">
             < DeleteIcon/>
   </IconButton>}

      editButton={<IconButton 
        style={{marginLeft:"auto"}}
        onClick={()=>history.push("/movies/edit/"+_id)}
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
