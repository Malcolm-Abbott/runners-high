import { Button } from './Button';
import type { Run } from '../lib/fetch';

type Props = {
  userRuns: Run[];
};

export function RunList({ userRuns }: Props) {
  return (
    <ul>
      {userRuns.map((run) => (
        <Run run={run} key={run.runId} />
      ))}
    </ul>
  );
}

type RunProps = {
  run: Run;
};

function Run({ run }: RunProps) {
  const { distanceRan, runDuration, averageHeartRate, photoUrl, runDate } = run;

  return (
    <li className="container grid place-items-center gap-8 my-8 px-36 py-8">
      <div className="h-20 border-2 border-solid border-light-green rounded-lg w-96 px-2 grid content-center">
        <p className="font-bold underline px-4">Distance Ran</p>
        <p className="font-medium px-5">{distanceRan}</p>
      </div>
      <div className="h-20 border-2 border-solid border-light-green rounded-lg w-96 px-2 grid content-center">
        <p className="font-bold underline px-4">Run Duration</p>
        <p className="font-medium px-5">{runDuration}</p>
      </div>
      <div className="h-20 border-2 border-solid border-light-green rounded-lg w-96 px-2 grid content-center">
        <p className="font-bold underline px-4">Average Heart Rate</p>
        <p className="font-medium px-5">{averageHeartRate}</p>
      </div>
      <div className="h-20 border-2 border-solid border-light-green rounded-lg w-96 px-2 grid content-center">
        <p className="font-bold underline px-4">Date</p>
        <p className="font-medium px-5">{runDate}</p>
      </div>
      <span className="px-1 font-medium">Photo</span>
      <div className="border-2 border-solid border-light-green rounded-lg w-96">
        <img className="rounded-lg" src={photoUrl} />
      </div>
      <div className="w-96 flex justify-between">
        <Button text="Edit Run" />
        <Button text="Delete Run" />
      </div>
    </li>
  );
}
