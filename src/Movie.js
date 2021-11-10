import { useState } from 'react';
import { Counter } from './counter';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

// function Msg(props) {
//   return (
//     <div>
//       <h1>{props.name} Hello world!!</h1>
//     </div>
//   );
// }
// destucturing
export function Movie({ movieName, poster, rating, summary }) {

  const [show, setShow] = useState(false);

  //conditional styling
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  //conditional styling
  const styles = {
    color: rating < 4.6 ? "crimson" : "green",
    fontWeight: "bold",
  };

  return (

    <Card className="container">
      <div className="details">
        <img className="pic" src={poster} alt={movieName} />
        <h2 className="name">{movieName}</h2>
        <h3 className="rating" style={styles}>Rating: {rating}</h3>
      </div>

      {/* <button className="movie-show-button" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Summary
      </button> */}

    <Button 
         className="movie-show-button" 
         onClick={() => setShow(!show)} 
         variant="outlined">
          {show ? "Hide" : "Show"} Summary
    </Button>

      <p className="summary" style={summaryStyles}>{summary}</p>

      {/* conditional rendering  */}
      {/* {show ? <p className="summary" style={summaryStyles}>{summary}</p> : "" } */}


      <Counter />

    </Card>

  );
}
