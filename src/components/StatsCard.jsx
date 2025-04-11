const StatsCard = ({ title, number, color }) => {
  return (
    <div className={`stats-card ${color}`}>
      <p className="stats-title">{title}</p>
      <p className="stats-number">{number}</p>
    </div>
  );
};

export default StatsCard;
