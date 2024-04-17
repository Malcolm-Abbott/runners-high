import { useEffect, useRef } from 'react';
import type { Run } from '../lib/fetch';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  updateRuns: (arg1: Run[]) => void;
};

export function Modal({ isOpen, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      modal.current?.close();
    } else {
      modal.current?.showModal();
    }
  }, [isOpen]);
  console.log('isOpen', isOpen);
  return (
    <dialog
      ref={modal}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
      }}
      className="rounded-lg shadow-lg">
      <div className="h-96 min-w-96 gap-8 grid place-content-center">
        <h1 className="text-center font-medium text-lg">
          Would you like to delete your run?
        </h1>
        <div>
          <button
            type="button"
            className="bg-light-green border-2 border-solid border-light-green rounded-lg h-12 w-40 shadow-md ring-2 ring-dark-green font-medium"
            onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="bg-light-green border-2 border-solid border-light-green rounded-lg h-12 w-40 shadow-md ring-2 ring-dark-green font-medium"
            onClick={onClose}>
            Confirm
          </button>
        </div>
      </div>
    </dialog>
  );
}
