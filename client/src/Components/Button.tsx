type Props = {
  text: string;
};

export function Button({ text }: Props) {
  return (
    <div className="my-1">
      <button
        type="submit"
        className="bg-light-green border-2 border-solid border-light-green rounded-lg h-12 w-40 shadow-md ring-2 ring-dark-green font-medium">
        {text}
      </button>
    </div>
  );
}
