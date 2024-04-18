import { Heading } from '../Components/Heading';
import { LoginImage } from '../Components/LoginImage';
import { PasswordInput } from '../Components/PasswordInput';
import { TextInput } from '../Components/TextInput';
import { Button } from '../Components/Button';

export function SignUp() {
  return (
    <form>
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
