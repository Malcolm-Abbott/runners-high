type Props = {
  url: string;
};

export function LoginImage({ url }: Props) {
  return (
    <label>
      <div className="my-1">
        <img
          src={url}
          className="border-2 border-solid border-light-green rounded-lg w-96"
        />
      </div>
    </label>
  );
}
