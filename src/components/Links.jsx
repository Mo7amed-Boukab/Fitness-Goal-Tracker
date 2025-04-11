import { useState } from "react";
const Links = ({ activeTab, changeTo }) => {
  return (
    <div className="tabs">
      <button 
        className={`tab ${activeTab === 'objectives' ? 'active' : ''}`}
        onClick={() => changeTo('objectives')}
      >
        Mes Objectifs
      </button>
      <button
        className={`tab ${activeTab === 'progression' ? 'active' : ''}`}
        onClick={() => changeTo('progression')}
      >
        Résumé des Performances
      </button>
    </div>
  );
};

export default Links;
