// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// Type 1

// Type 2 
// import Counter from './counter';

//for button

import { Addcolor } from './Addcolor';
// import { Add } from '@mui/icons-material';
import { Switch, Route,Redirect} from "react-router-dom";
import { MoviesLists } from './MoviesLists';
import { NotFound } from './NotFound';
import { MovieDetails } from './MovieDetails';
import { Welcome } from './Welcome';
import { AddMovies } from './AddMovies';
import { EditMovies } from './EditMovie';
// import { Router } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


export default function App() {
  
  const movieList=[
    
    {
      name:"Avengers: Endgame",
      poster:"https://cellularnews.com/wp-content/uploads/2020/04/08-avengers-endgame-movie-poster-wallpaper-325x485.png",
      rating:"4.7",
      summary:"Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
      trailer:"https://www.youtube.com/embed/TcMBFSGVi1c"
    },
    
    {
      name:"Thor: Ragnarok",
      poster:"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      rating:"4.6",
      summary:"Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
      trailer:"https://www.youtube.com/embed/ue80QwXMRHg"
    },
    {
      name:"Iron Man",
      poster:"https://images2.vudu.com/poster2/141479-338",
      rating:"4.7",
      summary:"A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
      trailer:"https://www.youtube.com/embed/8ugaeA-nMTc"
    },
    {
      name:"The Incredible Hulk",
      poster:"https://flxt.tmsimg.com/assets/p176337_p_v10_ag.jpg",
      rating:"4.1",
      summary:"Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).",
      trailer:""
    },
    {
      name:"Avatar",
      poster:"https://movieposters2.com/images/670910-b.jpg",
      rating:"4.5",
      summary:"On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.",
      trailer:""
    },
    {
      name:"Spider-Man: Far from Home",
      poster:"https://i.redd.it/l8z673yg8em51.jpg",
      rating:"4.3",
      summary:"Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.",
      trailer:"https://www.youtube.com/embed/VJfBMtAmvbw"
    },
    {
      name:"King Kong",
      poster:"https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
      rating:"4.5",
      summary:"Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor.",
      trailer:"https://www.youtube.com/embed/1TSidCNA7mQ"
    },
    {
      name:"Guardians of the Galaxy",
      poster:"https://popculturethoughts83.files.wordpress.com/2019/06/guardians-of-the-galaxy.jpg",
      rating:"4.7",
      summary:"Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.",
      trailer:"https://www.youtube.com/embed/d96cjJhvlMA"
    }
  ]; 

  const [movies,setmovie] = useState(movieList);
  const history = useHistory();
  const [mode,setMode] = useState("dark")

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} style={{borderRadius:"0px", minHeight:"100vh"}}  >
    <div className="App">
       <AppBar position="static" style={{marginBottom:"24px"}}>
        <Toolbar>
        <Button 
        variant="text" 
        color="inherit"
        onClick={()=>history.push("/")}
        >Home
        </Button>

        <Button 
        variant="text" 
        color="inherit"
        onClick={()=>history.push("/movies")}
        >Movies
        </Button>

        <Button 
        variant="text" 
        color="inherit"
        onClick={()=>history.push("/add-movies")}
        >Add Movies
        </Button>

        <Button 
        variant="text" 
        color="inherit"
        onClick={()=>history.push("/color-game")}
        >Color game
        </Button>

        <Button 
        variant="text" 
        color="inherit"
        onClick={()=>history.push("/tictacteo")}
        >Tic-Tac-Toe Game
        </Button>
        
        <Button 
        startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        style={{marginLeft:"auto"}}
        variant="text" 
        color="inherit"
        onClick={()=>setMode(mode==="light"?"dark":"light")}
        >{mode==="light"?"dark":"light"}mode
        </Button>
         
        </Toolbar>
      </AppBar>
       {/* <nav>
      
         <Link to="/">Home</Link>
         <Link to="/movies">Movies</Link>
         <Link to="/add-movies">Add Movies</Link>
         <Link to="/color-game">Color game</Link>
       </nav> */}

      <Switch>

      <Route exact path="/">
          <Welcome/>
      </Route>
      {/* old route /films => movies */}
         <Route path="/films">
            <Redirect to="/movies"/>
         </Route>

         <Route path="/movies/edit/:id">
          <EditMovies movies={movies} setmovie={setmovie}/>
        </Route>

         <Route path="/movies/:id">
        <MovieDetails movies={movies}/>
        </Route>
  
        <Route path="/movies">
        <MoviesLists movies1={movies} setmovie={setmovie}/>
        </Route>

      <Route path="/add-movies">
      <AddMovies movies={movies} setmovie={setmovie}/>
      </Route>

      <Route path="/color-game">
      <Addcolor/>
      </Route>

      <Route path="/tictacteo">
      <TicTacToe/>
      </Route>
      
      <Route path="**">
         <NotFound />
      </Route>
    
      </Switch>
    </div>
    </Paper>
    </ThemeProvider>
  );
}


function TicTacToe () {
  const { width, height } = useWindowSize()
  const [board,setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);

  // useState([
  //   0,
  //   1,
  //   2,
  //   3,
  //   4,
  //   5,
  //   6,
  //   7,
  //   8
  // ]);

  const [isXTurn,setIsXTurn] = useState(true);

  // const handleClick = (index)=>{
  // //  console.log(index);
  // //  console.log(isXTurn ? "X" : "O");
  // if(board[index]==null){
  //   const boardCopy = [...board];
  //   boardCopy[index] = isXTurn ? "X" : "O";
  //   setBoard(boardCopy);
  //   setIsXTurn(!isXTurn);
  // }
  // }

  const decideWinner = (board)=>{
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    for(let i=0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      if(board[a]!== null && board[a]===board[b]&&board[b]===board[c]){
        console.log("winner is",board[a]);
        return board[a];
      }
    }
    return null;
  }
  const winner = decideWinner(board);

  const handleClick = (index)=>{
    //  console.log(index);
    //  console.log(isXTurn ? "X" : "O");
    if(winner == null && board[index]==null){
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
    }

 return(
   <div className="full-game">
     {winner ? <Confetti width={width}height={height}/> : ""}
     <div className="board">
     {board.map((val,index)=>
       <GameBox val={val} onPlayerClick = {()=>handleClick(index)} />
     )}
     </div>
   {winner ? <h1>Winner is: {winner}</h1> : ""}
  </div>
 )
}

function GameBox({onPlayerClick,val}){
  // const [val,setVal] = useState(null);
  const styles = {color:val==="X"? "green":"red"}
  return <div style={styles} onClick={onPlayerClick} className="game-box">
    {val}
  </div>
}