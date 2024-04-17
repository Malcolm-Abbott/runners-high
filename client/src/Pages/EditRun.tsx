import { TextInput } from '../Components/TextInput';
import { FormImage } from '../Components/FormImage';
import { Select } from '../Components/Select';
import { Button } from '../Components/Button';
import { DateInput } from '../Components/DateInput';
import { Heading } from '../Components/Heading';
import { beachUrl, trackUrl, trailUrl, treadmillUrl } from '../lib/locations';
import { useState, useEffect, FormEvent } from 'react';
import { addRun } from '../lib/fetch';
import { type Run } from '../lib/fetch';
import { useNavigate, useParams } from 'react-router-dom';

export function EditRun() {
  const [url, setUrl] = useState('/public/placeholderRH.jpg');
  const [isLoading, setIsLoading] = useState(true);
  const [run, setRun] = useState<Run>();
  const navigate = useNavigate();
  const { runId } = useParams();

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/runs/${runId}`);
        if (!res.ok) throw new Error('Response connection not OK');
        const result = await res.json();
        setRun(result);
        setUrl(result.photoUrl);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

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

  if (isLoading)
    return <div className="grid place-items-center">Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="container grid place-items-center gap-8 my-8">
        <Heading title="Edit Run" />
        <TextInput
          label="Distance Ran"
          category="distanceRan"
          val={run?.distanceRan}
        />
        <TextInput
          label="Run Duration"
          category="runDuration"
          val={run?.runDuration}
        />
        <TextInput
          label="Average Heart Rate"
          category="averageHeartRate"
          val={run?.averageHeartRate}
        />
        <FormImage imgUrl={url} />
        <Select onSelectChange={handleSelect} />
        <DateInput />
        <Button text="Log Run" />
      </div>
    </form>
  );
}
