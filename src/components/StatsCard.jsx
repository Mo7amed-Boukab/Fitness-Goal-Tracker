const StatsCard = ({ color, title, number }) => {
  return (
    <div className={`stats-card ${color}`}>
      <div className="stats-title">{title}</div>
      <div className="stats-number">{number}</div>
    </div>
  );
};

export default StatsCard;
