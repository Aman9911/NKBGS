"use client";
import { memo, useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({
  isOpen,
  onClose,
  body,
  disabled,
  classname = "md:w-4/6 lg:w-3/6 xl:w-2/5",
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      setShowModal(true);
    } else {
      document.body.classList.remove("overflow-hidden");
      setShowModal(false);
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled,onClose]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div
          className={`relative md:top-2 w-full ${classname}  my-auto mx-auto h-auto lg:h-auto md:h-auto`}
        >
          {/* CONTENT */}
          <div
            className={`translate duration-300 h-full 
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* HEADER */}
              <div className="flex items-center pt-4 rounded-t justify-center relative ">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute right-2"
                >
                  <IoMdClose size={18} />
                </button>
              </div>
              {/* BODY */}
              <div className="relative pt-4 flex">{body}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Modal);
