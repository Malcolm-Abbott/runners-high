type Props = {
  label: string;
};

export function TextInput({ label }: Props) {
  return (
    <label>
      <span className="px-1 font-medium">{label}</span>
      <div className="my-1">
        <input
          type="text"
          name="distance-ran"
          className="h-12 border-2 border-solid border-light-green rounded-lg w-96"></input>
      </div>
    </label>
  );
}
