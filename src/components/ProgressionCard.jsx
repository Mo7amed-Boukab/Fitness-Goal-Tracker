
const ProgressionCard = () => {
  return (
    <div className="progression-card">
      <div className="objective-info">
        <h3 className="objective-title">Marcher 10 000 pas</h3>
        <p className="objective-categorie">Catégorie • Cardio</p>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: "25%" }}>
          <span className="progress-text">25 %</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressionCard;
