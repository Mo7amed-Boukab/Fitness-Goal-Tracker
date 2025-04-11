import ModalHeader from "./ModalHeader";
import InputField from "./InputField";
import SelectField from "./SelectField";
import ModalActions from "./ModalActions";
import { useState } from "react";

const Modal = ({ onClose, onSave }) => {
  const [titre, setTitle] = useState("");
  const [categorie, setCategory] = useState("");
  const [objective, setGoal] = useState("");

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
    data.push({ titre, categorie, objective });
    console.log(data);
    localStorage.setItem("goals", JSON.stringify(data));
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <ModalHeader title="Ajouter un objectif" onClose={onClose} />
        <form>
          <InputField
            label="Titre"
            id="titre"
            placeholder="Ex: Marcher 10 000 pas"
            onChange={handleTitleChange}
          />

          <SelectField
            label="Catégorie"
            id="categorie"
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
            label="Objective"
            id="objective"
            placeholder="Ex: 10000"
            onChange={handleGoalChange}
          />

          <ModalActions onCancel={onClose} onSave={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
