import { UsernameInput } from '../Components/UsernameInput';
import { PasswordInput } from '../Components/PasswordInput';
import { LoginImage } from '../Components/LoginImage';
import { Button } from '../Components/Button';
import { LinkButtonLogin } from '../Components/LinkButtonLogin';

export function Login() {
  return (
    <form>
      <div className="container grid place-items-center gap-8 my-8">
        <UsernameInput />
        <PasswordInput />
        <h1 className="text-lg font-semibold">Not a member? Sign up!</h1>
        <div className="w-96 flex justify-between">
          <Button text="Login" buttonType="submit" />
          <LinkButtonLogin text="Create Account" />
        </div>
        <LoginImage />
      </div>
    </form>
  );
}
