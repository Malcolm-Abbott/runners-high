import { TextInput } from '../Components/TextInput';
import { FormImage } from '../Components/FormImage';
import { Select } from '../Components/Select';
import { Button } from '../Components/Button';
import { DateInput } from '../Components/DateInput';
import { Heading } from '../Components/Heading';
import { beachUrl, trackUrl, trailUrl, treadmillUrl } from '../lib/locations';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { editRun, type Run } from '../lib/fetch';
import { useNavigate, useParams } from 'react-router-dom';
import { readToken } from '../lib/tokens';

export function EditRun() {
  const [url, setUrl] = useState('/public/placeholder-rh.jpg');
  const [isLoading, setIsLoading] = useState(true);
  const [run, setRun] = useState<Run>();
  const [durationMessage, setDurationMessage] = useState('');
  const [rateMessage, setRateMessage] = useState('');
  const navigate = useNavigate();
  const { runId } = useParams();

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);
        const req = {
          method: 'GET',
          headers: { Authorization: `Bearer ${readToken()}` },
        };
        const res = await fetch(`/api/runs/${runId}`, req);
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
        setUrl('/public/placeholder-rh.jpg');
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
      await editRun(runInfo, runId);
      navigate('/runs');
    } catch (err) {
      console.error(err);
    }
  }

  if (isLoading)
    return (
      <div className="grid place-items-center">
        <img src="/loading.svg" />
      </div>
    );

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
          onChange={handleDuration}
          message={durationMessage}
        />
        <TextInput
          label="Average Heart Rate"
          category="averageHeartRate"
          val={run?.averageHeartRate}
          onChange={handleHeartRate}
          message={rateMessage}
        />
        <FormImage imgUrl={url} />
        <Select onSelectChange={handleSelect} val={url} />
        <DateInput val={run?.runDate} />
        <Button text="Log Run" buttonType="submit" />
      </div>
    </form>
  );
}
