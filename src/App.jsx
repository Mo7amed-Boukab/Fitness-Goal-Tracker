import "./App.css";
import Header from "./components/Header.jsx";
import Links from "./components/Links.jsx";
import Modal from "./components/Modal.jsx"
import ProgressionSection from "./components/ProgressionSection.jsx";
import ObjectifsSection from "./components/ObjectivesSection.jsx";
import { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState('objectives');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  

 
  return (
    <div className="container">
      <Header addObjective= {handleOpenModal} />
      <Links activeTab= {activeTab} changeTo= {setActiveTab} />
      
      <div className="content">  
        {activeTab === 'objectives' ? <ObjectifsSection /> : <ProgressionSection />}
      </div>
        {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;

