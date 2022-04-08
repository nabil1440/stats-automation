import './App.css';
import Header from './components/Header';

// Router stuff
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TablePage from './components/TablePage';
import ResultsPage from './components/ResultsPage';

// Router

const App = () => {
  return (
    <Router>
      <Header />
      <div id='wrapper'>
        <Routes>
          <Route path='/' element={<TablePage />} />
          <Route path='/results' element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
