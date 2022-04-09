import './App.css';
import Header from './components/Header';

// Router stuff
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TablePage from './components/TablePage';
import ResultsPage from './components/ResultsPage';

// Context
import { GlobalProvider } from './context/store';

const App = () => {
  return (
    <Router>
      <Header />
      <div id='wrapper'>
        <GlobalProvider>
          <Routes>
            <Route path='/' element={<TablePage />} />
            <Route path='/results' element={<ResultsPage />} />
          </Routes>
        </GlobalProvider>
      </div>
    </Router>
  );
};

export default App;
