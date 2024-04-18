import { UsernameInput } from '../Components/UsernameInput';
import { PasswordInput } from '../Components/PasswordInput';
import { LoginImage } from '../Components/LoginImage';
import { Button } from '../Components/Button';

export function Login() {
  return (
    <div className="container grid place-items-center gap-8 my-8">
      <UsernameInput label="Login" />
      <PasswordInput />
      <h1 className="text-lg font-semibold">Not a member? Sign up!</h1>
      <Button text="Create Account" />
      <LoginImage />
    </div>
  );
}
