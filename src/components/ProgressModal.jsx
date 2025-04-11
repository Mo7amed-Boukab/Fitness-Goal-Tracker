import ModalHeader from "./ModalHeader";
import InputField from "./InputField";
import ModalActions from "./ModalActions";
import { useState } from "react";

const ProgressModal = ({ onClose, goal }) => {
  const [progress, setProgress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const progressData = JSON.parse(localStorage.getItem("progress")) || {};
    
    progressData[goal.titre] = {
      objectif: parseInt(goal.objective),
      actuel: parseInt(progress),
      categorie: goal.categorie
    };
    
    localStorage.setItem("progress", JSON.stringify(progressData));
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <ModalHeader title="Ajouter un progrès" onClose={onClose} />
        <form>
          <InputField
            label="Valeur actuelle"
            id="progress"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            type="number"
            placeholder="Entrez votre progression"
          />
          <ModalActions 
            onCancel={onClose} 
            onSave={handleSubmit}
            saveLabel="Ajouter"
          />
        </form>
      </div>
    </div>
  );
};

export default ProgressModal; 