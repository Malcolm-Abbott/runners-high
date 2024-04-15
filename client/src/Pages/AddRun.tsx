import { TextInput } from '../Components/TextInput';
import { FormImage } from '../Components/FormImage';
import { Select } from '../Components/Select';
import { Button } from '../Components/Button';
import { DateInput } from '../Components/DateInput';

export function AddRun() {
  return (
    <form>
      <div className="container grid place-items-center gap-8 my-8">
        <h1 className="text-center font-semibold text-2xl">New Run</h1>
        <TextInput label="Distance Ran" />
        <TextInput label="Run Duration" />
        <TextInput label="Average Heart Rate" />
        <FormImage imgUrl="/public/placeholderRH.jpg" />
        <Select />
        <DateInput />
        <Button text="Log Run" />
      </div>
    </form>
  );
}
