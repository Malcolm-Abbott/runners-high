import { useEffect, useRef } from 'react';
import { deleteRun, type Run } from '../lib/fetch';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  updateRuns: (arg1: Run[]) => void;
  idRun: number | undefined;
  userRuns: Run[] | undefined[];
};

export function Modal({ isOpen, onClose, idRun, userRuns, updateRuns }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      modal.current?.close();
    } else {
      modal.current?.showModal();
    }
  }, [isOpen]);

  async function confirmHandler() {
    try {
      await deleteRun(idRun);
      const newRuns: Run[] = [];
      userRuns.forEach((run) => {
        if (run.runId !== idRun) newRuns.push(run);
      });
      updateRuns(newRuns);
    } catch (err) {
      console.error(err);
    } finally {
      onClose();
    }
  }

  return (
    <dialog
      ref={modal}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
      }}
      className="rounded-lg shadow-lg">
      <div className="h-96 min-w-96 gap-16 grid place-content-center">
        <h1 className="text-center font-medium text-xl">
          Would you like to delete your run?
        </h1>
        <div className="flex justify-between  min-w-96 mx-24">
          <button
            type="button"
            className="bg-light-green border-2 border-solid border-light-green rounded-lg h-12 w-40 shadow-md ring-2 ring-dark-green font-medium"
            onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="bg-light-green border-2 border-solid border-light-green rounded-lg h-12 w-40 shadow-md ring-2 ring-dark-green font-medium"
            onClick={confirmHandler}>
            Confirm
          </button>
        </div>
      </div>
    </dialog>
  );
}
