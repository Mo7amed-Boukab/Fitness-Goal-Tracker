import { useEffect, useState } from "react";
import CardMessage from "./CardMessage";

const ProgressionCard = () => {
  const [progressions, setProgressions] = useState([]);

  useEffect(() => {
    const goals = JSON.parse(localStorage.getItem("goals")) || [];
    const progressData = JSON.parse(localStorage.getItem("progress")) || {};
    
    const validProgressions = Object.entries(progressData)
      .filter(([titre]) => goals.some(goal => goal.titre === titre))
      .map(([titre, data]) => ({
        titre,
        ...data,
        percentage: Math.round((data.actuel / data.objectif) * 100)
      }));

    setProgressions(validProgressions);
  }, []);

  if (progressions.length === 0) {
    return (
      <CardMessage content="Aucune progression n'a été enregistrée pour le moment." />
    );
  }

  return progressions.map((prog, index) => (
    <div className="progression-card" key={index}>
      <div className="objective-info">
        <h3 className="objective-title">{prog.titre}</h3>
        <p className="objective-categorie">Catégorie • {prog.categorie}</p>
      </div>
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${prog.percentage}%` }}
        >
          <span className="progress-text">{prog.percentage} %</span>
        </div>
      </div>
    </div>
  ));
};

export default ProgressionCard;
