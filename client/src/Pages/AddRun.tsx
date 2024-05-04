import { TextInput } from '../Components/TextInput';
import { FormImage } from '../Components/FormImage';
import { Select } from '../Components/Select';
import { Button } from '../Components/Button';
import { DateInput } from '../Components/DateInput';
import { Heading } from '../Components/Heading';
import { beachUrl, trackUrl, trailUrl, treadmillUrl } from '../lib/locations';
import { useState, FormEvent, ChangeEvent } from 'react';
import { addRun, type Run } from '../lib/fetch';
import { useNavigate } from 'react-router-dom';

export function AddRun() {
  const [url, setUrl] = useState('/placeholder-rh.jpg');
  const [durationMessage, setDurationMessage] = useState('');
  const [rateMessage, setRateMessage] = useState('');
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
        setUrl('/placeholder-rh.jpg');
    }
  }

  function handleDuration(event: ChangeEvent<HTMLInputElement>): void {
    if (!Number.isInteger(+event.target.value))
      setDurationMessage('Run Duration only accepts numeric value');
    if (Number.isInteger(+event.target.value)) setDurationMessage('');
  }

  function handleHeartRate(event: ChangeEvent<HTMLInputElement>): void {
    if (!Number.isInteger(+event.target.value))
      setRateMessage('Average Heart Rate only accepts numeric values');
    if (Number.isInteger(+event.target.value)) setRateMessage('');
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      if (durationMessage || rateMessage) {
        alert(
          'Run Duration and Average Heart Rate must be numeric values only'
        );
        return;
      }
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
        <TextInput
          label="Run Duration (Minutes)"
          category="runDuration"
          placeholder="Ex.) 67"
          onChange={handleDuration}
          message={durationMessage}
        />
        <TextInput
          label="Average Heart Rate"
          category="averageHeartRate"
          onChange={handleHeartRate}
          message={rateMessage}
        />
        <FormImage imgUrl={url} />
        <Select onSelectChange={handleSelect} />
        <DateInput />
        <Button text="Log Run" buttonType="submit" />
      </div>
    </form>
  );
}
