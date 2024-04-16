type Props = {
  title: string;
};

export function Heading({ title }: Props) {
  return <h1 className="text-center font-semibold text-2xl">{title}</h1>;
}
