import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { AddRun } from './Pages/AddRun';
import { Runs } from './Pages/Runs';
import { EditRun } from './Pages/EditRun';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { User, UserProvider } from './Components/UserContext';
import { useState } from 'react';
import { saveToken } from './lib/tokens';
import { HeaderUser } from './Components/HeaderUser';

export default function App() {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();

  function handleSignIn(user: User, token: string) {
    setUser(user);
    setToken(token);
    saveToken(token);
  }

  function handleSignOut() {
    setUser(undefined);
    setToken(undefined);
    saveToken(undefined);
  }

  const contextValue = { user, token, handleSignIn, handleSignOut };

  return (
    <>
      <UserProvider value={contextValue}>
        <Routes>
          <Route path="/" element={user ? <HeaderUser /> : <Header />}>
            <Route index element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="add" element={<AddRun />} />
            <Route path="runs" element={<Runs />} />
            <Route path="edit/:runId" element={<EditRun />} />
          </Route>
        </Routes>
      </UserProvider>
    </>
  );
}
