
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import Confetti from 'react-confetti'


function App() {

  const selectedAll = useSelector(state => state.cards.selectedAll)
  return (
    <div className="App">
       {
        selectedAll === 15 && <Confetti
          marginTop='200px'
          width='1000px'
          height='1000px'
        />
      }
      <Header />
      <Cards />
      
    </div>
  );
}

export default App;
