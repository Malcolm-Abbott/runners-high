import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../Components/Heading';
import { LoginImage } from '../Components/LoginImage';
import { PasswordInput } from '../Components/PasswordInput';
import { TextInput } from '../Components/TextInput';
import { Button } from '../Components/Button';

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData);
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/sign-up', req);
      if (!res.ok) throw new Error(`fetch error ${res.status}`);
      const user = await res.json();
      alert(
        `Successfully registered ${user.username} as a new Runners High member!`
      );
      navigate('/');
    } catch (err) {
      alert(`Error registering user: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="container grid place-items-center gap-8 my-8">
        <Heading title="Sign Up" />
        <TextInput label="Username" category="username" />
        <PasswordInput />
        <span className="text-center font-semibold">
          Become A Runners High Member Today!
        </span>
        <LoginImage url="/runners-high-create.jpg" />
        <Button text="Submit" buttonType="submit" />
      </div>
    </form>
  );
}
