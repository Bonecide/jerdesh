import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, ReactNode, useCallback, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  children: ReactNode;
  className?: string;
  cantClose?: boolean;
};
export const Modal = ({
  isOpen,
  setIsOpen,
  children,
  className,
  cantClose,
}: ModalProps) => {
  const onClose = useCallback(() => {
    if (!cantClose) {
      setIsOpen(false);
    }
  }, [setIsOpen, cantClose]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          onClick={onClose}
          className={`fixed top-0 !mt-0 flex w-screen left-0 h-full justify-center items-center cursor-pointer bg-black/30  z-10 `}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-[20px] max-h-[95vh] overflow-auto cursor-auto p-[30px] max-w-[90%] ${className}`}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
