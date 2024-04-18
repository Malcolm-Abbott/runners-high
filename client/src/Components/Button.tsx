type Props = {
  text: string;
  onDeleteClick?: () => void;
  idRun?: number | undefined;
};

export function Button({ text, onDeleteClick }: Props) {
  return (
    <button
      onClick={onDeleteClick}
      type="submit"
      className="bg-light-green border-2 border-solid border-light-green rounded-lg h-12 w-40 shadow-md ring-2 ring-dark-green font-medium">
      {text}
    </button>
  );
}
