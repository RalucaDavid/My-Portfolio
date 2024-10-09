import './App.css';
import About from './components/about';
import Home from './components/home';
import NavigationBar from './components/navigation-bar';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
