import './App.css';
import SearchBar from './components/SearchBar';
import MoviesCards from './components/MoviesCards';

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <MoviesCards />
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
