// import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import {  useFormik } from "formik";
import * as yup from 'yup';


const formValidationSchema = yup.object({
  name:yup.string().required("Why not fill this name?🤔"),
  poster:yup.string().required("Why not fill this poster?🤔").min(4,"Need a bigger poster🤨"),
  rating:yup.number().required("Why not fill this rating?🤔").min(0,"Need a bigger rating🤨").max(5,"Too much rating😅"),
  summary:yup.string().required("Why not fill this summary?🤔").min(20,"Need a bigger summary🤨"),
  trailer:yup.string().required("Why not fill this trailer?🤔").min(4,"Need a bigger trailer🤨"),
  
});

// when two component needed the same data (movies)->put the data in same parent component (that is app)-->HOC(higher order components)


export function AddMovies() {
    const history = useHistory();

  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const {handleSubmit,values,handleChange,handleBlur,errors,touched} = useFormik({
    initialValues: {name:"",poster:"",rating:"",summary:"",trailer:""},
    // validate:validateForm,
    validationSchema:formValidationSchema,
    // only when no errors ,onsubmit
    onSubmit:(newMovie)=>{
        console.log("onSubmit",newMovie);
        addMovie(newMovie)
    }
})

  const addMovie = (newMovie) => {
    // console.log("...adding",name,poster,rating,summary);
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer
    // };
    console.log(newMovie);
    // console.log(newMovie);
    // copy the movie list then add it to the newMovie
    // setmovie([...movies, newMovie]);
    // history.push("/movies");
    
    fetch(`https://6166c4d913aa1d00170a66f7.mockapi.io/movies`, 
    {method:"POST",
     body:JSON.stringify(newMovie),
     headers:{
       'Content-Type':'application/json'
     }
  })
    .then(()=> history.push("/movies"));
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

      <Button type="submit" variant="outlined">Add Movie</Button>

    </form>
  );
}

