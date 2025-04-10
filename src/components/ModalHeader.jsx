import { IoClose } from "react-icons/io5";

const ModalHeader = ({ title, close }) => {
  return (
    <div className="modal-header">
      <h2 className="modal-title">{title}</h2>
      <button className="modal-close" onClick={close}>
        <IoClose size={24} />
      </button>
    </div>
  );
};

export default ModalHeader;
