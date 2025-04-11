import Button from "./Button";
import CardMessage from "./CardMessage";
import { useEffect, useState } from "react";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const CardObjective = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("goals")) || [];
    setGoals(storedData);
  }, []);

  const handleDelete = (index) => {
    const newGoals = goals.filter((_, i) => i !== index);
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
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
              <button className="icon-button edit">
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
    </>
  );
};

export default CardObjective;
