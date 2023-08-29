import logo from './logo.svg';
import './App.css';
import DashBoard from './DashBoard/DashBoard';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <DashBoard></DashBoard>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
