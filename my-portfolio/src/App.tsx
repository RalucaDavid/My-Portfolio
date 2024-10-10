import './App.css';
import About from './components/about';
import Home from './components/home';
import NavigationBar from './components/navigation-bar';
import TopSkills from './components/top-skills';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Home/>
      <About/>
      <TopSkills/>
    </div>
  );
}

export default App;
