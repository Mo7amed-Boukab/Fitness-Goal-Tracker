import Button from "./Button";
import CardMessage from "./CardMessage";
import Modal from "./Modal";
import React from "react";
import { useEffect, useState } from "react";


const CardObjective = () => {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goalToEdit, setGoalToEdit] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("goals")) || [];
    setGoals(storedData);
  }, []);

  const handleDelete = (index) => {
    const newGoals = goals.filter((_, i) => i !== index);
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  };

  const handleEdit = (goal) => {
    setGoalToEdit(goal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setGoalToEdit(null);
    const storedData = JSON.parse(localStorage.getItem("goals")) || [];
    setGoals(storedData);
  };

  return (
    <>
      {goals.length > 0 ? (
        goals.map((obj, index) => (
          <div className="card-item" key={index}>
            <button className="icon-button delete" onClick={() => handleDelete(index)}>
              <i className="fas fa-trash"></i>
            </button>
            <div className="card-info">
              <h3>{obj.titre}</h3>
              <p>Catégorie • {obj.categorie}</p>
            </div>
            <div className="card-actions">
              <Button name="Nouveau progrès" />
              <button className="icon-button edit" onClick={() => handleEdit(obj)}>
                <i className="fas fa-pen-to-square"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <CardMessage
          content="Vous n'avez pas encore d'objectifs. Commencez dès maintenant a ajouter
           des objectif et suivi vos progression !"
        />
      )}
      {isModalOpen && (
        <Modal onClose={handleCloseModal} goalToEdit={goalToEdit} />
      )}
    </>
  );
};

export default CardObjective;
