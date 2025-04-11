import ProgressionCard from "./ProgressionCard";
import StatsCard from "./StatsCard";
import { useEffect, useState } from "react";

const ProgressionSection = () => {
  const [stats, setStats] = useState({
    activeGoals: 0,
    achievedGoals: 0
  });

  useEffect(() => {
    const goals = JSON.parse(localStorage.getItem("goals")) || [];
    const progressData = JSON.parse(localStorage.getItem("progress")) || {};

    const activeGoals = goals.length;

    const achievedGoals = Object.values(progressData).filter(prog => 
      (prog.actuel / prog.objectif) * 100 >= 100
    ).length;

    setStats({
      activeGoals,
      achievedGoals
    });
  }, []);

  return (
    <div>
      <div className="stats-cards-container">
        <StatsCard
          title="Objectifs Atteints (7 derniers jours)"
          number={stats.achievedGoals}
          color="green"
        />
        <StatsCard
          title="Objectifs Actifs"
          number={stats.activeGoals}
          color="blue"
        />
      </div>
      <h2 className="progression-title">Progression des objectifs</h2>
      <ProgressionCard />
    </div>
  );
};

export default ProgressionSection;