import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {  useFormik } from "formik";
import { formValidationSchema } from './AddMovies';
import { API_URL } from './global-constants';

// when two component needed the same data (movies)->put the data in same parent component (that is app)-->HOC(higher order components)
export function EditMovies() {
    // const history = useHistory();
    const { id } = useParams();
    // const movie = movies[id];

    const [movie,setMovie] = useState(null);
    useEffect(()=>{
      fetch(`${API_URL}/${id}`)
      .then((data)=>data.json())
      .then((mvs)=>setMovie(mvs));
    },[id]);

    return movie ? <UpdateMovie movie={movie} /> :"";
  }
   
  function UpdateMovie({movie}){
    
  //   const [name, setName] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [rating, setRating] = useState(movie.rating);
  // const [summary, setSummary] = useState(movie.summary);
  // const [trailer, setTrailer] = useState(movie.trailer);
  const {handleSubmit,values,handleChange,handleBlur,errors,touched} = useFormik({
    initialValues: {
      name:movie.name,
      poster:movie.poster,
      rating:movie.rating,
      summary:movie.summary,
      trailer:movie.trailer
    },
    // validate:validateForm,
    validationSchema:formValidationSchema,
    // only when no errors ,onsubmit
    onSubmit:(newMovie)=>{
        console.log("onSubmit",newMovie);
        editMovie(newMovie)
    }
})


  const history = useHistory();
   
  const editMovie = (updatedMovie) => {
    // console.log("...adding",name,poster,rating,summary);
    // const updatedMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer
    // };

    fetch(`${API_URL}/movies/${movie.id}`,
    {method:"PUT",
     body:JSON.stringify(updatedMovie),
     headers:{
       'Content-Type':'application/json'
     },
    }).then(()=> history.push("/movies"));
    
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
    {/* <input
           value={name}
           onChange = {(event)=>setName(event.target.value)}
          placeholder="Name" /> */}

    <TextField
      id="name"
      name="name"
      value={values.name} 
     onChange={handleChange}
     onBlur={handleBlur}
      label="Name" 
      variant="standard" 
      helperText={errors.name && touched.name && errors.name}
      error={errors.name && touched.name}
      />
     {/* {errors.name && touched.name && errors.name} */}
    {/* <input
           value={poster}
           onChange = {(event)=>setPoster(event.target.value)}
          placeholder="poster URL" /> */}

    <TextField
      id="poster"
      name="poster"
      value={values.poster} 
     onChange={handleChange}
     onBlur={handleBlur}
       label="Poster URL" 
       variant="standard" 
       helperText={errors.poster && touched.poster && errors.poster}
       error={errors.poster && touched.poster}
       />
     {/* {errors.poster && touched.poster && errors.poster} */}
    {/* <input
           value={rating}
           onChange = {(event)=>setRating(event.target.value)}
          placeholder="Rating" /> */}

    <TextField
     id="rating"
     name="rating"
     value={values.rating} 
    onChange={handleChange}
    onBlur={handleBlur}
       label="Rating" 
       variant="standard" 
       helperText={errors.rating && touched.rating && errors.rating}
       error={errors.rating && touched.rating}
       />
      {/* {errors.rating && touched.rating && errors.rating} */}

    {/* <input
           value={summary}
           onChange = {(event)=>setSummary(event.target.value)}
          placeholder="Summary" /> */}

    <TextField
      id="summary"
      name="summary"
      value={values.summary} 
     onChange={handleChange}
     onBlur={handleBlur}
      label="Summary" 
      variant="standard" 
      helperText={errors.summary && touched.summary && errors.summary}
       error={errors.summary && touched.summary}
      />
       {/* {errors.summary && touched.summary && errors.summary} */}

    <TextField
     id="trailer"
     name="trailer"
     value={values.trailer} 
    onChange={handleChange}
    onBlur={handleBlur}
       label="Trailer" 
       variant="standard"
       helperText={errors.trailer && touched.trailer && errors.trailer}
       error={errors.trailer && touched.trailer} 
       />
     {/* {errors.trailer && touched.trailer && errors.trailer} */}
    {/* <button onClick={addMovie}>Add Movie</button> */}

    <Button type="submit" variant="outlined">Save</Button>

  </form>


    // <div className="add-movie-form">
    //   {/* <input
    //          value={name}
    //          onChange = {(event)=>setName(event.target.value)}
    //         placeholder="Name" /> */}

    //   <TextField
    //     value={name}
    //     onChange={(event) => setName(event.target.value)}
    //     id="standard-basic" label="Name" variant="standard" />

    //   {/* <input
    //          value={poster}
    //          onChange = {(event)=>setPoster(event.target.value)}
    //         placeholder="poster URL" /> */}

    //   <TextField
    //     value={poster}
    //     onChange={(event) => setPoster(event.target.value)}
    //     id="standard-basic" label="Poster URL" variant="standard" />

    //   {/* <input
    //          value={rating}
    //          onChange = {(event)=>setRating(event.target.value)}
    //         placeholder="Rating" /> */}

    //   <TextField
    //     value={rating}
    //     onChange={(event) => setRating(event.target.value)}
    //     id="standard-basic" label="Rating" variant="standard" />

    //   {/* <input
    //          value={summary}
    //          onChange = {(event)=>setSummary(event.target.value)}
    //         placeholder="Summary" /> */}

    //   <TextField
    //     value={summary}
    //     onChange={(event) => setSummary(event.target.value)}
    //     id="standard-basic" label="Summary" variant="standard" />

    //   <TextField
    //     value={trailer}
    //     onChange={(event) => setTrailer(event.target.value)}
    //     id="standard-basic" label="Trailer" variant="standard" />

    //   {/* <button onClick={addMovie}>Add Movie</button> */}

    //   <Button onClick={editMovie} variant="outlined">Save</Button>

    // </div>
  );
  }


  

  
    // console.log(newMovie);
    // copy the movie list then add it to the newMovie
    // setmovie([...movies, updatedMovie]);
  //   const copyMovieList = [...movies];
  //   copyMovieList[id]= updatedMovie;
  //   setmovie(copyMovieList);
  //   history.push("/movies");
  // };

 
// }
