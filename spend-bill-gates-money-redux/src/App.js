import './App.css';

import Header from "./components/Header"
import Balance from "./components/Balance"
import ProductContainer from './components/Product/ProductContainer';


function App() {

  return (
    <div className="App">
      <div className='content'>
        <Header />
        <Balance />
        <ProductContainer />

       
      </div>
    </div>
  );
}

export default App;
