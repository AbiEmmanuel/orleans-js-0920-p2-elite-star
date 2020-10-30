import './App.css';
import Header from './components/Header/Header';
import Home from "./components/Pages/Home/Home";
import Models from "./components/Pages/Models/Models";
import About from "./components/Pages/About/About";
import Logo from "./components/Header/Logo/Logo";
import Articles from './components/Articles/Articles';
// import Favorites from "./components/Header/Favorites/Favorites";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (      
    <div className="App">
      <Header />
      <Articles />
      <Switch>
          <Route path="/logo" component={Logo} /> 
          <Route exact path="/" component={Home} />
          <Route path="/models" component={Models} />
          <Route path="/about" component={About} />
          
          {/* <Route path="/favorites" component={Favorites} /> */}
        </Switch> 
    </div>
  );
}


export default App;
