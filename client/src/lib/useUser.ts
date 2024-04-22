import { useContext } from 'react';
import { AppContext, AppContextValues } from '../Components/UserContext';

export function useUser(): AppContextValues {
  const values = useContext(AppContext);
  if (!values) throw new Error('useUser must be used inside a UserProvider');
  return values;
}
