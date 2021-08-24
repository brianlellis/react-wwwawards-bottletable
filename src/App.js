import './App.css';
import Header                                   from './js/layout/Header';
import { PinkZigZag, OrangeZigZag, BlueZigZag } from './js/components/general/ZigZags';

function App() {
  return (
    <div className="App">
      <PinkZigZag />
      <OrangeZigZag />
      <BlueZigZag />
      <Header />
    </div>
  );
}

export default App;
