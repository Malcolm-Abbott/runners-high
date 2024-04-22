import { TextInput } from '../Components/TextInput';
import { FormImage } from '../Components/FormImage';
import { Select } from '../Components/Select';
import { Button } from '../Components/Button';
import { DateInput } from '../Components/DateInput';
import { Heading } from '../Components/Heading';
import { beachUrl, trackUrl, trailUrl, treadmillUrl } from '../lib/locations';
import { useState, FormEvent } from 'react';
import { addRun } from '../lib/fetch';
import { type Run } from '../lib/fetch';
import { useNavigate } from 'react-router-dom';

export function AddRun() {
  const [url, setUrl] = useState('/placeholderRH.jpg');
  const navigate = useNavigate();

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
        setUrl('/placeholderRH.jpg');
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const { currentTarget } = e;
      const formData = new FormData(currentTarget);
      const { distanceRan, runDuration, averageHeartRate, runDate } =
        Object.fromEntries(formData);
      const runInfo: Run = {
        distanceRan: String(distanceRan),
        runDuration: +runDuration,
        averageHeartRate: +averageHeartRate,
        photoUrl: url,
        runDate: String(runDate),
      };
      await addRun(runInfo);
      navigate('/runs');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container grid place-items-center gap-8 my-8">
        <Heading title="New Run" />
        <TextInput label="Distance Ran" category="distanceRan" />
        <TextInput label="Run Duration" category="runDuration" />
        <TextInput label="Average Heart Rate" category="averageHeartRate" />
        <FormImage imgUrl={url} />
        <Select onSelectChange={handleSelect} />
        <DateInput />
        <Button text="Log Run" buttonType="submit" />
      </div>
    </form>
  );
}
