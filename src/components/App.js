import '../css/App.css';
import CarWidget from './CartWidget';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div>
      <div className="navbar">
        <p>El Brebaje Magico🍷</p>
        <Navbar />
        <CarWidget />
      </div>
      <article>
        <ItemListContainer />
      </article>
    </div>
  );
}

export default App;
