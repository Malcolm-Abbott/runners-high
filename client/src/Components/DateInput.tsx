type Props = {
  val?: string;
};

export function DateInput({ val }: Props) {
  return (
    <label>
      <span className="px-1 font-medium">Date</span>
      <div className="my-1">
        <input
          type="date"
          name="runDate"
          className="h-12 border-2 border-solid border-light-green rounded-lg w-96 px-2"
          defaultValue={val}
        />
      </div>
    </label>
  );
}
