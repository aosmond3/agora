import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import Home  from './pages/HomePage/Home';
import { HOME_PATH } from './constants';


function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route index element={<Login />} />
            <Route path={HOME_PATH} element={<Home />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
