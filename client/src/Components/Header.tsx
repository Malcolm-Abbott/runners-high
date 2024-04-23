import { Outlet } from 'react-router-dom';
import { useUser } from '../lib/useUser';
import { Link } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';
import './Header.css';

export function Header() {
  const { user, token, handleSignOut } = useUser();

  if (user || token)
    return (
      <>
        <header className="h-16 flex items-center shadow-md mb-12 w-full">
          <div className="basis-1/3"></div>
          <h1 className="satisfy-regular text-xl basis-1/3 text-center">
            Runners High
          </h1>
          <div className="basis-1/3 grid justify-items-end">
            <Link
              to="/"
              onClick={handleSignOut}
              className="mx-10 flex items-center bg-white border-2 border-solid border-white rounded-lg shadow-xl ring-2 ring-dark-green p-1 text-darker-green font-bold">
              <BiExit className="inline mr-2" />
              Logout
            </Link>
          </div>
        </header>
        <Outlet />
      </>
    );

  return (
    <>
      <header className="h-16 grid place-items-center shadow-md mb-12 w-full">
        <h1 className="satisfy-regular text-xl">Runners High</h1>
      </header>
      <Outlet />
    </>
  );
}
