import logo from './logo.svg';
import './App.css';

export default function App() {
  // const names = ["vinay","vin","avi"]

  // const names = [
  // {name:"Vinay",img:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
  // {name:"Vin",img:"data:image/jpeg;base64,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"},
  // {name:"VinayB",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjkW6L6Fi2RYRQtGGPZeDA_Qt0qADmENA6A&usqp=CAU"}
  // ]
    
  const movieList=[
    
    {
      name:"Avengers: Endgame",
      poster:"https://cellularnews.com/wp-content/uploads/2020/04/08-avengers-endgame-movie-poster-wallpaper-325x485.png",
      rating:"4.7",
      summary:"Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
    },
    
    {
      name:"Thor: Ragnarok",
      poster:"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      rating:"4.6",
      summary:"Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization."
    },
    {
      name:"Iron Man",
      poster:"https://images2.vudu.com/poster2/141479-338",
      rating:"4.7",
      summary:"A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism."
    },
    {
      name:"The Incredible Hulk",
      poster:"https://flxt.tmsimg.com/assets/p176337_p_v10_ag.jpg",
      rating:"4.1",
      summary:"Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth)."
    },
    {
      name:"Avatar",
      poster:"https://movieposters2.com/images/670910-b.jpg",
      rating:"4.5",
      summary:"On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world."
    },
    {
      name:"Spider-Man: Far from Home",
      poster:"https://i.redd.it/l8z673yg8em51.jpg",
      rating:"4.3",
      summary:"Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent."
    },
    {
      name:"King Kong",
      poster:"https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
      rating:"4.5",
      summary:"Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor."
    },
    {
      name:"Guardians of the Galaxy",
      poster:"https://popculturethoughts83.files.wordpress.com/2019/06/guardians-of-the-galaxy.jpg",
      rating:"4.7",
      summary:"Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe."
    }
    
    
  ]
  return (
     <div className="App">
       {/* <Msg name="Vinay" />
      <Msg name="Bannur" /> 

        {names.map(nm=><Msg name={nm.name} picture={nm.img}/>)} */}

      
      {movieList.map(list=>
         <Movie movieName={list.name} poster={list.poster} rating={list.rating} summary={list.summary}/>
        )}
    </div>

   
  );
}

// function Msg(props) {
//   return (
//     <div>
//       <h1>{props.name} Hello world!!</h1>
//     </div>
//   );
// }

// destucturing
function Movie ({ movieName,poster,rating,summary }) {
  return (
  
    <div className="container">
      <img className="pic" src={poster} alt={movieName}/>
      <h2 className="name">{movieName}</h2>
      <h3 className="rating">Rating: {rating}</h3>
      <p className="summary"><b>Summary: </b>{summary}</p>
    </div>
    
  );
}