import { UsernameInput } from '../Components/UsernameInput';
import { PasswordInput } from '../Components/PasswordInput';
import { LoginImage } from '../Components/LoginImage';
import { Button } from '../Components/Button';
import { LinkButtonLogin } from '../Components/LinkButtonLogin';
import { useUser } from '../lib/useUser';
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';

export function Login() {
  const { handleSignIn } = useUser();
  const navigate = useNavigate();

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData);
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/login', req);
      if (!res.ok) throw new Error(`fetch Error: ${res.status}`);
      const { user, token } = await res.json();
      handleSignIn(user, token);
      navigate('/runs');
    } catch (err) {
      alert(`Error signing in: ${err}`);
    }
  }

  async function guestLogin() {
    try {
      const userData = { username: 'guest', password: 'Guest1*Password2*' };
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/login', req);
      if (!res.ok) throw new Error(`fetch Error: ${res.status}`);
      const { user, token } = await res.json();
      handleSignIn(user, token);
      navigate('/runs');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="container grid place-items-center gap-8 my-8">
        <UsernameInput onClick={guestLogin} />
        <PasswordInput />
        <h1 className="text-lg font-semibold">Not a member? Sign up!</h1>
        <div className="w-96 flex justify-between">
          <Button text="Login" buttonType="submit" />
          <LinkButtonLogin text="Create Account" />
        </div>
        <LoginImage url="/runners-high-bg.jpg" />
      </div>
    </form>
  );
}
