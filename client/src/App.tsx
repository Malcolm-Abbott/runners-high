import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { AddRun } from './Pages/AddRun';
import { Runs } from './Pages/Runs';
import { EditRun } from './Pages/EditRun';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { User, UserProvider } from './Components/UserContext';
import { useState, useEffect } from 'react';
import { readToken, readUser, saveToken, saveUser } from './lib/tokens';

export default function App() {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();

  useEffect(() => {
    try {
      if (readUser() && readToken()) {
        setUser(readUser());
        setToken(readToken());
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  function handleSignIn(user: User, token: string) {
    setUser(user);
    setToken(token);
    saveUser(user);
    saveToken(token);
  }

  function handleSignOut() {
    setUser(undefined);
    setToken(undefined);
    saveUser(undefined);
    saveToken(undefined);
  }

  const contextValue = { user, token, handleSignIn, handleSignOut };

  return (
    <>
      <UserProvider value={contextValue}>
        <Routes>
          <Route path="/" element={<Header />}>
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
