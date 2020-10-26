import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList'
import Header from './Components/Header'
import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';
import {Route} from 'react-router-dom'
import Details from './Components/Details/Details';
import {Movies_Data} from './Movies_Data';
import Switch from 'react-bootstrap/esm/Switch';



function App() {

  const [films, setFilms] = useState(Movies_Data);
  
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
    <Switch style={{padding:'0px'}}>
    <Route exact  path={`/`}
            render={ () => <main >
              <Filter updateRating={onRatingChange} filterRating={rating} updatesearchValue={searchFunction}/>
               <AddMovie add={add}/>
               <MovieList Movies={films.filter(film=>film.title.toLowerCase().includes(search.toLowerCase().trim()) && film.rate>=rating )}/>
               </main> }/>
    <Route path={`/movies/:moviename`}
            render={ (props) => <Details films={films} {...props} />}/>
    </Switch>
    </div>
  );
}

export default App;
