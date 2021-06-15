
import './App.css';
import ItemCount from 'ItemCount';

function App() {
  return (
    <div class="App">
        <ItemCount initial={1} stock={5} onAdd={() => console.log('agregado')}/>
    </div>
  );
}

export default App;
