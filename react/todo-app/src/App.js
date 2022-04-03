import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div className="App">
      <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="todo" element={<TodoPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
