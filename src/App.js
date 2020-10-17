import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList'
import Header from './Components/Header'
import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';




function App() {

  const [films, setFilms] = useState([{title:"The invisible guest",description:"A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense.",Src:"/invisible_guest.jpg",rate:4},
  {title:"Fury",description:"A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",Src:"/fury.jpg",rate:3},
  {title:"Imitation game",description:"During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.",Src:"/imitation_game.jpg",rate:5},
  {title:"The mask",description:"Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.",Src:"/the_mask.jpg",rate:2},
  {title:"Kingdom of heaven",description:"Balian of Ibelin travels to Jerusalem during the Crusades of the 12th century, and there he finds himself as the defender of the city and its people.",Src:"/kingdom_heaven.jpg",rate:5},
  {title:"The dark knight",description:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests of his ability to fight injustice.",Src:"/dark_knight.jpg",rate:4},
  {title:"Annabelle",description:"A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists.",Src:"/annabelle.jpg",rate:1},
  {title:"Taken",description:"A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.",Src:"/taken.jpg",rate:4},
  {title:"Taken 2",description:"In Istanbul, retired CIA operative Bryan Mills and his wife are taken hostage by the father of a kidnapper Mills killed while rescuing his daughter.",Src:"/taken_2.jpg",rate:4},
  {title:"John Wick",description:"An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",Src:"/john wick.jpg",rate:4},
  {title:"John Wick 2",description:"After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.",Src:"/john_wick 2.jpeg",rate:3},
  {title:"The transportor",description:"Frank Martin, who transports packages for unknown clients, is asked to move a package that soon begins moving, and complications arise.",Src:"/transportor.jpg",rate:4}]);
  
  const [search, setSearch] = useState('');
  const [rating, setRating] = React.useState(0);

  const onRatingChange = score => {
    setRating(score);
  };

  const searchFunction=(e)=>{
    setSearch(e.target.value)
  }
  
  const add=(x)=>{
    setFilms([...films,x])
    }
   
 
  return (
    <div className="App"> 
    <Header/> 
    <main >
   <Filter updateRating={onRatingChange} filterRating={rating} updatesearchValue={searchFunction}/>
    <AddMovie add={add}/>
    <MovieList Movies={films.filter(film=>film.title.toLowerCase().includes(search.toLowerCase().trim()) && film.rate>=rating )}/>
    </main>
    </div>
  );
}

export default App;
