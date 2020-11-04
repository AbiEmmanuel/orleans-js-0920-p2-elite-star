import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from "./components/Pages/Home/Home";
import Models from "./components/Pages/Models/Models";
import About from "./components/Pages/About/About";
import Results from './components/Pages/Results/Results';
import Footer from "./components/Footer/Footer";
import { Switch, Route } from 'react-router-dom';
import FavouritesPage from "./components/Pages/Favourites/FavouritesPage";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  
  fetchApiAll(){
    fetch("https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json")
    .then(res => res.json())
    .then((data) => localStorage.setItem('characters', JSON.stringify(data)))
  }
  componentDidMount(){
    this.fetchApiAll();
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/models" component={Models} />
          <Route path="/about" component={About} />
          <Route path="/results" component={Results} />
          <Route path="/my-list" component={FavouritesPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
