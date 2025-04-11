import Button from "./Button";

const Header = ({ addObjective }) => {
  return (
    <div className="header">
      <h1 className="title">Fit Tracker</h1>
      <Button className="addBtn" name="Ajouter un objectif" onClick={addObjective} />
    </div>
  );
};

export default Header;
