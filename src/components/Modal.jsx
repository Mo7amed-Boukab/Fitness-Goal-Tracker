import ModalHeader from "./ModalHeader";
import InputField from "./InputField";
import SelectField from "./SelectField";
import ModalActions from "./ModalActions";
import { useState, useEffect } from "react";

const Modal = ({ onClose, goalToEdit = null }) => {
  const [titre, setTitle] = useState("");
  const [categorie, setCategory] = useState("");
  const [objective, setGoal] = useState("");

  useEffect(() => {
    if (goalToEdit) {
      setTitle(goalToEdit.titre);
      setCategory(goalToEdit.categorie);
      setGoal(goalToEdit.objective);
    }
  }, [goalToEdit]);

  const handleTitleChange = () => {
    const titre = document.getElementById("titre").value;
    setTitle(titre);
  };
  
  const handleCategorieChange = () => {
    const categorie = document.getElementById("categorie").value;
    setCategory(categorie);
  };
  
  const handleGoalChange = () => {
    const objective = document.getElementById("objective").value;
    setGoal(objective);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("goals")) || [];
    
    if (goalToEdit) {
 
      const updatedGoals = data.map(goal => 
        goal.titre === goalToEdit.titre ? { titre, categorie, objective } : goal
      );
      localStorage.setItem("goals", JSON.stringify(updatedGoals));
    } else {

      data.push({ titre, categorie, objective });
      localStorage.setItem("goals", JSON.stringify(data));
    }
    
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <ModalHeader 
          title={goalToEdit ? "Modifier l'objectif" : "Ajouter un objectif"} 
          onClose={onClose} 
        />
        <form>
          <InputField
            label="Titre"
            id="titre"
            value={titre}
            placeholder="Ex: Marcher 10 000 pas"
            onChange={handleTitleChange}
          />

          <SelectField
            label="Catégorie"
            id="categorie"
            value={categorie}
            options={[
              "Cardio",
              "Musculation",
              "Hydratation",
              "Nutrition",
              "Sommeil",
            ]}
            onChange={handleCategorieChange}
          />
          
          <InputField
            label="Objectif"
            id="objective"
            value={objective}
            placeholder="Ex: 10000"
            onChange={handleGoalChange}
          />

          <ModalActions 
            onCancel={onClose} 
            onSave={handleSubmit}
            saveLabel={goalToEdit ? "Modifier" : "Ajouter"}
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
