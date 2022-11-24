import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import SongList from './components/Songs/SongList';
import Payments from './components/Payments/Payments';

function App() {
  return (
    <div className="App">
      <p>This is Greeting</p>
      <Greeting name="Selva" age="21"/>
      <Greeting name="Chandra" age = "21"/>
      <SongList />
      <Payments name="Payments" />
    </div>
  );
}

export default App;
