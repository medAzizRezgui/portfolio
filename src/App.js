import './App.css';
import Home from './components/Home/Home'
import NavigationBar from './components/NavigationBar/NavigationBar'
import SocialBar from './components/SocialsBar/SocialBar';
import EmailBar from './components/EmailBar/EmailBar';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <SocialBar />
      <EmailBar />
      <About />
    </div>
  );
}

export default App;
