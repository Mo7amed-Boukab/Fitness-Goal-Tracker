import "./App.css";
import Header from "./components/Header.jsx";
import Links from "./components/Links.jsx";
import Card from "./components/Card.jsx";
import Modal from "./components/Modal.jsx"
import Performance from "./components/Performance.jsx";

const App = () => {
  return (
    <div className="container">
      <Header></Header>
      <Links></Links>
      <div className="content">   
        <Card></Card>
      </div>
      {/* <Performance /> */}
      {/* <Modal></Modal> */}
    </div>
  );
};

export default App;
