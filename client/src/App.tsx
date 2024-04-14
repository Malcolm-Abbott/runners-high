import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </>
  );
}
