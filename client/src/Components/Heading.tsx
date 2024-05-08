import { ReactElement } from 'react';

type Props = {
  title: string;
  icon?: ReactElement;
};

export function Heading({ title, icon }: Props) {
  return (
    <>
      <h1 className="text-center font-semibold text-2xl flex items-center mb-4">
        {title} {icon}
      </h1>
    </>
  );
}
