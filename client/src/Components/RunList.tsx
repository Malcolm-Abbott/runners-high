import { Button } from './Button';
import type { Run } from '../lib/fetch';
import { dateToString, minutesToHours } from '../lib/conversions';
import { LinkButton } from './LinkButton';
import { Modal } from './Modal';
import { useState } from 'react';

type Props = {
  userRuns: Run[];
  updateRuns: (arg1: Run[]) => void;
};

export function RunList({ userRuns, updateRuns }: Props) {
  const [isActive, setIsActive] = useState(false);
  console.log('isActive:', isActive);
  return (
    <>
      <ul className="grid gap-8">
        {userRuns.map((run) => (
          <Run run={run} key={run.runId} setActive={setIsActive} />
        ))}
      </ul>
      <Modal
        isOpen={isActive}
        onClose={() => setIsActive(false)}
        updateRuns={updateRuns}
      />
    </>
  );
}

type RunProps = {
  run: Run;
  setActive: (arg1: boolean) => void;
};

function Run({ run, setActive }: RunProps) {
  const {
    distanceRan,
    runDuration,
    averageHeartRate,
    photoUrl,
    runDate,
    runId,
  } = run;

  function deleteHandler() {
    setActive(true);
    try {
      setActive(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <li className="container grid place-items-center gap-8 my-8 px-36 py-8 shadow-lg rounded-lg">
      <h1 className="text-center font-semibold text-2xl">
        {dateToString(runDate)}
      </h1>
      <div className="h-20 border-2 border-solid border-light-green rounded-lg w-96 px-2 grid content-center">
        <p className="font-bold underline px-4">Distance Ran</p>
        <p className="font-medium px-5">{distanceRan}</p>
      </div>
      <div className="h-20 border-2 border-solid border-light-green rounded-lg w-96 px-2 grid content-center">
        <p className="font-bold underline px-4">Run Duration</p>
        <p className="font-medium px-5">{minutesToHours(runDuration)}</p>
      </div>
      <div className="h-20 border-2 border-solid border-light-green rounded-lg w-96 px-2 grid content-center">
        <p className="font-bold underline px-4">Average Heart Rate</p>
        <p className="font-medium px-5">{averageHeartRate}</p>
      </div>
      <div>
        <span className="px-2 font-bold">Photo</span>
        <div className="border-2 border-solid border-light-green rounded-lg w-96">
          <img className="rounded-md" src={photoUrl} />
        </div>
      </div>
      <div className="w-96 flex justify-between">
        <LinkButton text="Edit Run" idRun={runId} />
        <Button text="Delete Run" onDeleteClick={deleteHandler} />
      </div>
    </li>
  );
}
