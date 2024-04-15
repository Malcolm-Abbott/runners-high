import { Label } from '../Components/Label';
import { FormImage } from '../Components/FormImage';

export function AddRun() {
  return (
    <form>
      <div className="container grid place-items-center gap-8 my-8">
        <h1 className="text-center font-semibold text-2xl">New Run</h1>
        <Label label="Distance Ran" />
        <Label label="Run Duration" />
        <Label label="Average Heart Rate" />
        <FormImage imgUrl="/public/placeholderRH.jpg" />
        <Label label="Date" />
      </div>
    </form>
  );
}
