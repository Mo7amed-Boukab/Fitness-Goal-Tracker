import Button from "./Button";
import CardMessage from "./CardMessage";

const Card = () => {
  return (
    <div className="cards-container">
      <CardMessage content="Vous n'avez pas encore d'objectifs. Commencez dès maintenant a ajouter
        des objectif et suivi vos progression !"></CardMessage>

      <div className="card-item">
        <div className="card-info">
          <h3>Boire 2L d'eau</h3>
          <p>Catégorie • Nutrition</p>
        </div>
        <Button name="Nouveau progrès"></Button>
      </div>
    </div>
  );
};

export default Card;
