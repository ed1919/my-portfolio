import {
  FC,
  useState,
  useImperativeHandle,
  forwardRef,
  ReactElement,
} from "react";
import { Modal } from "@mui/material";

interface ISharedModalProps {
  children: ReactElement;
  ref: any;
}

const SharedModal: FC<ISharedModalProps> = forwardRef<any, ISharedModalProps>(
  ({ children }, ref) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = () => {
      setIsOpen(true);
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    useImperativeHandle(
      ref,
      () => ({
        open: handleOpen,
        close: handleClose,
      }),
      []
    );

    return (
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    );
  }
);

export default SharedModal;
