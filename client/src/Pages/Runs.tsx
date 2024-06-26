import { useState, useEffect } from 'react';
import { type Run } from '../lib/fetch';
import { Heading } from '../Components/Heading';
import { RunList } from '../Components/RunList';
import { readToken } from '../lib/tokens';
import { useNavigate } from 'react-router-dom';
import { BiPlusCircle } from 'react-icons/bi';

export function Runs() {
  const [runs, setRuns] = useState<Run[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);
        const req = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${readToken()}`,
          },
        };
        const res = await fetch('/api/runs', req);
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
    return (
      <div className="grid place-items-center">
        <img src="/loading.svg" />
      </div>
    );

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
      <Heading
        title="Your Runs"
        icon={
          <BiPlusCircle
            className="inline cursor-pointer ml-1"
            onClick={() => navigate('/add')}
          />
        }
      />
      <RunList userRuns={runs} updateRuns={setRuns} />
    </div>
  );
}
