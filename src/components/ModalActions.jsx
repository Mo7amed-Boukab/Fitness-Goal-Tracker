const ModalActions = ({ onCancel, onSave }) => {
 return (
   <div className="modal-actions">
     <button type="button" className="button-cancel" onClick={onCancel}>Annuler</button>
     <button type="submit" className="button-save" onClick={onSave}>Enregistrer</button>
   </div>
 );
};

export default ModalActions;
