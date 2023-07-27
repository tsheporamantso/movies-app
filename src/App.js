import './App.css';
import SearchBar from './components/SearchBar';
import MoviesCards from './components/MoviesCards';
import PersonComponent from './components/PersonComponent';

const App = () => {
 
  return (
    <div className="App">
      <SearchBar />
      <MoviesCards />
      <PersonComponent />
    </div>
  );
}

export default App;
