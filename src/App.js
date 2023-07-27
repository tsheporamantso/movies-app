import './App.css';
import SearchBar from './components/SearchBar';
import MoviesCards from './components/MoviesCards';
import PersonComponent from './components/PersonComponent';
import Counter from './components/Counter';

const App = () => {
 
  return (
    <div className="App">
      <SearchBar />
      <MoviesCards />
      <PersonComponent />
      <Counter />
    </div>
  );
}

export default App;
