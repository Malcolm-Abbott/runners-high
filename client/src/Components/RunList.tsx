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
  const [id, setId] = useState(0);

  if (userRuns.length < 1)
    return (
      <div className="my-8">
        <div className="font-semibold">You currently have no logged runs</div>
      </div>
    );

  return (
    <>
      <ul
        className={
          userRuns.length > 1 ? 'grid gap-8 2xl:grid-cols-2' : 'grid gap-8'
        }>
        {userRuns.map((run) => (
          <Run
            run={run}
            key={run.runId}
            setActive={setIsActive}
            setRunId={setId}
            idRun={run.runId}
          />
        ))}
      </ul>
      <Modal
        isOpen={isActive}
        onClose={() => setIsActive(false)}
        userRuns={userRuns}
        updateRuns={updateRuns}
        idRun={id}
      />
    </>
  );
}

type RunProps = {
  run: Run;
  setActive: (arg1: boolean) => void;
  setRunId: (arg1: any) => void;
  idRun: number | undefined;
};

function Run({ run, setActive, setRunId, idRun }: RunProps) {
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
    setRunId(idRun);
  }

  return (
    <li className="container grid place-items-center gap-8 my-8 py-8 px-4 shadow-lg rounded-lg sm:px-36">
      <h1 className="text-center font-semibold text-2xl">
        {dateToString(runDate)}
      </h1>
      <div className="h-20 border-2 border-solid border-light-green rounded-lg w-80 px-2 grid content-center sm:w-96">
        <p className="font-bold underline px-4">Distance Ran</p>
        <p className="font-medium px-5">{distanceRan}</p>
      </div>
      <div className="h-20 border-2 border-solid border-light-green rounded-lg w-80 px-2 grid content-center sm:w-96">
        <p className="font-bold underline px-4">Run Duration</p>
        <p className="font-medium px-5">{minutesToHours(runDuration)}</p>
      </div>
      <div className="h-20 border-2 border-solid border-light-green rounded-lg w-80 px-2 grid content-center sm:w-96">
        <p className="font-bold underline px-4">Average Heart Rate</p>
        <p className="font-medium px-5">{averageHeartRate}</p>
      </div>
      <div>
        <span className="px-2 font-bold">Photo</span>
        <div className="border-2 border-solid border-light-green rounded-lg w-80 sm:w-96">
          <img className="rounded-md" src={photoUrl} />
        </div>
      </div>
      <div className="w-80 flex justify-between sm:w-96">
        <LinkButton text="Edit Run" idRun={runId} />
        <Button
          text="Delete Run"
          buttonType="button"
          onDeleteClick={deleteHandler}
        />
      </div>
    </li>
  );
}
