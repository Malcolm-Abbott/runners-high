import { ChangeEvent } from 'react';

type Props = {
  label: string;
  category: string;
  val?: string | number | undefined;
  placeholder?: string | undefined;
  onChange?: (arg1: ChangeEvent<HTMLInputElement>) => void;
  message?: string;
};

export function TextInput({
  label,
  category,
  val,
  placeholder,
  onChange,
  message,
}: Props) {
  return (
    <label>
      <span className="px-1 font-medium">{label}</span>
      <div className="my-1">
        <input
          type="text"
          name={category}
          className="h-12 border-2 border-solid border-light-green rounded-lg w-96 px-2 placeholder-dark-green"
          defaultValue={val}
          placeholder={placeholder}
          onChange={onChange}
        />
        <p className="text-red">{message}</p>
      </div>
    </label>
  );
}
