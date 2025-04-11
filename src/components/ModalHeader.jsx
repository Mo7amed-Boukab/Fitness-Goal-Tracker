import { IoClose } from "react-icons/io5";

const ModalHeader = ({ title, onClose }) => {
  return (
    <div className="modal-header">
      <h2 className="modal-title">{title}</h2>
      <button className="modal-close" onClick={onClose} >
        <IoClose size={24} />
      </button>
    </div>
  );
};

export default ModalHeader;
