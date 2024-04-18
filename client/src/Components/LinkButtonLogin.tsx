import { Link } from 'react-router-dom';

type Props = {
  text: string;
};

export function LinkButtonLogin({ text }: Props) {
  return (
    <Link
      to={`/sign-up`}
      className="bg-light-green border-2 border-solid border-light-green rounded-lg h-12 w-40 shadow-md ring-2 ring-dark-green font-medium grid place-items-center">
      {text}
    </Link>
  );
}
