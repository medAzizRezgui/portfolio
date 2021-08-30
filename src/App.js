import './App.css';
import Home from './components/Home/Home'
import NavigationBar from './components/NavigationBar/NavigationBar'
import SocialBar from './components/SocialsBar/SocialBar';
import EmailBar from './components/EmailBar/EmailBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <SocialBar />
      <EmailBar />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
