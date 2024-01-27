'use client';
import React, { ElementRef, useCallback, useEffect, useRef } from 'react';

interface ModalInterface {
  open: boolean;
  setOpen: (prev: boolean) => void;
  children: React.ReactNode;
}

export default function Modal({ children, open, setOpen }: ModalInterface) {
  const modalRef = useRef<ElementRef<'dialog'>>(null);

  const openModal = () => modalRef.current?.showModal();

  const toggleOpen = () => setOpen(false);

  useEffect(() => {
    if (open) {
      openModal();
    }
  }, [open]);
  return (
    <div>
      <dialog ref={modalRef} id="my_modal_5" className="modal modal-middle ">
        <div className="bg-white max-md:w-[80%] max-sm:modal-box max-sm:w-[90%] w-[750px] p-[24px] rounded-[8px] border-[1.5px]">
          {children}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={toggleOpen}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
