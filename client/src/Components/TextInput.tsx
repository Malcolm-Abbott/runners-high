type Props = {
  label: string;
  category: string;
};

export function TextInput({ label, category }: Props) {
  return (
    <label>
      <span className="px-1 font-medium">{label}</span>
      <div className="my-1">
        <input
          type="text"
          name={category}
          className="h-12 border-2 border-solid border-light-green rounded-lg w-96 px-2"></input>
      </div>
    </label>
  );
}
