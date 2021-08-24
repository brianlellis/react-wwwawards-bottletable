import './App.css';
import Header                                   from './js/layout/Header';
import { PinkZigZag, OrangeZigZag, BlueZigZag } from './js/components/general/ZigZags';
import BuyButton                                from './js/components/general/BuyButton';

function App() {
  return (
    <div className="App">
      <PinkZigZag />
      <OrangeZigZag />
      <BlueZigZag />
      <Header />
      <BuyButton />
    </div>
  );
}

export default App;
