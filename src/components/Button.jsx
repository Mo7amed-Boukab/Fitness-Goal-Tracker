const Button = ({ name, onClick }) => {
  return (
    <button className="add-button" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
