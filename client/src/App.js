import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Toolbox from './components/Toolbox';
import Projects from './components/Projects';
import { useRef, useState } from "react";
import Resume from './components/Resume';


function App() {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]
  const [showResume, setShowResume] = useState(false)

  const handleResumeRender = () => {
    if(showResume){
      setShowResume(false);
      document.getElementById("renderResume").innerHTML="Resume";
    }
    else {
      setShowResume(true);
      document.getElementById("renderResume").innerHTML="Scroll down!";
    }
  }

  return (
    <div data-theme='cupcake'>
      <NavBar sectionRefs={sectionRefs} />
      <Home sectionRef={sectionRefs[0]} onButtonClick={handleResumeRender} />
      { showResume ? <Resume onButtonClick={handleResumeRender} /> : null }
      <About sectionRef={sectionRefs[1]} contact={sectionRefs[4]} />
      <Toolbox sectionRef={sectionRefs[2]} />
      <Projects sectionRef={sectionRefs[3]} />
      <Contact contact={sectionRefs[4]} />
      <Footer />
    </div>
  );
}

export default App;
