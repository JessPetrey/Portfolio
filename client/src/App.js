import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Toolbox from './components/Toolbox';
import Work from './components/Work';


function App() {

  return (
    <div data-theme='bumblebee'>
      <NavBar />
      <Home />
      <About />
      <Toolbox />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
