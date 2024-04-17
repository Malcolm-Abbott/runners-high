import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { AddRun } from './Pages/AddRun';
import { Runs } from './Pages/Runs';
import { EditRun } from './Pages/EditRun';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="add" element={<AddRun />} />
          <Route path="runs" element={<Runs />} />
          <Route path="edit/:runId" element={<EditRun />} />
        </Route>
      </Routes>
    </>
  );
}
