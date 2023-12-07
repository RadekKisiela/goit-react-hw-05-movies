import './styles.js';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import { Container, Nav } from './styles.js';

function App() {
  return (
    <div>
      <Container>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
