import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Todo from './Webpage/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Todo/>} />
      <Route path="/todo" element={<Todo/>} />
    </Routes>
  );
}

export default App;
