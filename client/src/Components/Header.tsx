import { Outlet } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <>
      <h1>Hello</h1>
      <Outlet />
    </>
  );
}
