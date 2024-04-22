import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUser } from '../lib/useUser';
import { LuArrowRightToLine } from 'react-icons/lu';
import './Header.css';

export function HeaderUser() {
  const { handleSignOut } = useUser();

  return (
    <>
      <header className="h-16 flex items-center shadow-md">
        <div className="basis-1/3"></div>
        <h1 className="satisfy-regular text-xl basis-1/3 text-center">
          Runners High
        </h1>
        <div className="basis-1/3 grid justify-items-end">
          <Link to="/" onClick={handleSignOut} className="mx-10">
            <LuArrowRightToLine className="inline mx-2" />
            Logout
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
}
