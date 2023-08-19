import Overlay from './components/Overlay';
import ShopItemFunc from './components/ShopItemFunc';
import item from './item';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Overlay />
      <ShopItemFunc props={item} />
    </div>
  );
}

export default App;
