import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Projects from './pages/projects';
import Home from './pages/home';
import MainLayout from './components/main-layout';
import Contact from './pages/contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
