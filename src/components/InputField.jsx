const InputField = ({ label, id, placeholder }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
