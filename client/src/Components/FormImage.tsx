type Props = {
  imgUrl: string | undefined;
  // val?: string | undefined;
};

export function FormImage({ imgUrl }: Props) {
  return (
    <label>
      <span className="px-1 font-medium">Photo</span>
      <div className="my-1">
        <img
          src={imgUrl}
          className="border-2 border-solid border-light-green rounded-lg w-96"
        />
      </div>
    </label>
  );
}
