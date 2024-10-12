import './App.css';
import About from './components/about';
import BestProjects from './components/best-projects';
import Home from './components/home';
import NavigationBar from './components/navigation-bar';
import TopSkills from './components/top-skills';

function App() {
  return (
    <div className='wrapper'>
      <NavigationBar/>
      <Home/>
      <About/>
      <TopSkills/>
      <BestProjects/>
    </div>
  );
}

export default App;
