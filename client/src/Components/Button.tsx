type Props = {
  text: string;
  buttonType: 'submit' | 'reset' | 'button';
  onDeleteClick?: () => void;
  idRun?: number | undefined;
};

export function Button({ text, onDeleteClick, buttonType }: Props) {
  return (
    <button
      onClick={onDeleteClick}
      type={buttonType}
      className="bg-light-green border-2 border-solid border-light-green rounded-lg h-12 w-40 shadow-xl ring-2 ring-dark-green font-medium">
      {text}
    </button>
  );
}
