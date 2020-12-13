import './App.css';
import Navbar from './Components/Navbar';
import Routes from './Routes/Routes';
import Header from './Components/Header'
function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Navbar />
        <Routes />
      </div>
    </div>
  );
}

export default App;
//api key eb87d2aa03a935d5b0751e26a3b71771
