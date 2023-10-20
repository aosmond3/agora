import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage/Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route index element={<Login />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
