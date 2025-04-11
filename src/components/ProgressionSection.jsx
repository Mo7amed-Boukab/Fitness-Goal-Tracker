import ProgressionCard from "./ProgressionCard";
import StatsCard from "./StatsCard";

const ProgressionSection = () => {
 
  return (
    <>
      <div className="stats-cards-container">
          <StatsCard color="blue" title="Objectifs Atteints (7 derniers jours)" number="0"></StatsCard>
          <StatsCard color="green" title="Objectifs Actifs" number="0"></StatsCard>
      </div>

      <h2 className="progression-title">Progression</h2>
      <ProgressionCard/>
     
    </>
  );
};

export default ProgressionSection;