import { TextInput } from '../Components/TextInput';
import { FormImage } from '../Components/FormImage';
import { Select } from '../Components/Select';
import { Button } from '../Components/Button';
import { DateInput } from '../Components/DateInput';
import { beachUrl, trackUrl, trailUrl, treadmillUrl } from '../lib/locations';
import { useState } from 'react';
import { FormEvent } from 'react';

export function AddRun() {
  const [url, setUrl] = useState('/public/placeholderRH.jpg');

  function handleSelect(e: FormEvent<HTMLSelectElement>) {
    const { value } = e.target as HTMLSelectElement;
    switch (value) {
      case 'seaside':
        setUrl(beachUrl());
        break;
      case 'trail':
        setUrl(trailUrl());
        break;
      case 'track':
        setUrl(trackUrl());
        break;
      case 'treadmill':
        setUrl(treadmillUrl());
        break;
      default:
        setUrl('/public/placeholderRH.jpg');
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { currentTarget } = e;
    const formData = new FormData(currentTarget);
    console.log(Object.fromEntries(formData));

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container grid place-items-center gap-8 my-8">
        <h1 className="text-center font-semibold text-2xl">New Run</h1>
        <TextInput label="Distance Ran" category="distanceRan" />
        <TextInput label="Run Duration" category="runDuration" />
        <TextInput label="Average Heart Rate" category="averageHeartRate" />
        <FormImage imgUrl={url} />
        <Select onSelectChange={handleSelect}/>
        <DateInput />
        <Button text="Log Run" />
      </div>
    </form>
  );
}
