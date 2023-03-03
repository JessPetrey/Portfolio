import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App(props) {
  return (
    <div data-theme='garden'>
      <NavBar />
      <Home Home={<Home/>}/>
      <About />

      <Footer />
    </div>
  );
}

export default App;
