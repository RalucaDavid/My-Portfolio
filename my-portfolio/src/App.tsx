import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about';
import BestProjects from './components/best-projects';
import Home from './components/home';
import TopSkills from './components/top-skills';
import MainLayout from './components/main-layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="top-skills" element={<TopSkills />} />
        <Route path="projects" element={<BestProjects />} />
      </Route>
    </Routes>
  );
}

export default App;
