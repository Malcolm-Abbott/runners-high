import { useState, useEffect } from 'react';
import { type Run } from '../lib/fetch';
import { Heading } from '../Components/Heading';
import { RunList } from '../Components/RunList';

export function Runs() {
  const [runs, setRuns] = useState<Run[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);
        const res = await fetch('/api/runs');
        if (!res.ok) throw new Error('Response connection not OK');
        const result = await res.json();
        setRuns(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  if (isLoading)
    return <div className="grid place-items-center">Loading...</div>;

  if (error) {
    console.error('Fetch error:', error);
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  return (
    <div className="container grid place-items-center my-8">
      <Heading title="Your Runs" />
      <RunList userRuns={runs} />
    </div>
  );
}
