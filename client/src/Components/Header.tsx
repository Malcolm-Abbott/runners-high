import { Outlet } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <>
      <header className="h-16 grid place-items-center">
        <h1 className="satisfy-regular">Runners High</h1>
      </header>
      <Outlet />
    </>
  );
}
