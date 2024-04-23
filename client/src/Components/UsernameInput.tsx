type Props = {
  onClick: () => void;
};

export function UsernameInput({ onClick }: Props) {
  return (
    <label>
      <div className="flex justify-between">
        <span className="px-1 font-medium">Username</span>
        <span className="px-1 font-medium cursor-pointer" onClick={onClick}>
          Continue As Guest
        </span>
      </div>
      <div className="my-1">
        <input
          type="text"
          name="username"
          className="h-12 border-2 border-solid border-light-green rounded-lg w-96 px-2"
        />
      </div>
    </label>
  );
}
